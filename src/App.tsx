import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <Header />
      <Main />

      <GlobalStyle />

      <Footer />
    </>
  );
}
