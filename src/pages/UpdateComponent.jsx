import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { data, useNavigate, useParams } from 'react-router-dom'


function UpdateComponent() {

    const {id} = useParams()
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        console.log(formData)
    }
        const [formData, setformData] = useState({
            name:"",
            email:"",
            department:""
        })

        useEffect(() => {
       const fetchemployee =  async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`)
                const data = await response.json()
                setformData(data)
            } catch (error) {
                
            }
        }
        fetchemployee()
        }, [id])
        const handleUpdate = async(e)=>{
            e.preventDefault();
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
                    method:'PATCH',
                    headers:{"Content-Type":"Application/json"},
                    body:JSON.stringify(formData),
                });
                const data = await response.json()
                console.log("User updated : ",data)
                navigate('/')
            } catch (error) {
                console.log("Error update user : ",error.message)
            }
        }
            const handleInputChange = (event) => {
        const{name,value} = event.target;
        setformData({
            ...formData,
            [name]:value,

        })
    }
  return (
       <div>
      <div className='text-center center-form'>
        <h1>Edit Employee</h1>
        <Form className='container border rounded mt-5'
        onSubmit={handleUpdate}>
        <Form.Group className='my-3'>
            <Form.Control
            type = 'text'
            name = 'name'
             placeholder = "Enter the name"
             value = {formData.name}
             onChange = {(event)=>handleInputChange(event)}
             ></Form.Control>

        </Form.Group>
        <Form.Group className='my-3'>
            <Form.Control
            type = 'text'
            name = 'email'
             placeholder = "Enter the email"
             value = {formData.email}
             onChange = {(event)=>handleInputChange(event)}
             >
             </Form.Control>
        </Form.Group>
        <Form.Group className='my-3'>
                                                  <Form.Control
            type = 'text'
            name = 'phone'
             placeholder = "Enter the phone"
             value = {formData.phone}
             onChange = {(event)=>handleInputChange(event)}
             ></Form.Control>
        </Form.Group>
        <Form.Group className='my-3'>
                                                    <Form.Control
            type = 'text'
            name = 'department'
             placeholder = "Enter the department"
             value = {formData.department}
             onChange = {(event)=>handleInputChange(event)}
             ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-3'>Edit Employee</Button>
        </Form>
      </div>
    </div>
  )
}

export default UpdateComponent
