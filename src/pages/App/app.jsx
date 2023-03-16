import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavigationPanel from "../Navigation-Panel/navigation-panel.component";

import ErrorPage from "../Error-Page/error-page.component";
import Home from "../Home/home.component";
import Voting from "../Voting/voting.component";
import Breeds from "../Breeds/breeds.component";
import Gallery from "../Gallery/gallery.component";
import BreedsSorted from "../Breeds-Sorted/breeds-sorted.component";

import { GlobalStyle } from "../../global.styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationPanel />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
            index: true,
          },
          {
            path: "voting",
            element: <Voting />,
          },
          {
            path: "breeds",
            element: <Breeds />,
          },
          {
            path: "sorted",
            element: <BreedsSorted />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
        ],
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
