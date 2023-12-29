import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { LoginPage } from "./Pages/Login/LoginPage";
import { MainPage } from "./Pages/MainPage/MainPgae";
import { SongDetails } from "./Pages/SongDetails/SongDetails";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage /> 
  },
  {
    path: '/main',
    element: <MainPage /> 
  },
  {
    path: '/song-details/:songId',
    element: <SongDetails />
  }
])

const App: React.FC = () => {
  return (  
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App
