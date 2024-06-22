import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
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

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`/edit_pegawai/${id}`, data[0])
      .then((res) => {
        navigate("/home");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User {id}</h1>
      <Link to="/home" className="btn btn-success">
        Back
      </Link>
      {data.map((pegawai) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="nama">Nama</label>
              <input
                value={pegawai.nama}
                type="text"
                name="nama"
                required
                onChange={(e) =>
                  setData([{ ...data[0], nama: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="nip">NIP</label>
              <input
                value={pegawai.nip}
                type="text"
                name="nip"
                required
                onChange={(e) =>
                  setData([{ ...data[0], nip: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="tempat_lahir">Tempat Lahir</label>
              <input
                value={pegawai.tempat_lahir}
                type="text"
                name="tempat_lahir"
                required
                onChange={(e) =>
                  setData([{ ...data[0], tempat_lahir: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
              <input
                value={pegawai.tanggal_lahir}
                type="date"
                name="tanggal_lahir"
                required
                onChange={(e) =>
                  setData([{ ...data[0], tanggal_lahir: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="pangkat">Pangkat</label>
              <input
                value={pegawai.pangkat}
                type="text"
                name="pangkat"
                required
                onChange={(e) =>
                  setData([{ ...data[0], pangkat: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="jabatan">Jabatan</label>
              <input
                value={pegawai.jabatan}
                type="text"
                name="jabatan"
                required
                onChange={(e) =>
                  setData([{ ...data[0], jabatan: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="kenaikan_pangkat_lama">Kenaikan Pangkat Lama</label>
              <input
                value={pegawai.kenaikan_pangkat_lama}
                type="date"
                name="kenaikan_pangkat_lama"
                required
                onChange={(e) =>
                  setData([{ ...data[0], kenaikan_pangkat_lama: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="kenaikan_pangkat_baru">Kenaikan Pangkat Baru</label>
              <input
                value={pegawai.kenaikan_pangkat_baru}
                type="date"
                name="kenaikan_pangkat_baru"
                required
                onChange={(e) =>
                  setData([{ ...data[0], kenaikan_pangkat_baru: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="kenaikan_berkala_lama">Kenaikan Gaji Berkala Lama</label>
              <input
                value={pegawai.kenaikan_berkala_lama}
                type="date"
                name="kenaikan_berkala_lama"
                required
                onChange={(e) =>
                  setData([{ ...data[0], kenaikan_berkala_lama: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="kenaikan_berkala_baru">Kenaikan Gaji Berkala Baru</label>
              <input
                value={pegawai.kenaikan_berkala_baru}
                type="date"
                name="kenaikan_berkala_baru"
                required
                onChange={(e) =>
                  setData([{ ...data[0], kenaikan_berkala_baru: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="keterangan">Keterangan</label>
              <input
                value={pegawai.keterangan}
                type="text"
                name="keterangan"
                required
                onChange={(e) =>
                  setData([{ ...data[0], keterangan: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <button type="submit" className="btn btn-success">
                Edit
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
}

export default Edit;