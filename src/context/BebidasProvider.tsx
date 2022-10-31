import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { BebidaI, RecetaI } from "../interfaces";

type Props = {
    children: React.ReactNode;
}

export interface ContextProps {
    handleClickModal: () => void;
    consultarBebida: (datos: {nombre: string, categoria:string}) => void;
    handleBebidaClickId: (id:string) => void;
    bebidas: BebidaI[];
    modal: boolean;
    receta: RecetaI;
    cargando: boolean;
}
const BebidasContext = createContext({} as ContextProps);



const BebidasProvider = ({children}:Props) =>{

const [bebidas, setBebidas] = useState([]);
const [modal, setModal] = useState(false);
const [bebidaId, setBebidaId] = useState('');
const [receta, setReceta] = useState({} as RecetaI);
const [cargando, setCargando] = useState(false)


useEffect(()=>{
    const obtenerReceta = async () =>{
        if(bebidaId === '') return;
        setCargando(true);

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
            const {data} = await axios(url);
            // console.log(data)
            setReceta(data.drinks[0]);
            setCargando(false)
        } catch (error) {
            console.log(error)
        }
    }
    obtenerReceta();
},[bebidaId])

const consultarBebida = async (datos: {nombre: string, categoria:string}) =>{
    try {
        const url  =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
        const {data} = await axios(url);
        setBebidas(data.drinks)
    } catch (error) {
        console.log(error)
    }
}

const handleClickModal = () =>{
    setModal(!modal);
}

const handleBebidaClickId = (id: string) =>{
    setBebidaId(id)
}



return( 
<BebidasContext.Provider value={{consultarBebida, bebidas, handleClickModal, modal, handleBebidaClickId, receta, cargando}}>
        {children}
    </BebidasContext.Provider>)
}



export {BebidasProvider};


export default BebidasContext;