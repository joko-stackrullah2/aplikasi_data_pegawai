import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/get_pegawai/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User {id}</h1>
      <Link to="/home" className="btn btn-success">Back</Link>
      {data.map((pegawai) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {pegawai["pegawai_id"]}
            </li>
            <li className="list-group-item">
              <b>Nama: </b>
              {pegawai["nama"]}
            </li>
            <li className="list-group-item">
              <b>NIP: </b>
              {pegawai["nip"]}
            </li>
            <li className="list-group-item">
              <b>Tempat Lahir : </b>
              {pegawai["tempat_lahir"]}
            </li>
            <li className="list-group-item">
              <b>Tanggal Lahir: </b>
              {pegawai["tanggal_lahir"]}
            </li>
            <li className="list-group-item">
              <b>Pangkat: </b>
              {pegawai["pangkat"]}
            </li>
            <li className="list-group-item">
              <b>jabatan: </b>
              {pegawai["jabatan"]}
            </li>
            <li className="list-group-item">
              <b>Kenaikan Pangkat Lama: </b>
              {pegawai["kenaikan_pangkat_lama"]}
            </li>
            <li className="list-group-item">
              <b>Kenaikan Pangkat Baru : </b>
              {pegawai["kenaikan_pangkat_baru"]}
            </li>
            <li className="list-group-item">
              <b>Kenaikan Gaji Berkala Lama: </b>
              {pegawai["kenaikan_berkala_lama"]}
            </li>
            <li className="list-group-item">
              <b>Kenaikan Gaji Berkala Baru: </b>
              {pegawai["kenaikan_berkala_baru"]}
            </li>
            <li className="list-group-item">
              <b>Keterangan : </b>
              {pegawai["keterangan"]}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Read;