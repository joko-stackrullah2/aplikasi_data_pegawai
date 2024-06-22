const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");


const app = express();
//path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "aplikasi_pegawai",
});

app.post("/login", (req, res) => {
  const values = [
    req.body.email,
    req.body.password,
  ];
  const sql = "SELECT * FROM user WHERE `email`= ? AND `password`= ?";
  db.query(sql, values, (err, result) => {
    if (err) res.json({ message: "Login Error" });
    return res.json(result);
  });
});

app.post('/register',(req,res)=>{
  const sql = "INSERT INTO user (`nama`,`email`,`password`) VALUES (?, ?, ?)";
  const values = [
    req.body.nama,
    req.body.email,
    req.body.password
  ]
  db.query(sql, values, (err,result)=>{
    if(err) return res.json({message:'Register error' + err})
    return res.json({success:"Registrasi berhasil"})
  })
})

app.post('/add_pegawai',(req,res)=>{

  const sql = "INSERT INTO pegawai (`nama`,`nip`,`tempat_lahir`,`pangkat`,`tanggal_lahir`,`jabatan`,`kenaikan_pangkat_lama`,`kenaikan_pangkat_baru`,`kenaikan_berkala_lama`,`kenaikan_berkala_baru`,`keterangan`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.nama,
    req.body.nip,
    req.body.tempat_lahir,
    req.body.pangkat,
    req.body.tanggal_lahir,
    req.body.jabatan,
    req.body.kenaikan_pangkat_lama,
    req.body.kenaikan_pangkat_baru,
    req.body.kenaikan_berkala_lama,
    req.body.kenaikan_berkala_baru,
    req.body.keterangan
  ]
  db.query(sql, values, (err,result)=>{
    if(err) return res.json({message:'Something unexpected has occured' + err})
    return res.json({success:"Pegawai berhasil ditambahkan"})
  })
})

app.get("/pegawai",(req,res)=>{
  const sql = "SELECT * FROM pegawai"
  db.query(sql,(err,result)=>{
    if(err) res.json({message : "Something unexpected has occured"});
    return res.json(result);
  })
})


app.get("/get_pegawai/:pegawai_id", (req, res) => {
  const pegawai_id = req.params.pegawai_id;
  const sql = "SELECT * FROM pegawai WHERE `pegawai_id`= ?";
  db.query(sql, [pegawai_id], (err, result) => {
    if (err) res.json({ message: "Something unexpected has occured" });
    return res.json(result);
  });
});

app.post("/edit_pegawai/:pegawai_id", (req, res) => {
  const pegawai_id = req.params.pegawai_id;
  const sql =
    "UPDATE pegawai SET `nama`=?, `nip`=?, `tempat_lahir`=?, `pangkat`=?, `tanggal_lahir`=?, `jabatan`=?, `kenaikan_pangkat_lama`=?, `kenaikan_pangkat_baru`=?, `kenaikan_berkala_lama`=?, `kenaikan_berkala_baru`=?, `keterangan`=? WHERE pegawai_id=?";
  const values = [
    req.body.nama,
    req.body.nip,
    req.body.tempat_lahir,
    req.body.pangkat,
    req.body.tanggal_lahir,
    req.body.jabatan,
    req.body.kenaikan_pangkat_lama,
    req.body.kenaikan_pangkat_baru,
    req.body.kenaikan_berkala_lama,
    req.body.kenaikan_berkala_baru,
    req.body.keterangan,
    pegawai_id,
  ];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Data Pegawai berhasil diupdate" });
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pegawai WHERE pegawai_id=?";
  const values = [id];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Data Pegawai berhasil dihapus" });
  });
});

app.listen(port , ()=>{
  console.log('listening')
})