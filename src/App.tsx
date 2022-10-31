import { Col, Container, Row } from "react-bootstrap";
import { Favoritos } from "./components/Favoritos";
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
          <aside style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'cente'}}>
          
          <Favoritos/>
        </aside>
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
