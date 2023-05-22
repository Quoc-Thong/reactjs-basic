import { useSession } from "next-auth/react";
import { useMemo } from "react";

const useCheckLogin = (): boolean => {
    const { data: session } = useSession();
    const isLogin = useMemo(() => !!session?.user?._id, [session?.user?._id]);

    return isLogin;
}

export default useCheckLogin;