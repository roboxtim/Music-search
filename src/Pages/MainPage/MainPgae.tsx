import { Header } from "../../components/Ui/Header/Header";
import { Charts } from "../../components/Ui/charts/Charts";
import { Container } from "../../components/Ui/container/Container.style";
import { NavBar } from "../../components/Ui/nav/NavBar";
import { StyledMainPage } from "./MainPage.style";

export const MainPage = () => {
  return (
    <Container>
      <StyledMainPage>
        <Header />
        <NavBar />
        <Charts />
      </StyledMainPage>
    </Container>
  );
};
