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
            <div>
                <img src={budgetlogo}/>
                <a className='brand-name' href="./Brand.jsx">SmartSpender</a>

            </div>

            <div >
                <Button  variant="primary" onClick={handleShow}> Get started </Button>

                <Offcanvas show={show} onHide={handleClose}>

                    <OffcanvasHeader>
                    <OffcanvasTitle>Navigation</OffcanvasTitle>
                    {/* <CloseButton className="text-reset" onClick={() => setShow(false)} /> */}
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        Try scrolling the rest of the page to see this option in action.
                    </OffcanvasBody>

                    {/* <OffcanvasHeader closeButton>
                        <OffcanvasTitle>Navigation</OffcanvasTitle>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <ul>

                            <li><a href="#">Create Budget</a></li>
                            <li><a href="#">Calculate my Net Salary</a></li>
                        </ul>
                        
                    </OffcanvasBody> */}

                </Offcanvas>
                </div>    
            
        </div>

        </>
    );
}

export default Brand