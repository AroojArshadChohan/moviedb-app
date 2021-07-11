import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../assets/css/App.css';

import MovieContext from "./MovieContext";

import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


export default function MovieDeatils(props) {
  const { tvshows, setShows } = useContext(MovieContext);

  if (props.active == "TVD")

    return (
      <main>
        {tvshows.map((movie => {
          if (movie.id == props.id)
            return (
              <section id="movie-description-section">
                <div >

                  <img className="" src={movie.poster} alt="" width='100%' height='80%' />

                  <div className="movie-description-content-area" >
                    <h2>{movie.title}</h2>
                    <p>{movie.dateReleased}</p>
                    <h5>Original Channel</h5>
                    <p>{movie.channel}</p>
                    <h5>User Rating</h5>
                    <p>{movie.rating}%</p>
                    <h5>Overview</h5>
                    <p>{movie.description}</p>
                  </div>
                </div>

              </section>
            )


              }))}

      </main>)
  return (
    <div></div>
  )
}

