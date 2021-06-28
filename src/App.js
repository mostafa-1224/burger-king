import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing-Component/Landing'
import Layout from './Layout-Component/Layout'
import Offers from './Offers-Component/Offers'
import Upcoming from './Upcoming-Component/Upcoming'
import Form from './Form-Component/Form'
import Footer from './Footer-Component/Footer'
import '../node_modules/normalize.css/normalize.css'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/burger-king" render={props => (
            <Fragment>
              <Landing />
              <Layout />
              <Offers />
              <Upcoming />
              <Form />
              <Footer />
            </Fragment>
          )} />
          <Route exact path="/contact-us" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
