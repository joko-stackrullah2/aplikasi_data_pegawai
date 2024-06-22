import React, { useState } from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

function Create() {
    const [values,setValues] = useState({
        nama : '',
        nip : '',
        tempat_lahir : '',
        pangkat : '',
        tanggal_lahir:'',
        jabatan: '',
        kenaikan_pangkat_lama : '',
        kenaikan_pangkat_baru : '',
        kenaikan_berkala_lama : '',
        kenaikan_berkala_baru : '',
        keterangan : ''
    })
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        // console.log(values)
        axios.post('/add_pegawai',values)
        .then((res)=>{
            navigate('/home')
            console.log(res)
        })
        .catch((err)=>{
            console.error(err)
        })
    }
  return (
    <div className='container vh-100 vw-100 bg-primary'>
        <div className='row'>
            <h3>Tambah Data Pegawai</h3>
            <div className='d-flex justify-content-end'>
                <Link to='/home' className='btn btn-success'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-3'>
                    <label htmlFor='nama'>Nama</label>
                    <input type='text' name='nama' required onChange={(e)=> setValues({...values,nama : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='nip'>Nip</label>
                    <input type='text' name='nip' required onChange={(e)=> setValues({...values,nip : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='tempat_lahir'>Tempat Lahir</label>
                    <input type='text' name='tempat_lahir' required onChange={(e)=> setValues({...values,tempat_lahir : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='pangkat'>Pangkat</label>
                    <input type='text' name='pangkat' required onChange={(e)=> setValues({...values,pangkat : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='tanggal_lahir'>Tanggal Lahir</label>
                    <input type='date' name='tanggal_lahir' required onChange={(e)=> setValues({...values,tanggal_lahir : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='jabatan'>Jabatan</label>
                    <input type='text' name='jabatan' required onChange={(e)=> setValues({...values,jabatan : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='kenaikan_pangkat_lama'>K.Pangkat Lama</label>
                    <input type='date' name='kenaikan_pangkat_lama' required onChange={(e)=> setValues({...values,kenaikan_pangkat_lama : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='kenaikan_pangkat_baru'>K.Pangkat Baru</label>
                    <input type='date' name='kenaikan_pangkat_baru' required onChange={(e)=> setValues({...values,kenaikan_pangkat_baru : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='kenaikan_berkala_lama'>K.Berkala Lama</label>
                    <input type='date' name='kenaikan_berkala_lama' required onChange={(e)=> setValues({...values,kenaikan_berkala_lama : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='kenaikan_berkala_baru'>K.Berkala Baru</label>
                    <input type='date' name='kenaikan_berkala_baru' required onChange={(e)=> setValues({...values,kenaikan_berkala_baru : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='keterangan'>Keterangan</label>
                    <input type='text' name='keterangan' required onChange={(e)=> setValues({...values,keterangan : e.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create