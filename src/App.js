import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import AddProducts from './Pages/AddProducts/AddProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Order from './Pages/Home/Order/Order';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <AuthProvider>

       <Router>

            <Switch>
                  <Route exact path='/'>
                     <Home></Home>
                  </Route>
                  
                  <Route path='/home'>
                     <Home></Home>
                  </Route>

                  <Route path='/addproduct'>
                     <AddProducts></AddProducts>
                  </Route>

                  <Route path='/explore'>
                     <Explore></Explore>
                  </Route>

                  <Route path='/login'>
                     <Login></Login>
                  </Route>

                  <Route path='/register'>
                     <Register></Register>
                  </Route>

                  <PrivateRoute path='/orders/:Id'>
                     <Order></Order>
                  </PrivateRoute>

                  <PrivateRoute path='/dashboard'>
                     <Dashboard></Dashboard>
                  </PrivateRoute>

                  <Route path='*'>
                     <NotFound></NotFound>
                  </Route>

            </Switch>
      
         </Router>

    </AuthProvider>
  );
}

export default App;

/*
This is original Rolex hand watch. There are only in stock. Order Now without delay...
https://i.ibb.co/KcZS264/watch3.png
https://i.ibb.co/HpBqwr0/watch4.png
https://i.ibb.co/GCT2YyD/watch5.png
https://i.ibb.co/Dfpwt2Y/watch6.png
https://i.ibb.co/HH1TbLY/watch9.png
https://i.ibb.co/jMhL8vr/watch10.png
https://i.ibb.co/hX1Knwb/watch11.png
https://i.ibb.co/zf29jgP/watch13.png
https://i.ibb.co/XxznRp0/watch14.png
https://i.ibb.co/JBL9JjS/watch15.png
*/
