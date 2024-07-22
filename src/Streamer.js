import React from 'react'
import MuxPlayer from "@mux/mux-player-react";
import { useParams } from 'react-router-dom';

function Streamer() {
    const { param1 } = useParams();
  return (
    <div>
      <MuxPlayer
      playbackId={param1}
      accentColor="#ffcc00"
      ></MuxPlayer>
    </div>
  )
}

export default Streamer
