import { useCallback, useEffect } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { setUser, setUserLoading } from 'redux/reducers/accountReducer';

// types
import { Account } from 'model';

import httpClient from 'utils/httpClient';
import { getSession } from 'next-auth/react';

const useAccount = () => {
  const dispatch = useDispatch();

  const getUser = useCallback(async () => {
    try {
      const session = await getSession();
      if (session?.accessToken) {
        dispatch(setUserLoading(true));
        const userRes = await httpClient<Account>('/account', { method: 'GET' });
        dispatch(setUser(userRes));
      }
    } catch (error) {
    } finally {
      dispatch(setUserLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getUser();
    }

    return () => {
      isMounted = false;
    };
  }, [getUser]);

  return {
    getUser,
  };
};

export default useAccount;
