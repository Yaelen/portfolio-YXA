import './App.css'
import {createBrowserRouter, RouterProvider, Link, } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
            <h1 className="text-6xl font-extrabold text-red-500">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-lg mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>

            <Link to="/"
                  className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Go Home
            </Link>
        </div>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])
function App() {


  return <RouterProvider router={router} />
}

export default App
