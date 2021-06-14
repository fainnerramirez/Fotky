import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignOut from './components/SignOut';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
//css bootstrap react
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { ROUTE } from './components/Route';

require('dotenv').config();

console.log(process.env);

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTE.HOME} component={Home} />
          <Route exact path={ROUTE.ABOUT_DEVELOPER} component={About} />
          <Route exact path={ROUTE.LOGIN} component={Login} />
          <Route exact path={ROUTE.SIGN_OUT} component={SignOut} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
