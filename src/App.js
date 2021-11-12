import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import ExploreMore from './Components/ExploreMore/ExploreMore';
import Purchase from './Components/Purchase/Purchase';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Login/Register/Register';
import Dashboard from './DashBoard/DashBoard/Dashboard';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/cycles'>
            <ExploreMore></ExploreMore>
          </Route>
          <PrivateRoute path='/purchase/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
