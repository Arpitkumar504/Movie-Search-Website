import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import { BsFillClockFill } from 'react-icons/bs'
import { url } from '../context/Contexts.js'

const Singlemovie = () => {
  const { id } = useParams();
  const [data, setdata] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getmovie = async (apiurl) => {
    try {
      const datas = await axios.get(apiurl);
      if (datas.data.Response === 'True') {
        setdata(datas);
        setLoading(false);
        console.log(datas);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let timeout = setTimeout(() => {
      getmovie(`${url}&i=${id}`);
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [id])

  if (isLoading) {
    return (
      <div className="movieloading">
        <h1>Loading... <BsFillClockFill /></h1>
      </div>
    )
  }

  return (
    <div>
      <div className="single">
        <h1 className="title">{data.data.Title.toUpperCase()}</h1>
        <div className="image">
          <img src={data.data.Poster} alt="#" />
        </div>
        <h1 className="des">Description of {data.data.Title}</h1>
        <div className="content">
          <div>
            <h5><span>Actors:</span> {data.data.Actors}</h5>
            <h5><span>Country:</span> {data.data.Country}</h5>
            <h5><span>Language:</span> {data.data.Language}</h5>
            <h5><span>Awards:</span> {data.data.Awards}</h5>
            <h5><span>Director:</span> {data.data.Director}</h5>
            <h5><span>Rating:</span> {data.data.Ratings[0].Value} And <span>Source:</span> {data.data.Ratings[0].Source}</h5>
            <h5><span>Released:</span> {data.data.Released}</h5>
          </div>
          <div>
            <h5><span>Writer:</span> {data.data.Writer}</h5>
            <h5><span>Type:</span> {data.data.Type}</h5>
            <h5><span>Year:</span> {data.data.Year}</h5>
            <h5><span>IMDB Rating:</span> {data.data.imdbRating}</h5>
            <h5><span>IMDB Votes:</span> {data.data.imdbVotes}</h5>
            <h5><span>Total Season:</span> {data.data.totalSeasons}</h5>
            <h5><span>Genre:</span> {data.data.Genre}</h5>
          </div>
        </div>
        <h5 className="story"><span>Story of {data.data.Title}</span> : {data.data.Plot}</h5>
        <div className="button">
          <Link to="/" ><button type="button" className="btn">Return Back</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Singlemovie
