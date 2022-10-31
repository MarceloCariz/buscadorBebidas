import {Col, Card, Button} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';
import { BebidaI } from '../interfaces'

type Props ={
    bebida: BebidaI;
}

export const Bebida = ({bebida}:Props) => {

    const {handleClickModal, handleBebidaClickId, handleAddFavoritos} = useBebidas();
  return (
    <Col  className="mb-4" md={6} lg={3}>
        <Card>
            <Card.Img src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`}/>
        </Card>
        <Card.Body style={{display: 'flex', flexDirection: 'column', gap:2}}>
            <Card.Title>{bebida.strDrink}</Card.Title>
            <Button onClick={() => {
                handleClickModal()  
                handleBebidaClickId(bebida.idDrink)}} 
                variant="warning" className='w-100 text-uppercase mt-2'>
                Ver Receta
            </Button>
            <Button onClick={() => handleAddFavoritos({nombre:bebida.strDrink, imagen: bebida.strDrinkThumb, id:bebida.idDrink})}>Añadir a Favoritos</Button>
        </Card.Body>
    </Col>
  )
}
