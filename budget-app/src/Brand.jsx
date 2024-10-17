import budgetlogo from './assets/budgetlogo.png';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';
import OffcanvasTitle from 'react-bootstrap/esm/OffcanvasTitle';
import OffcanvasBody from 'react-bootstrap/esm/OffcanvasBody';


function Brand(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        
        <div className="brand">
            
                <img src={budgetlogo}/>
                <a className='brand-name' href="./Brand.jsx">SmartSpender</a>

                <Button variant="primary" onClick={handleShow}> Get started </Button>

                <Offcanvas show={show} onHide={handleClose}>

                    <OffcanvasHeader closeButton>
                        <OffcanvasTitle>Navigation</OffcanvasTitle>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <ul>

                            <li><a href="#">Create Budget</a></li>
                        </ul>
                        
                    </OffcanvasBody>

                </Offcanvas>
                
            
        </div>

        </>
    );
}

export default Brand