import { useState } from 'react';
import {Button, Form, Row, Col, Alert} from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import useCategorias from '../hooks/useCategorias';

type Busqueda ={
    nombre: string;
    categoria: string;
}

export const Formulario = () => {
    const [busqueda, setBusqueda] = useState<Busqueda>({
        nombre:'',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('');
    const {categorias} = useCategorias();

    const {consultarBebida} = useBebidas();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            setTimeout(() => {
                setAlerta('');
            }, 3000);
            return
        }

        consultarBebida(busqueda);
    }

  return (
    <Form onSubmit={handleSubmit}>
        { alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                    <Form.Control id="nombre" type="text" placeholder="Ej : Tequila, Vodka, etc" name="nombre" value={busqueda.nombre} onChange={(e) => setBusqueda({ ...busqueda, nombre: `${e.target.value}`})}></Form.Control>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                        <Form.Label htmlFor='categoria'>Categoria Bebida</Form.Label>
                        <Form.Select id="categoria" name="categoria" value={busqueda.categoria} onChange={(e) => setBusqueda({ ...busqueda, categoria: `${e.target.value}`})}>
                            <option>- Selecciona Categoria-</option>
                            {categorias.map(categoria =>(
                                <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                            ))}
                        </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end mt-3'>
            <Col md={3}>
                <Button type="submit" variant="danger" className='text-uppercase w-100'>
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}
