import "./App.css";
import Error from "./Error.jsx";
import Furniture from "./Furniture.jsx";
import Luckny from "./home/Luckny.jsx";
import Test from "./home/test.jsx";
import Login from "./login/Login";
import Registration from "./login/Registration";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      // errorElement: <Error/>,
    },
    {
      path: "/register",
      element: <Registration />,
      // errorElement: <Error/>,
    },
    {
      path: "/fur",
      element: <Furniture />,
      // errorElement: <Error/>,
      children: [
        {
          path: "/fur",
          element: <Navigate to="/fur/home" replace />,
        },
        {
          path: "/fur/home",
          element: <Luckny />,
        },
        {
          path: "/fur/test",
          element: <Test />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
