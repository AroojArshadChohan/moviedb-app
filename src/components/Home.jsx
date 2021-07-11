import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';



import Hero from './Hero';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


class Home extends Component {
  render() {

    if (this.props.active == "Home")
      return (

        <main>
          <Hero/>
          

        </main>
        
      )
    return (
      <div></div>
    )
  }
}

export default Home;

