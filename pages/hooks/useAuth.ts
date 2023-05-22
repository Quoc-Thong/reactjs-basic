import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/reducers/accountReducer';
import { persistor } from 'redux/store';

export default function useAuth(shouldRedirect: boolean) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = useCallback(() => {
    signOut({
      callbackUrl: `${process.env.NEXT_APP_URL}/${router.locale}/login`,
      redirect: shouldRedirect,
    });
    persistor.purge();
    dispatch(setUser({}));
  }, [dispatch, router.locale, shouldRedirect]);

  useEffect(() => {
    if (session === null) {
      setIsAuthenticated(false);
    } else if (session !== undefined) {
      if (session.accessTokenExpiry * 1000 < Date.now()) {
        handleSignOut();
      }
      setIsAuthenticated(true);
    }
  }, [handleSignOut, router.route, session]);

  return isAuthenticated;
}
