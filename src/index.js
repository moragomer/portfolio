import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./style.css";
import { ShoppingList } from "./pages/shoppingList";
import { Cards } from "./pages/cards";
import { Flex } from "./components/input";
import spacing from "./components/styles/spacing";
import Title from "./components/navigation/navbar";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import colors from "./components/styles/colors";
import { Charts } from "./pages/charts";
import { Calc } from "./pages/calc";
import { Api } from "./pages/fetch";
const App = (props) => {
  return (
    <Flex
      flexDirection={"column"}
      height={"100%"}
      gap={spacing.lg}
      width={"100%"}
      backgroundColor={colors.white}
      alignItems={"center"}
    >
      {/* Navbar */}
      <div style={{ position: "sticky", top: "0", width: "100%" }}>
        <Title />
      </div>
      <Outlet />
    </Flex>
  );
};

// Navigation
const Wrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cards",
          element: <Cards />,
        },
        {
          path: "list",
          element: <ShoppingList />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "calc",
          element: <Calc />,
        },
        {
          path: "charts",
          element: <Charts />,
        },
        {
          path: "api",
          element: <Api />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Wrapper />);
