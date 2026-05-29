import { ROUTES } from "@app/constants/routes.const";
import useAuth from "@app/hooks/use-auth.hook";
import { Navigate, useLocation } from "react-router-dom";

const PrivateGuard = ({ children }: React.PropsWithChildren) => {
	const { isAuthenticated } = useAuth();
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate replace state={{ from: location }} to={ROUTES.LOGIN} />;
	}

	return <>{children}</>;
};

export default PrivateGuard;
