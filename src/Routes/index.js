import  Main from "../Containers/Main";
import  Login from "../Containers/Login";

const indexRoutes = [
  {
    path: "/" , component: Login,
  },
  {
    path: "/dashboard", component: Main
  },

];

export default indexRoutes;
