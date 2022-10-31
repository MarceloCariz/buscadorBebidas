import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import { FavoritosI } from '../interfaces'
// import { FavoritosI } from '../interfaces';

export const Favoritos = () => {
    const [show, setShow] = useState(false)
    const {favoritos, handleClickModal, handleBebidaClickId, handleRemoveFavoritos} = useBebidas();


  return (
    <Col   className=' mt-2 text-center  align-items-center'>
        <h2 className=''>Favoritos</h2>

        <Button onClick={() => setShow(!show)} style={{cursor:'pointer', width: '100px'}}>{!show ? 'Ver' : 'cerrar'}</Button>
        {show && (
            <Col  style={{display: 'flex',flexDirection: 'column', gap: 4, marginTop: 10 ,justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                {favoritos.map(({nombre, imagen, id}:FavoritosI)=>(
                    <Card key={nombre}  style={{width: '500px', height: '100px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Card.Img  style={{objectFit: 'contain', width: 100}}  src={imagen} alt="" />
                        <Card.Body>{nombre}</Card.Body>
                        <Button   onClick={() => {
                            handleClickModal()  
                            handleBebidaClickId(id)}} 
                            variant="warning" className='w-70 text-sm mt-2'>
                            Ver Receta
                        </Button>
                        <Button onClick={() => handleRemoveFavoritos(id)} className="" variant='danger'>X</Button>
                    </Card>
                ))}

            </Col>
        )}

    </Col>
  )
}
