import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { LoginPage } from "./Pages/Login/LoginPage";
import { MainPage } from "./Pages/MainPage/MainPgae";
import { SongDetails } from "./Pages/SongDetails/SongDetails";
import { AlbumDetails } from "./Pages/AlbumDetails/AlbumDetails";
import { ArtistDetails } from "./Pages/ArtistDetails/ArtistDetails";

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
  },
  {
    path: '/album-details/:albumId',
    element: <AlbumDetails />
  },
  {
    path: '/artist-details/:artistId',
    element: <ArtistDetails />
  },
])

const App: React.FC = () => {
  return (  
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App
