// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function PrivateRoute({element: Component, ...rest}) {
//   const {currentUser} = useAuth()
//     return (
//     <Route>
//         {...rest}
//         render={props => {
// return currentUser ? <Component {...props}/> : <Redirect to="/login" />
//         }}
//     </Route>
//   )
// }

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}
