import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import PageOne from './pages/HomeScreen';
import PageTwo from './pages/ProfileScreen';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={PageOne} initial={true} hideNavBar={true}  />
      <Scene key="PageTwo" component={PageTwo} />
    </Scene>
  </Router>
);
export default Routes;
