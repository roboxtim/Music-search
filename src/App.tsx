import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./Pages/Login/LoginPage";
import { MainPage } from "./Pages/MainPage/MainPgae";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage /> 
  },
  {
    path: '/main',
    element: <MainPage /> 
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
