import React,{Component,Fragment} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import {GlobalStyle} from './style.js';
import Header from './common/header/index';
import {IconfontStyle} from './statics/iconfont/iconfont.js';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <Fragment>
          <GlobalStyle />
          <IconfontStyle />
          <Header />  
          <BrowserRouter>
              <Route path = '/' exact component = {Home}></Route>
              <Route path = '/detail' exact component = {Detail}></Route>
          </BrowserRouter>
        </Fragment>    
      </Provider>
    )
  }
}
export default App;
