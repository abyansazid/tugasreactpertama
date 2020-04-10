import React from "react";
const Username = (props) => <h5>Nama Saya : {props.Username} <br/>Alamat : {props.Alamat} <br/>Pendidikan Terakhir: {props.Pendidikan} 
<br/>Hobbi : {props.Hobbi} </h5>;

Username.defaultProps = {
  Username: "Abyan Sazid Yusuf",
  Alamat: "Garut",
  Pendidikan: "Strata Satu Teknik Informatika",
  Hobbi: "Basket"
};

export default Username;