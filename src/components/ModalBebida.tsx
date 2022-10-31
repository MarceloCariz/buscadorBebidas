import {Modal, Image} from 'react-bootstrap'
import { ContextProps } from '../context/BebidasProvider';
import useBebidas from '../hooks/useBebidas'
import { RecetaI } from '../interfaces';




export const ModalBebida = () => {

    const {modal, handleClickModal, receta, cargando} = useBebidas();

    const {strDrink, strInstructions, strDrinkThumb}  = receta as RecetaI;


    const mostrarIngredientes = ()  =>{
        let ingredientes = [];
        for(let i:number = 1; i < 16;i ++){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
  return (
    <>
    {!cargando && (
        <Modal show={modal} onHide={handleClickModal} >
            <Modal.Body>
                <Image fluid src={strDrinkThumb} alt={`Imagen receta ${strDrink}`}/>
                <Modal.Header>
                    <Modal.Title>{strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones</h2>
                        {strInstructions}
                        <h2>Ingredintes y Cantidad</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
            </Modal.Body>
        </Modal>
        )}
    </>
  )
}
