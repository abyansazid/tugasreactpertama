import React from "react";

const Greetings = (props) => (
  <h4 className="bg-primary text-white text-center p-2">
    Hallo welcome {props.name} <br /> your age {props.age}{" "}
    years old
    <br />
    your gender {props.gender}
  </h4>
);
Greetings.defaultProps = {
  name: "Pengguna",
  age: "20",
  gender: "Pria",
};
export default Greetings;