import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
    gender: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const newData = await axios.get(`http://localhost:3003/students/${id}`);
    setData(newData.data);
  };

  const InputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const changeSubmit = async () => {
    const newData = data;
    const response = await axios
      .put(`http://localhost:3003/students/${id}`, newData)
      .then((result) => {
        setData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          address: "",
          birthday: "",
          gender: "",
        });
      })
      .catch((error) => {
        alert("There is something went wrong");
      });
  };

  return (
    <>
      <div className="container">
        <h2>This is Registration Page..</h2>
        <form onSubmit={changeSubmit}>
          <div className="row">
            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={data.fname}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={data.lname}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={data.address}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Birthday
              </label>
              <input
                type="text"
                className="form-control"
                name="birthday"
                value={data.birthday}
                onChange={InputEvent}
              />
            </div>

            <h6 className="mb-2 pb-1">Gender: </h6>
            <div className="form-check form-check-inline">
              <label for="exampleInputFirstname" className="form-check-label">
                Female
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="female"
                onChange={InputEvent}
              />
            </div>

            <div className="form-check form-check-inline">
              <label for="exampleInputFirstname" className="form-check-label">
                Male
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="male"
                onChange={InputEvent}
              />
            </div>

            <div className="row">
              <button type="submit" className="btn btn-primary col col-1">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
