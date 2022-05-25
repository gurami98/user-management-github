
import { Dashboard, SignIn, SignUp } from "../pages";
import GuestGuard from "../components/GuestGuard";
import AuthGuard from "../components/AuthGuard";

const ROUTES = {
  SIGN_IN: "/",
  SIGN_UP: "signup",
  DASHBOARD: "dashboard",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: SignIn,
  },
  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: SignUp,
  },
  {
    path: ROUTES.DASHBOARD,
    guard: AuthGuard,
    page: Dashboard,
  }
];

export default ROUTES;
export { ROUTES_CONFIG };
