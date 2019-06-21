import React,{Component,Fragment} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import {GlobalStyle} from './style.js';
import Header from './common/header/index';
import {IconfontStyle} from './statics/iconfont/iconfont.js';
import store from './store';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <Fragment>
          <GlobalStyle />
          <IconfontStyle /> 
          <BrowserRouter>
              <Header />  
              <Route path = '/' exact component = {Home}></Route>
              <Route path = '/login' exact component = {Login}></Route>
              <Route path = '/detail:id' exact component = {Detail}></Route>
              <Route path = '/write' exact component = {Write}></Route>
          </BrowserRouter>
        </Fragment>    
      </Provider>
    )
  }
}
export default App;
