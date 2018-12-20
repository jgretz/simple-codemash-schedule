import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {toggleFavorite} from '../actions';

import {
  speakersForSessionSelector,
  roomForSessionSelector,
  categoriesForSessionSelector,
  isFavoriteSessionSelector,
} from '../selectors';

const styles = () => ({
  card: {
    marginBottom: 20,
  },
  actions: {
    display: 'flex',
  },
  contentFooter: {
    marginTop: 10,
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  room: {
    minWidth: 100,
  },
});

const handleFavoriteClick = (session, toggleFavorite) => () => {
  toggleFavorite(session.id);
};

const renderFavorite = (session, isFavorite, toggleFavorite) => (
  <IconButton
    aria-label="Add to favorites"
    color={isFavorite ? 'secondary' : 'default'}
    onClick={handleFavoriteClick(session, toggleFavorite)}
  >
    <FavoriteIcon />
  </IconButton>
);

const renderContent = (session, room, categories, classes) => (
  <Fragment>
    <Typography
      component="p"
      dangerouslySetInnerHTML={{__html: session.description}}
    />
    <div className={classes.contentFooter}>
      <Typography component="p" className={classes.room}>
        {room.name}
      </Typography>
      <Typography component="p">
        {categories.map(c => c.name).join(', ')}
      </Typography>
    </div>
  </Fragment>
);

const SessionCard = ({
  classes,
  session,
  speakers,
  room,
  categories,
  isFavorite,

  toggleFavorite,
}) => (
  <Card className={classes.card}>
    <CardHeader
      title={session.title}
      subheader={speakers.map(s => s.fullName).join(', ')}
      action={renderFavorite(session, isFavorite, toggleFavorite)}
      className="card-header"
    />
    <CardContent>
      {renderContent(session, room, categories, classes)}
    </CardContent>
  </Card>
);

const mapStateToProps = (state, props) => ({
  speakers: speakersForSessionSelector(state, props),
  room: roomForSessionSelector(state, props),
  categories: categoriesForSessionSelector(state, props),
  isFavorite: isFavoriteSessionSelector(state, props),
});

export default connect(
  mapStateToProps,
  {toggleFavorite},
)(withStyles(styles)(SessionCard));
