import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
      return <div>On loading...</div>
  }
});

export default () => <LoadableComponent />