import React, { useState } from "react";
import "./Content.css";

function Content() {
  const [dob, setDOB] = useState("");

  const calculateAge = () => {
    if (dob === "") {
      alert("Please enter your birthday");
    } else {
      const age = getAge(dob);
      console.log(age);
    }
  };

  function getAge(bod) {
    const currentDate = new Date();
    const birthDate = new Date(bod);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  const handleInputChange = (event) => {
    setDOB(event.target.value);
  };
  return (
    <>
      <content className="container_">
        <h1 className="h1_">Age Calculator</h1>
        <p className="p_">Enter your date of birth</p>
        <input
          type="date"
          name=""
          id=""
          className="input_"
          value={dob}
          onChange={handleInputChange}
        />
        <button className="button_" id="btnEl" onClick={calculateAge}>
          Calculate Age
        </button>
        <h2>{age}</h2>
      </content>
    </>
  );
}

export default Content;
