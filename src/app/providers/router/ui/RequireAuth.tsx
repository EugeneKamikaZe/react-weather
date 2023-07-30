import { Navigate, useLocation } from 'react-router-dom';

import { getRouteMain } from '~/shared/const/router';
// import { getRouteLogin } from "~/shared/const/router";

export function RequireAuth({ children }: { children: JSX.Element }) {
    // const auth = useSelector(getUserAuthData);
    const auth = true;
    const location = useLocation();

    if (!auth) {
        //  Redirect them to the /login page, but save the current location they were
        //  trying to go to when they were redirected. This allows us to send them
        //  along to that page after they login, which is a nicer user experience
        //  than dropping them off on the home page.
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
}
