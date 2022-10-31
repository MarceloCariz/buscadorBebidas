import { Container } from "react-bootstrap";
import { Formulario } from "./components/Formulario";
import { ListadoBebidas } from "./components/ListadoBebidas";
import { ModalBebida } from "./components/ModalBebida";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";

const App = () => {
  return (
    <BebidasProvider>
      <CategoriasProvider>
        <header className="py-5">
          <h1>Buscador Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas/>
          <ModalBebida/>
        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  );
};

export default App;
