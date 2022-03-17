import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactModal from '../ReactModal/ReactModal';

const ProductCard = ({ pd, setCount }) => {
    const { image, title, description } = pd;

    return (
        <Card className='col-md-4 border ms-auto' style={{ width: '18rem' }}>
            <Card.Img className="w-50 m-auto" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title.slice(0, 10)}</Card.Title>
                <Card.Text>
                    {description.slice(0, 99)} <span className='fw-bold'>... read more</span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
                <div className='w-50'>
                    <Button onClick={() => setCount()} className='w-75' variant="primary">Add</Button>
                </div>
                <div className='w-50'>
                    <ReactModal pd={pd} />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default ProductCard;