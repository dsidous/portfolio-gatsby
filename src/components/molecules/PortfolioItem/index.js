import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  portfolioItem: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing.unit * 2,
    },
  },
  portfolioLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  githubLink: {
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  portfolioText: {
    color: theme.palette.grey[100],
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
  portfolioImage: {
    background: theme.palette.grey[800],
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridColumnGap: `${theme.spacing.unit * 2}px`,
      gridTemplateColumns: '2fr 1fr',
    },
    '& img': {
      display: 'block',
      width: '100%',
    },
    '& h6': {
      fontWeight: 'bold',
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing.unit * 4,
        marginTop: 0,
      },
    },
  },
});

const PortfolioItem = ({ classes, work }) => ((
  <div className={classes.portfolioItem}>
    <div className={classes.portfolioImage}>
      <Link
        href={work.url}
        className={classes.portfolioLink}
        target="_blank"
        rel="noopener"
      >
        <img src={work.image} alt="" />
      </Link>
      <div className={classes.portfolioText}>
        <Typography
          variant="subtitle1"
          color="primary"
        >
          {work.title}
        </Typography>
        <Typography
          color="primary"
          paragraph
          variant="caption"
        >
          {work.desc}
        </Typography>
        {work.github &&
          <Link
            href={work.github}
            target="_blank"
            rel="noopener"
          >
            <Typography
              className={classes.githubLink}
              color="primary"
              paragraph
              variant="caption"
            >
              GitHub
            </Typography>
          </Link>
        }
      </div>
    </div>
  </div>
));

PortfolioItem.propTypes = {
  classes: PropTypes.object.isRequired,
  work: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioItem);
