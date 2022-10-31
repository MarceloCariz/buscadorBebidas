import axios from 'axios';
import { createContext, useEffect, useState} from 'react';
import { CategoriaI } from '../interfaces';

interface ContextProps {
    categorias: CategoriaI[];
}

type Props = {
    children: React.ReactNode;
}

const CategoriaContext = createContext({} as ContextProps);


const CategoriasProvider = ({children}:Props) =>{
    const [categorias, setCategorias] = useState([])
    const obtenerCategorias = async () =>{
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const {data} = await axios(url);
            setCategorias(data.drinks);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        obtenerCategorias();
    },[])

    return (
        <CategoriaContext.Provider value={{categorias}}>
            {children}
        </CategoriaContext.Provider>
    )
}


export {CategoriasProvider};


export default CategoriaContext;