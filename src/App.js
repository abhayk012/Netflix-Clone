// import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Navigationbar from './components/Navigationbar';
import Banner from './components/Banner';
import  {requests}  from './requests'
import Footer from './components/Footer';
function App() {
  return (
    
    <div sm={12} md={6} lg={4} xl={4}>
      

      <Navigationbar/>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchurl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
      <Footer/>
    </div>
     
  );
}

export default App;
