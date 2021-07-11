import React from 'react';
import { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './LoginPage';
import Signup from './Signup';
import TilesM from './TilesMovies';
import TilesTV from './TilesTV';
import MovieD from './MovieDetails';
import TVD from './TVDetails';
import Fmovies from './Fmovies';
import Fshows from './Fshows';
import Content from './Content';
import '../assets/css/App.css';
import MovieContext from "./MovieContext";


const sections = [
  { title: 'Home', url: 'Home' },
  { title: 'Movies', url: 'Fmovies' },
  { title: 'TV Shows', url: 'Fshows' },
  { title: 'Account', url: 'Home' },
  { title: 'SignIn', url: 'Login' },
  { title: 'SignUp', url: 'registration' }

];



function App() {

  var [activeComponent, setComponent] = useState([
    {
      nameofComp: "Home",//use to set main component
      user: "Guest"//use to set menu items
    }
  ]);

  var [id, setID] = useState();

  const [movies, setMovies] = useState([]);


  useEffect(() => {

    fetch("http://localhost:5000/movies")
      .then(res => res.json())
      .then((data) => {

        setMovies((previousState) => {

          previousState = data;
          return previousState
        });


      })
      .catch(err => console.log(`Error ${err}`));

  }, [])

  var [tvshows, setShows] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/TVShows")
      .then(res => res.json())
      .then((data1) => {


        setShows((previousState) => {

          previousState = data1;
          return previousState
        });


      })
      .catch(err => console.log(`Error ${err}`));

  }, [])

  const handlleActiveID = (idget) => {

    setID(
      idget

    )
  }


  const handlleActiveComp = (name) => {


    setComponent([{

      nameofComp: name

    }])


  }
  console.log(tvshows);
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg" className="main">
        <Header title="TopWatch" sections={sections} handleAC={handlleActiveComp} />
        <Home active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
        <Login active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
        <Signup active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
        <MovieContext.Provider value={{ movies, setMovies, tvshows, setShows }}>
          <Fmovies handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
          <Fshows handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
          <TilesM handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

          <TilesTV handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

          <MovieD id={id} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
          <TVD id={id} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

        </MovieContext.Provider>
        
      </Container>
      <Content active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

<Footer title="Footer" description="None" />
      

    </React.Fragment>
  );
}

export default App;
/*
*/