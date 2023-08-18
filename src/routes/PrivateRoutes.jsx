import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContexts";

export const PrivateRoutes = ({children}) => {
    const {currentUser } = UserAuth();

    if(!currentUser) {
        return <Navigate to="/" replace={true} />
    }
  return children
}
