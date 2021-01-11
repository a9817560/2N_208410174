import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App_74.module.scss';

import Header_74 from './components/Header_74'
import HomePage_74 from './pages/HomePage_74'
import HomePage3_74 from './pages/HomePage3_74'
import ShopOverview_74 from './pages/ShopOverview_74';
import ShopOverview3_74 from './pages/ShopOverview3_74';
import ShopProducts3_74 from './pages/ShopProduct3_74';

function App_74() {
  return (
    <div>
      <Header_74 />
      <Switch>
        <Route exact path='/' component={HomePage_74} />
        <Route exact path='/shop_74' component={ShopOverview_74} />
        <Route exact path='/crown3_74' component={HomePage3_74} />
        <Route exact path='/crown3_74/shop3_74/:product' component={ShopProducts3_74} />
        <Route exact path='/crown3_74/shop3_74' component={ShopOverview3_74} />        
      </Switch>
    </div>
  );
}

export default App_74;
