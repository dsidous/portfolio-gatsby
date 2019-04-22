import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import InViewMonitor from 'react-inview-monitor';

import SectionLayout from '../../molecules/SectionLayout';

const styles = theme => ({
  hidden: {
    visibility: 'hidden',
  },
  group: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  textField: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '48%',
    },
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Contact extends PureComponent {
  state = {};

  side = (
    <>
      <Typography
        color="primary"
        component="h2"
        variant="h6"
      >
        CONTACT
      </Typography>
      <Typography
        color="primary"
        component="h4"
        variant="body2"
      >
        Say hello
      </Typography>
    </>
  );

  main = classes => (
    <InViewMonitor
      classNameNotInView={classes.hidden}
      classNameInView="animated fadeIn"
    >
      <Typography
        color="primary"
        paragraph
      >
        Have a question or want to work together?
      </Typography>

      <form
        method="POST"
        action="https://mailthis.to/jonastamas2@gmail.com"
        encType="multipart/form-data"
      >
        <FormGroup
          className={classes.group}
          row
        >
          <TextField
            id="name"
            label="YOUR NAME"
            className={classes.textField}
            type="text"
            name="name"
            autoComplete="name"
            margin="normal"
            onChange={this.handleChange('name')}
            required
            variant="outlined"
          />
          <TextField
            id="email"
            label="YOUR EMAIL"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            onChange={this.handleChange('email')}
            required
            variant="outlined"
          />
        </FormGroup>
        <TextField
          id="outlined-multiline-static"
          name="message"
          label="MESSAGE"
          multiline
          fullWidth
          rows="10"
          margin="normal"
          onChange={this.handleChange('message')}
          required
          variant="outlined"
        />
        <Button
          className={classes.button}
          size="large"
          variant="outlined"
          type="submit"
        >
          SEND MESSAGE
        </Button>
        <input type="hidden" name="_subject" value="Contact from website" />
        <input type="hidden" name="_after" value="https://tamasjonas.com/" />
        <input type="hidden" name="_honeypot" value="" />
      </form>
    </InViewMonitor>
  );


  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = () => {
    const { name, email, message } = this.state;
    fetch('https://mailthis.to/jonastamas2@gmail.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _subject: 'Message from website',
        email,
        name,
        message,
      }),
    });
  };

  render() {
    const { light, classes } = this.props;
    return (
      <SectionLayout
        side={this.side}
        main={this.main(classes)}
        light={light}
      />
    );
  }
}

Contact.propTypes = {
  light: PropTypes.bool,
  classes: PropTypes.object,
};

Contact.defaultProps = {
  light: false,
  classes: '',
};

export default withStyles(styles)(Contact);
