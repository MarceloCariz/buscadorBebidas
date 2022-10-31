import {Col, Card, Button} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';
import { BebidaI } from '../interfaces'

type Props ={
    bebida: BebidaI;
}

export const Bebida = ({bebida}:Props) => {

    const {handleClickModal, handleBebidaClickId} = useBebidas();
  return (
    <Col  className="mb-4" md={6} lg={3}>
        <Card>
            <Card.Img src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`}/>
        </Card>
        <Card.Body>
            <Card.Title>{bebida.strDrink}</Card.Title>
            <Button onClick={() => {
                handleClickModal()  
                handleBebidaClickId(bebida.idDrink)}} 
                variant="warning" className='w-100 text-uppercase mt-2'>
                Ver Receta
            </Button>
        </Card.Body>
    </Col>
  )
}
