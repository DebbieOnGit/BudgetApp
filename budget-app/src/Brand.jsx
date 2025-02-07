import budgetlogo from './assets/budgetlogo.png';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
// import Dashboard from './Dashboard';
// import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';
// import { COffcanvasHeader } from '@coreui/react';
// import { COffcanvasTitle } from '@coreui/react';
// import { COffcanvasBody } from '@coreui/react';
// import { CCloseButton } from '@coreui/react';


function Brand(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

            <Button variant='primary' onClick={handleShow} className='me-2'>
                Get Started
            </Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Dashboard</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <li></li>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}

export default Brand