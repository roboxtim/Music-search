import { useEffect, useState } from "react";
import { Container } from "../../components/Ui/container/Container.style";
import { Input } from "../../components/Ui/input/Input";
import { useSearchLyricsQuery } from "../../store/API/searchApi";
import { useDebounce } from "../../hooks/debounce";
// import { useChartSongsQuery } from "../../store/API/chartSongsApi";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const {
    // isLoading,
    isError,
    data: searchData,
  } = useSearchLyricsQuery(debounced, {
    skip: search.length < 3,
  });

  // const { data: chartData } = useChartSongsQuery()

  useEffect(() => {
    console.log(debounced);
    // console.log(''searchData);
  }, [debounced]);

  console.log(searchData);
  

  return (
    <Container>
      {isError && <p>Произошла какая то ошибка</p>}
      <div className="input">
        <Input
          type="text"
          placeholder="Введите название песни"
          isError
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {/* {isLoading && <p>Загрузка</p>} */}
          {searchData?.response &&          
            searchData?.response?.hits.map((name) => (
              <li key={name.result.id}>{name.result.full_title}</li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

