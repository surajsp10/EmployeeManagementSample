import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


function ModalComponent({props}) {
    console.log("Modal Comp",props)
     const [showModal, setShowModal] = useState(false);
      const confirmDelete = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/deleteemployee/${employeeId}`,
        {
          method: "DELETE",
        }
      );
      console.log(`Employee with ID : ${employeeId} deleted successfully`);
      const data = await response.json();
      console.log("Employee Deleted : ", data);
    } catch (error) {
      console.log("Error deleting employee : ", error.message);
    }
  };
    const cancelDelete = () => {
    setShowModal(false);
  };
    const deleteemployee = (employeeId) => {
    // console.log(employeeId);
    setShowModal(true);
    deletepipeline(employeeId)
  };
 useEffect(() => {
   <div>
            <div>
              <Modal show={showModal} onHide={cancelDelete} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete the employee?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={cancelDelete}>
                    No
                  </Button>
                  <Button variant="danger" onClick={confirmDelete}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
    </div>
 
   return () => {
     
   }
 }, [])
 
  return (
    <div></div>
  )
}

export default ModalComponent
