import { useEffect, useState } from "react"

export const Favorites = () => {
  const [favSongs, setFavSongs] = useState<string[]>([])

  useEffect(() => {
    // Получить из localStorage избранные песни или альбомы
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavSongs(favorites);
  }, []);
  return (
    <ul>
      {favSongs.map((elem: any) => ( //eslint-disable-line
        <li key={elem.id}>{elem.title}</li>
      ))}
    </ul>
  )
}