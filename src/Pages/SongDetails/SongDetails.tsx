import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useLazyGetSongByIdQuery } from '../../store/API/songDetailsApi';


export const SongDetails = () => {
  const { songId } = useParams();
  // const [songDetails, setSongDetails] = useState(null);
  const [fetchTriger, {data}] = useLazyGetSongByIdQuery()

  // const dataSong = data?.response?.song;
  console.log(data);
  
  useEffect(() => {
    if (songId) {
      fetchTriger(songId)
    }
  }, [songId]);

  return (
    <div>
     <h1>{data?.song.full_title}</h1>
     <h2>{data?.song.title}</h2>
    </div>
    
  )
}