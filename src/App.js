import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavigationPanel from "./pages/NavigationPanel/navigationPanel.component";

import ErrorPage from "./pages/Error-Page/error-page.component";
import Home from "./pages/Home/home.component";
import Voting from "./pages/Voting/voting.component";
import Breeds from "./pages/Breeds/breeds.component";
import Gallery from "./pages/Gallery/gallery.component";
import BreedsSorted from "./pages/BreedsSorted/breedsSorted.component";

import { GlobalStyle } from "./global.styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationPanel />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        index: true,
      },
      {
        path: "voting",
        element: <Voting />,
        errorElement: <ErrorPage />,
      },
      {
        path: "breeds",
        element: <Breeds />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "sorted",
            element: <BreedsSorted />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "gallery",
        element: <Gallery />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
