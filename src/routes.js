import Home from "./views/Home.js/home";
import Add from "./views/AddNews/add"
import Dashboard from "./views/Dashboard/dashboard"

const routes = [
    { path: "/", exact: true, name: "Home", component: Home },
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/add-blog", name: "Add Blog", component: Add },
];

export default routes;