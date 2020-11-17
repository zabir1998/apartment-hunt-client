import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import BookingListCard from "../BookingListCard/BookingListCard";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://polar-springs-72792.herokuapp.com/servicesOrdered?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-5 ml-auto">
        <div className="row mb-5 justify-content-md-center">
          <center>
            <h1 className="mt-5 text-center">Ordered Services</h1>
          </center>
        </div>
        <div className="row">
          {bookingList.map((bknglst) => (
            <BookingListCard key={bknglst._id} booking={bknglst}>
              {bknglst.orderedService}
            </BookingListCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;