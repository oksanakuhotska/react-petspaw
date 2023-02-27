import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavigationPanel from "./pages/NavigationPanel";

import ErrorPage from "./pages/Error-Page";
import Home from './pages/Home';
import Voting from './pages/Voting';
import Breeds from './pages/Breeds';
import Gallery from './pages/Gallery';
import BreedsSorted from './pages/BreedsSorted';

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
				errorElement: <ErrorPage/>,
				index: true,
			},
			{
				path: "voting",
				element: <Voting />,
				errorElement: <ErrorPage/>,
			},
			{
				path: "breeds",
				element: <Breeds />,
				errorElement: <ErrorPage/>,
				children: [
					{
						path: "sorted",
						element: <BreedsSorted />,
						errorElement: <ErrorPage/>,
					},
				]
			},
			{
				path: "gallery",
				element: <Gallery />,
				errorElement: <ErrorPage/>,
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
