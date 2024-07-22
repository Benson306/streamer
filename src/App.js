import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Streamer from "./Streamer";

function App() {
  return (
    <div className="App min-h-screen bg-zinc-800">
      <div className="bg-zinc-800 p-5 w-full text-yellow-300 text-bold">IKO NINI STREAMER</div>
        <Routes>
          <Route path="/streamer/:vid_id" element={<Streamer />} />
        </Routes>
    </div>
  );
}

export default App;
