import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import { useNavigate } from "react-router-dom";

function DashBoardComponent() {
  const [employees, setemployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
//   const [empId, setempId] = useState(false)
  const navigate = useNavigate();
  const navigatetwo = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/getAllEmployees"
        );
        const data = await response.json();

        setemployees(data);
      } catch (error) {
        console.error("Error fetching the employees", error.message);
      }
    };
    fetchEmployees();
    return () => {};
  }, []);
  const deleteemployee = (employeeId) => {
    console.log("Employee id :",employeeId);
    setModalData(employeeId)
    setShowModal(true);
    <ModalComponent employeeId = {employeeId}/>
    // deletepipeline(employeeId)
    //     setTimeout(() => {
    //     confirmDelete(employeeId)
    // }, 4000);
  };
  const deletepipeline = (employeeId) =>{
    // empId = employeeId
    // navigatetwo(`/delete/${employeeId}`)
  }
  const cancelDelete = () => {
    setShowModal(false);
  };
  const confirmDelete = async (employeeId) => {
        try {
      const response = await fetch(
        `http://localhost:8080/api/deleteemployee/${employeeId}`,
        {
          method: "DELETE",
        }
      );
      console.log(`Employee with ID : ${employeeId} deleted successfully`);
        setShowModal(false);
      const data = await response.json();
      console.log("Employee Deleted : ", data);
      window.location.reload
      navigatetwo(`/`)
    } catch (error) {
      console.log("Error deleting employee : ", error.message);
    }
  };

  const handleUpdate = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col>
            <h1 className="text-center"> Employee Details</h1>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                      <Button
                        className="btn btn-secondary"
                        onClick={() => handleUpdate(employee.id)}
                      >
                        Update
                      </Button>
                      <span> </span>
                      <Button
                        className="btn btn-danger"
                        onClick={() => deleteemployee(employee)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <div>
        <Modal show={showModal} onHide={cancelDelete} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete {modalData.id} of name {modalData.name} the employee?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDelete}>
              No
            </Button>
            <Button variant="danger"
             onClick={()=>{confirmDelete(modalData.id)}}
             >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default DashBoardComponent;
