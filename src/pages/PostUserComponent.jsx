
import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Form } from 'react-bootstrap'
import { Await, useNavigate } from 'react-router-dom'

function PostUserComponent() {
    const [formData, setformData] = useState({
        name:"",
        email:"",
        department:""
    })
    const handleInputChange = (event) => {
        const{name,value} = event.target;
        setformData({
            ...formData,
            [name]:value,

        })
    }
    const navigate = useNavigate()
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)


    try {
        const response = await fetch("http://localhost:8080/api/employee",{
            method: "POST",
            headers : {"Content-Type":"Application/json"},
            body : JSON.stringify(formData)
        })

        const data = await response.json();
        console.log("Employee Created : ",data)
        navigate("/")
    } catch (error) {
        console.log("Error in adding employee")
    }

    const validation=()=>{
        if(formData.name<1){
            console.log("name must be more than 1 charecter")
        }
    }
}
  return (
    <div>
      <div className='text-center center-form'>
        <h1>Add New Employee</h1>
        <Form className='container border rounded mt-5'
        onSubmit={handleSubmit}>
        <Form.Group className='my-3'>
            <Form.Control
            type = 'text'
            name = 'name'
             placeholder = "Enter the name"
             value = {formData.name}
             onChange = {(event)=>handleInputChange(event)}
             required
             minLength={2}
             pattern='[a-zA-Z]+'
             title='No numbers or special charecters'
             ></Form.Control>

        </Form.Group>
        <Form.Group className='my-3'>
            <Form.Control
            type = 'email'
            name = 'email'
             placeholder = "Enter the email"
             value = {formData.email}
             onChange = {(event)=>handleInputChange(event)}
             required
             pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)*\.[a-zA-Z]{2,}$'
             >
             </Form.Control>
        </Form.Group>
        <Form.Group className='my-3'>
                                                  <Form.Control
            type = 'number'
            name = 'phone'
             placeholder = "Enter the phone"
             value = {formData.phone}
             onChange = {(event)=>handleInputChange(event)}
             required
             minLength={10}
            //  maxLength={11}
             pattern='[^[0-9]{10}$]'
             title='Minimum of 10 numbers required'
             ></Form.Control>
        </Form.Group>
        <Form.Group className='my-3'>
                                                    <Form.Control
            type = 'text'
            name = 'department'
             placeholder = "Enter the department"
             value = {formData.department}
             onChange = {(event)=>handleInputChange(event)}
             maxLength={20}
             required
             ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-3'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default PostUserComponent
