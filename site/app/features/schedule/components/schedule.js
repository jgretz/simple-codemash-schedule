import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';

import {loadCodeMashData} from '../actions';

const Schedule = () => <div>Hello CodeMash</div>;

const ComposedSchedule = compose(
  withLifecycle({
    onDidMount({loadCodeMashData}) {
      loadCodeMashData();
    },
  }),
)(Schedule);

export default connect(
  null,
  {loadCodeMashData},
)(ComposedSchedule);
