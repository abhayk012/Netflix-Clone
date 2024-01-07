import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css'

function Banner({ fetchurl }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [Banner, setBanner] = useState([]);
  const fetchData = async () => {
    const response = await instance.get(fetchurl)

    const { data } = response;
    setBanner(data.results[Math.floor(Math.random() * data.results.length)])
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div >

      <div className='banner' style={{
        height: "600px", backgroundPosition: "center", backgroundSize: "cover",
        backgroundImage: `url(${base_url}${Banner.backdrop_path})`
      }}>
        <div className='bannercontent'>
        <h1>{Banner?.name}</h1>
        <button className='btn btn-danger'>Play  <i class="fa-solid fa-play fa-sm bg-transparent ms-1"></i></button>
        <button className='btn border-white ms-3  more'>More Info <i class="fa-solid fa-caret-down bg-transparent ms-1"></i></button>
        <h5>{Banner?.overview}</h5>
        
        </div>
      </div>
    </div>
  )
}

export default Banner