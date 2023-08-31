import './App.css';
import BodyContainer from './components/BodyContainer';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ServicesContainer from './components/ServicesContainer';
import AddServices from './components/AddServices';

function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element:<BodyContainer/>,
    children:[
      {
        path:"/",
        element:<ServicesContainer/>
      },
      {
        path:"add",
        element:<AddServices/>
      }
    ]
  }]);

  return (
    <div className="App">
     
      <RouterProvider router={appRouter}/>
    
    </div>
  );
}

export default App;
