
import { Dashboard, SignIn, SignUp } from "../pages";
import GuestGuard from "../components/GuestGuard";
import AuthGuard from "../components/AuthGuard";
import Search from "../pages/search/Search";
import Favorites from "../pages/favorites/Favorites";
import User from "../pages/user/User";

const ROUTES = {
  SIGN_IN: "/",
  SIGN_UP: "signup",
  DASHBOARD: "dashboard",
  SEARCH: 'search',
  FAVORITES: 'favorites',
  USER: 'user/:id'
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
  },
  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },
  {
    path: ROUTES.FAVORITES,
    guard: AuthGuard,
    page: Favorites,
  },
  {
    path: ROUTES.USER,
    guard: AuthGuard,
    page: User,
  }
];

export default ROUTES;
export { ROUTES_CONFIG };
