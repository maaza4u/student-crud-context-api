import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const Routes = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddUser} />
        <Route path="/edit/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default Routes;
