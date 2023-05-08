import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Profile.scss";

import SideBar from "../../components/SideBar/SideBar";

const Profile = () => {
  // const [userData, setUserData] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [add, setAdd] = useState("");
  const [phone, setPhone] = useState("");

  const [toggle, setToggle] = useState(false);

  async function displayProfile() {
    const response = await fetch("http://localhost:8000/api/profile", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (data.status === "ok") {
      setName(data.name);
      setEmail(data.email);
      setAge(data.age)
      setGender(data.gender)
      setAdd(data.add)
      setPhone(data.phone)

    } else {
      alert(data.error);
    }
  }
  // EDIT DETAILS
  async function editUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/profile/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        gender,
        add,
        phone,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      console.log("Profile has been updated!");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      displayProfile();
    }
  }, []);

  function toggleButton(event) {
    event.preventDefault()
    setToggle(!toggle);
    console.log(toggle)
    if(toggle){
      editUser(event)
    }
  }
  return (
    <div className="Profile">
      <SideBar />
      <div className="container">
        <h1 className="title">Profile</h1>

        <motion.div
          className="contentcontainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="row1">
            <div className="Ppic"></div>
            <div className="PName">{name}</div>
          </div>
          <div className="row2">
            <div className="Pdetails">
              <span className="Ptitle">
                PERSONAL DETAILS{" "}
                <button onClick={toggleButton} className="toggleButton">{toggle ? "SAVE" : "EDIT"}</button>
              </span>
              <span>
                Name:
                {toggle ? (
                  <input
                    defaultValue={name}
                    style={{ marginLeft: "32px", borderRadius:'8px', paddingLeft:'4px'}}
                    onChange={(e) => setName(e.target.value)}
                    
                  />
                ) : (
                  name
                )}
              </span>
              <span>
                Age:{" "}
                {toggle ? (
                  <input defaultValue={age} style={{ marginLeft: "42px", borderRadius:'8px', paddingLeft:'4px' }} 
                  onChange={(e) => setAge(e.target.value)}
                  />
                ) : (
                  age
                )}
              </span>
              <span>
                Gender:{" "}
                {toggle ? (
                  <input defaultValue={gender} style={{ marginLeft: "17px", borderRadius:'8px', paddingLeft:'4px' }} 
                  onChange={(e) => setGender(e.target.value)}
                  maxLength={1}
                  placeholder="M/F"
                  />
                ) : (
                  gender
                )}
              </span>
              <span>
                Address:{" "}
                {toggle ? (
                  <input defaultValue={add} style={{ marginLeft: "12px", borderRadius:'8px', paddingLeft:'4px' }} 
                  onChange={(e) => setAdd(e.target.value)}
                  />
                ) : (
                  add
                )}
              </span>
              <span>
                Phone No:{" "}
                {toggle ? (
                  <input defaultValue={phone} style={{ marginLeft: "0px" , borderRadius:'8px', paddingLeft:'4px'}}
                  onChange={(e) => setPhone(e.target.value)}
                  />
                ) : (
                  phone
                )}
              </span>
              <span>
                Email Id:{email}
              </span>
            </div>
            <div className="Econtact">
              <span className="Etitle">EMERGENCY CONTACTS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
