import React, { useEffect , useState} from 'react'
import instance from '../instance';
import './Row.css'
import YouTube from 'react-youtube';


function Row({title,fetchurl}) {

  const APIKEY="47de2b9e8b2462b53975d18185ac40bf";
  const base_url = "https://image.tmdb.org/t/p/original";
  const [allMovies,setAllMovies]=useState([]);
  const [urlId, setUrlId] = useState('');
  const [movies, setMovies] = useState([]);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const fetchData = async () => {
    const response = await instance.get(fetchurl)
    
    const {data}=response;
    setAllMovies(data.results)
  }
  useEffect(() => {
    fetchData();
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    instance.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
        toggleVideoVisibility(); // Show the video
      } else {
        setUrlId('');
        toggleVideoVisibility(); // Hide the video
      }
    }).catch((error) => {
      console.log("An error", error);
    });
  };

  const toggleVideoVisibility = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <div className='row'>
      <h1 className='title' >{title}</h1>
      <div className='movierow'>
        {
          allMovies?.map(item => (
          <img 
          key={item.id}
            onClick={() => handleMovie(item.id)}
          src={`${base_url}${item.poster_path}`} alt="" className='movie'/>
        ))
        }
        
      </div>
      {isVideoVisible && urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default Row;