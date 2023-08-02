import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Components/Root/Root';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import Notfound from './Components/Page404/Notfound';
import Detail from './Components/Detail/Detail';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
    <Route path='/' element={<Shop></Shop>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/:id' element={<Detail></Detail>}></Route>
    <Route path='*' element={<Notfound></Notfound>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
