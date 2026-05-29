import { LOCAL_STORAGE_KEYS } from "@app/constants/storage.const";
import { localStorageUtil } from "@app/lib/storage.lib";
import type { TUser } from "@app/types/user.types";

const useAuth = () => {
	const user = localStorageUtil.get<TUser>(LOCAL_STORAGE_KEYS.USER);

	return { user, isAuthenticated: !!user };
};

export default useAuth;
