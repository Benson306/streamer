import React, { useEffect, useState } from 'react'
import MuxPlayer from "@mux/mux-player-react";
import { useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";

function Streamer() {
    const { token } = useParams();
    const [playbackId, setPlaybackId] = useState(null);
    const [playbackToken, setPlaybackToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_stream_data?token=${token}`)
        .then(res => res.json())
        .then(data => {
            setPlaybackId(data.playbackId)
            setPlaybackToken(data.playbackToken);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

  return (
    <div>
        { 
        
        loading ? 
        <div className='flex justify-center mt-20'>     
            <FadeLoader
                color={"#ffcc00"}
            ></FadeLoader>
        </div> 
        : 
        <MuxPlayer
          playbackId={playbackId}
          tokens={{ playback: playbackToken}}
          playbackToken={playbackToken}
          accentColor="#ffcc00"
          streamType='on-demand'
        ></MuxPlayer> 
      }
    </div>
  )
}

export default Streamer
