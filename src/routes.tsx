import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import useMediaQuery from '@mui/material/useMediaQuery';


  


const Routes = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <span>
      {`(min-width:600px) matches: ${matches}`}
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddUser} />
        <Route path="/edit/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
    </div>
    </span>
  );
};

export default Routes;

