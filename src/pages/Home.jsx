import {useState} from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const Home = () => {
  const [basicModal, setBasicModal] = useState(true);
  
  return (
    <div className="container mt-5">
        <h1 className='text-center my-5'>OTIF INTERNSHIP</h1>
        <div className="d-flex align-items-center justify-content-between">
            <Link to="pageone" className="p-3 bg-primary-100 rounded-2 text-decoration-none text-white">Page One</Link>
            <Link to="pagetwo" className="p-3 bg-primary-100 rounded-2 text-decoration-none text-white">Page Two</Link>
            <Link to="pagethree" className="p-3 bg-primary-100 rounded-2 text-decoration-none text-white">Page Three</Link>
        </div>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Alert !!!!!!!</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={() => setBasicModal(!basicModal)}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>Please note there are some errors from the design especially the hero image for page one and two has an issue that i can't resolve since the design is read only i had the inplement all the the hero images with the only image without an issue which is page three hero image 
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='danger' onClick={() => setBasicModal(!basicModal)}>
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
    </div>
  )
}

export default Home