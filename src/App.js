import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  const Router = createBrowserRouter([{
    path: "/",
    element: <><Navbar/> <Home/> </>
  },
  {
    path: "/about",
    element: <><Navbar/><About/></>
  }])
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
