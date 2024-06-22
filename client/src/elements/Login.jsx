import React,{useState} from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

function Login() {
    const [values,setValues] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()

        axios.post('/login',values)
        .then((res)=>{
            
            console.log(res.data , res.status)
            if(res.data.length === 0){
                alert("Login gagal,coba lagi")
            }else{
                navigate('/home')
                alert("Login Berhasil")
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    }
  return (
    <div className='container vh-100 vw-100 bg-primary'>
        <div className='row align-items-center justify-content-center text-center not-found-container'>
            <h3>Silahkan Login</h3>
            <form onSubmit={handleLogin}>
                <div className='form-group my-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required onChange={(e)=> setValues({...values,email : e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required onChange={(e)=> setValues({...values,password : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <button type='submit' className='btn btn-success'>Login</button>
                </div>
                <Link to="/register" style={{color:'whitesmoke'}}>Belum Punya akun ?,Silahkan registrasi terlebih dahulu</Link>
            </form>
        </div>
    </div>
  )
}

export default Login