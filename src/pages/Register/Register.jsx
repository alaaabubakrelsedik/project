


















/* import React ,{ useRef, useState ,useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { set } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import  './Register.css';


const Register = () => {

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const nameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            setError("");
    
        const name = nameref.current.value;
        const email = emailref.current.value;
        const password = passwordref.current.value;
    
        try {
          const response = await axios.get("http://localhost:3005/users", { params: { email } });
    
          if (response.data.length > 0) {
            setError("Email already registered!");
            
          } else {
            await axios.post("http://localhost:3005/users", { name, email, password });
            toast("registerd successfullty", { type: "success" });
                        console.log(response.data);

            navigate("/loginf");
          }
        } catch (err) {
          setError("Error registering user!");
        }
        }
        setValidated(true);

      };
    return ( 

        <Container className="mt-5">
        {error && <Alert variant="danger">{error}</Alert>}

        <Form className='p-5 w-75 mx-auto my-3' noValidate validated={validated} onSubmit={handleRegister}>
            
            <FloatingLabel controlId="floatingInput" label="name" className="mb-3" >
                <Form.Control ref={nameref} type="text" placeholder="name" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"> Looks bad </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                <Form.Control ref={emailref} type="email" placeholder="name@example.com" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"> Looks bad </Form.Control.Feedback>
            </FloatingLabel>
        
        
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control ref={passwordref} type="password" placeholder="Password" required />
            </FloatingLabel>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
     );
}
 
export default Register; */