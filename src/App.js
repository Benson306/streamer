import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Streamer from "./Streamer";
import MySVG from './images/play.svg';

function App() {
  return (
    <div className="App min-h-screen bg-zinc-800">
      <div className="bg-zinc-800 p-5 w-full text-yellow-300 text-bold flex justify-center items-center">
        <img src={MySVG} alt="My SVG" className='max-h-10' />
        <span>IKO NINI STREAMER</span>
      </div>
        <Routes>
          <Route path="/streamer/:token" element={<Streamer />} />
        </Routes>
    </div>
  );
}

export default App;
