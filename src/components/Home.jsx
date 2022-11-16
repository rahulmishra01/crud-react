import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Registration from "./Registration";
import Confetti from "react-confetti";

const Home = () => {
  const [data, setData] = useState([]);

  //search method
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);


  // Getting Data
  const getData = async () => {
    const response = await axios
      .get("http://localhost:3003/students")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        alert(error.message);
      });
    console.log(response.data);
  };

  //Effect open


  //effect close

  // Delete Data

  const deleteData = async (id) => {
    await axios
      .delete(`http://localhost:3003/students/${id}`)
      .then((result) => {
        alert("Your data is successfully deleted");
      })
      .catch((error) => {
        alert("You did mistake");
      });
    getData();
  };

  const inputSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterSearch = !search
    ? data
    : data.filter((item) =>
        item.fname.toLowerCase().includes(search.toLowerCase())
      );

      const [popupOpen, setPopupOpen] = useState(false);

      const toggle = () => {
        setPopupOpen((prev) => !prev);
      };
      const onClick = () => {
        setPopupOpen(!popupOpen);
        setTimeout(() => {
          toggle();
        }, 1000);
      };
      // win = {
      //   width: window.innerWidth,
      //   height: window.innerHeight
      // };
      const { width, height } = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      // const event = <Confetti/>

      // const [eventhandle, setEventhandle] = useState(event);

      // useEffect(() => {
      //   setTimeout(() => {
      //       setEventhandle(false)
      //   },4500)
      // },[eventhandle])

  return (
    <div>
    {/* {eventhandle} */}
    <Confetti recycle={false}
      width={width}
      height={height}
      numberOfPieces={1000}
    />
    <Registration props={data} />
      <h3 className="d-flex justify-content-center p-2">
        This is Home Page..
      </h3>
      <div className="d-flex justify-content-center mb-2 ">
        <input type="search" onChange={inputSearch} placeholder="Search" />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterSearch.map((item, index) => (
            <tr>
              <th scope="col" key={item.id}>
                {index + 1}
              </th>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.birthday}</td>
              <td>{item.gender}</td>
              <td>
                <Link className="btn btn-primary" to={`/edit/${item.id}`}>
                  Edit
                </Link>
                <Link
                  className="btn btn-danger ms-2"
                  onClick={() => deleteData(item.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
     
     
    </div>
  );
};

export default Home;
