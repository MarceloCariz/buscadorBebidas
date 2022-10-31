import { useContext } from "react";
import CategoriaContext from "../context/CategoriasProvider";




const useCategorias = () =>  useContext(CategoriaContext);



export default useCategorias;