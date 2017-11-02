import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Scenes
import Home from '../containers/Home';
import EndStation from '../containers/EndStation';
import Result from '../containers/Result';

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'app'}>
    <Scene
      hideNavBar
      key={'startStation'}
      component={Home}
    />
    <Scene
      hideNavBar
      key={'endStation'}
      component={EndStation}
    />
    <Scene
      hideNavBar
      key={'result'}
      component={Result}
    />
  </Scene>,
);
