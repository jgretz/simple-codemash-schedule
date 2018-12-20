import _ from 'lodash';
import moment from 'moment';
import {createSelector} from 'reselect';
import selectedDaySelector from './selectedDaySelector';
import sessionsSelector from './sessionsSelector';

export default createSelector(
  selectedDaySelector,
  sessionsSelector,
  (day, allSessions) => {
    const sessions = (allSessions || []).filter(s =>
      moment(s.startsAt).isSame(day, 'day'),
    );

    return _.sortBy(sessions, s => moment(s.startsAt));
  },
);
