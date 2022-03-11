import './App.css';
import {moviesData} from './Data'
import { useState } from 'react';
import ListMovies from './component/listMovies';

// const add = () => {
//   setMovies(
//   [...oldArray,{srcvideo:"https://www.youtube.com/embed/u4D33yfWdvQ",title:"مسلسل شوفلي حل - الموسم 2008 - الحلقة السادسة والعشرون"}])
// }

function App() {
  let [movies, setMovies] = useState(moviesData);

  const add= () => {
    setMovies([...movies,{
      srcvideo:"https://www.youtube.com/embed/dtxL52SDR3E",      title:"one piece"}])
  }
  return (
    <>
      <ListMovies movies={movies}/>
      <form>
        <fieldset className='cadre'>
        <legend >add video</legend>
        <div>
          <label for="url">url</label>
          <input type="text"id="url"/>
        </div>
        <div>
          <label for="url">title</label>
          <input type="text" className='title'/>
        </div>
        <div>
        <button onClick={add} >add</button>
        </div>
        </fieldset>
      </form>
    </>
  );
}
export default App;
