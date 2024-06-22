import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';

function Home() {
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)
  useEffect(()=>{
      if(deleted){
          setDeleted(false)
      axios.get('/pegawai')
      .then((res)=>{
          setData(res.data)
      })
      .catch((err)=>console.log(err))
  }
  }, [deleted])

  function handleDelete(id){
      axios.delete(`/delete/${id}`)
      .then((res)=>{
          setDeleted(true)
      })
      .catch((err)=> console.log(err))
  }
  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
    <h4>DATA PENJAGAAN KENAIKAN PANGKAT & KGB PNS KECAMATAN KARANGPLOSO</h4>
    <div className='d-flex justify-content-end'>
        <Link className='btn btn-success' to='/create'>Tambah Data</Link>
    </div>
    <div className="App">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Tempat Lahir</th>
                    <th>Pangkat</th>
                    <th>Tanggal Lahir</th>
                    <th>Jabatan</th>
                    <th>Pangkat Lama</th>
                    <th>Pangkat Baru</th>
                    <th>Berkala Lama</th>
                    <th>Berkala Baru</th>
                    <th>Keterangan</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((pegawai)=>{
                        return (<tr>
                            <td>{pegawai.pegawai_id}</td>
                            <td>{pegawai.nama}</td>
                            <td>{pegawai.nip}</td>
                            <td>{pegawai.tempat_lahir}</td>
                            <td>{pegawai.pangkat}</td>
                            <td>{pegawai.tanggal_lahir}</td>
                            <td>{pegawai.jabatan}</td>
                            <td>{pegawai.kenaikan_pangkat_lama}</td>
                            <td>{pegawai.kenaikan_pangkat_baru}</td>
                            <td>{pegawai.kenaikan_berkala_lama}</td>
                            <td>{pegawai.kenaikan_berkala_baru}</td>
                            <td>{pegawai.keterangan}</td>
                            <td>
                                <Link className='btn mx-2 btn-success' to={`/read/${pegawai.pegawai_id}`}>Read</Link>
                                <Link className='btn mx-2 btn-success' to={`/edit/${pegawai.pegawai_id}`}>Edit</Link>
                                <button onClick={()=>handleDelete(pegawai.pegawai_id)} className='btn mx-2 btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
</div>
)
}

export default Home