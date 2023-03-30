/** @format */

// Invisible Routes

import GeneralInformationdata1 from "views/Pages/GeneralInformationData/GeneralInformationdata1";

import Error404 from "views/Pages/Error404.js";
import ServerError from "views/Pages/ServerError";

var dashRoutes = [
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata1,
    layout: "/admin1",
  },
  {
    path: "/Error404",
    component: Error404,
    layout: "/auth",
  },
  {
    path: "/ServerError",
    component: ServerError,
    layout: "/auth",
  },
];
export default dashRoutes;
