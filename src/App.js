import './App.css';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

function App() {

  const[Emailinput,setEmailinput]=useState()
  const[Passwordinput,setPasswordinput]=useState()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [final , setFinal] = useState('')

  // Function to validate form on submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!email) {
      setEmailinput("Please enter an email address.")
      setFinal('')
    } else if (!isValidEmail(email)) {
      setEmailinput('Please enter a valid email address.');
      setFinal('')
    } else if (!password) {
      setPasswordinput('Please enter a password.');
      setFinal('')
    } else if (password.length < 6) {
      setPasswordinput('Password must be at least 6 characters long.');
      setFinal('')
    } else if (password !== confirmPassword) {
      setPasswordinput('Passwords do not match.');
      setFinal('')

   
    } 

    else{
      setFinal('Your account has been Successfully created.!')
      setEmailinput('')
      setPasswordinput('')

    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center w-100 'style={{padding:'50px'}}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-0" >
            <form onSubmit={handleSubmit} className='mt-5 border border-dark rounded p-5 bg-light border border-2 border-primary rounded'>
              <h1 className='heading text-center text-white' style={{padding:'15px ',backgroundColor:'black'}}>Register Here</h1>
             
              <div className="mb-3">
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} className='w-100 text-light' id="standard-basic" label=" Your Email"  variant="standard" style={{width:'300px',marginBottom:'10px'}}/>
                <div id="emailHelp" className="form-text  text-danger">{Emailinput}</div>
              </div>
              <div className="mb-3">
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} className='w-100' id="standard-basic" label="Your Password" variant="standard"type='password' style={{width:'300px',marginBottom:'10px'}}/>
                   <div id="emailHelp" className="form-text text-danger">{Passwordinput}</div>
              </div>
              <div className="mb-3">
                <TextField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-100' id="standard-basic" label="Confirm Password" variant="standard" type='password' style={{width:'300px',marginBottom:'10px'}}/>
                <div id="emailHelp" className="form-text text-danger">{Passwordinput}</div>
              </div>

              <p style={{padding:'20px'}}>Already have an account? <a href="">Login</a></p>


              <Button type="submit" className='bg-success w-50 mx-auto' variant="contained" style={{}}>Sign Up</Button>

              <div id="emailHelp" className="form-text text-success mt-3">{final}</div>


            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;