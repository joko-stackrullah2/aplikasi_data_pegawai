import React,{useState} from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

function Register() {
    const [values,setValues] = useState({
        nama:'',
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    function handleRegister(e){
        e.preventDefault()
        // console.log(values)
        axios.post('/register',values)
        .then((res)=>{
            navigate('/')
            alert("Registrasi berhasil,silahkan login...")
            console.log(JSON.stringify(res))
        })
        .catch((err)=>{
            console.error(err)
        })
    }
  return (
    <div className='container vh-100 vw-100 bg-primary'>
        <div className='row align-items-center justify-content-center text-center not-found-container'>
            <h3>Silahkan Registrasi</h3>
            <form onSubmit={handleRegister}>
                <div className='form-group my-3'>
                    <label htmlFor='nama'>Nama</label>
                    <input type='text' name='nama' required onChange={(e)=> setValues({...values,nama : e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required onChange={(e)=> setValues({...values,email : e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required onChange={(e)=> setValues({...values,password : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <button type='submit' className='btn btn-success'>Registrasi</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register