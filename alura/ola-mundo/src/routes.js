import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobre-mim" element={<SobreMim/>} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
