import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import { UserProvider } from "./providers/UserProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <>
      <ChakraProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
