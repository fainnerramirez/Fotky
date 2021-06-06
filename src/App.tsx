import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
//css bootstrap react
import 'bootstrap/dist/css/bootstrap.min.css';

import * as ROUTE from './components/Route';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTE.HOME} component={Home} />
          <Route exact path={ROUTE.ABOUT_DEVELOPER} component={About} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
