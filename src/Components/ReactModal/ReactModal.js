import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const ReactModal = ({ pd: { price, image, title, description } }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className='w-75' variant="success" onClick={handleShow}>
                Detail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Card.Img className="w-50 m-auto" variant="top" src={image} />
                <Modal.Body><h1>$ {price}</h1></Modal.Body>
                <Modal.Body><h4>{title}</h4></Modal.Body>
                <Modal.Body>{description.length < 150 ? description : description.slice(0, 150)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;