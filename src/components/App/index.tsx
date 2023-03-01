import { ThemeProvider } from "styled-components";
import { ToastContainer } from "modsen-toasts-lib";

import WeekWeather from "@components/WeekWeather";
import Calendar from "@components/Calendar";
import Spinner from "@components/Spinner";
import { useCoords } from "@hooks";
import GlobalStyles from "@styles";
import { useCustomSelector } from "@store";
import { loadingSelector } from "@store/selectors";
import { THEMES } from "@constants";

import { Container } from "./styles";

function App() {
  const loading = useCustomSelector(loadingSelector);

  useCoords();

  return (
    <ThemeProvider theme={THEMES}>
      <Container>
        <Calendar />
        <WeekWeather />
        <GlobalStyles />
        <ToastContainer />
      </Container>
      {loading ? <Spinner /> : null}
    </ThemeProvider>
  );
}

export default App;
