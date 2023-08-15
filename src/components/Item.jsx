import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({title, id, price, image }) {
    console.log(id)
    return (
        <div>
                <Card key={id} className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {image} />
                    <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <div className='divBotones'>
                        <Button variant="secondary"><Link key={id} to={`/Item/${id}`} className='links'>Detalle</Link></Button>
                        <Button variant="secondary">Comprar</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
    );    
}

export default Item;
