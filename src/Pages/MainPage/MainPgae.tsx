// import { useState } from "react";
import { Header } from "../../components/Ui/Header/Header";
import { Charts } from "../../components/Ui/charts/Charts";
import { Container } from "../../components/Ui/container/Container.style";
import { NavBar } from "../../components/Ui/nav/NavBar";
// import { Input } from "../../components/Ui/input/Input";
// import { useLazySearchLyricsQuery, useSearchLyricsQuery } from "../../store/API/searchApi";

export const MainPage = () => {
  // const [searchValue, setSearchValue] = useState("");
  // const { data, isError, isLoading } = useSearchLyricsQuery(searchValue, {refetchOnFocus: true});
  // const [fetchSong, {data: songData}] = useLazySearchLyricsQuery()

  // const searchResult = data?.hits;
  // const songResult = songData?.hits;
  // console.log(songResult)

  // const clickHandler = (songName: string) => {
  //   fetchSong(songName)
  // }

  return (
    <>
      <Container>
        <Header />
        <NavBar />
        <Charts />
      </Container>
    </>
  );
};
