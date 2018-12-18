import React from 'react';
import {withRouter} from 'react-router';

import {Routes} from './features/shared/components';

const Container = () => (
  <div className="root">
    <Routes />
  </div>
);

export default withRouter(Container);
