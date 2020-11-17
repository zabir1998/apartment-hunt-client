import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import BookingListCard from "../BookingListCard/BookingListCard";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const [bookingsList, setbookingsList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 
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
            <h1 className="mt-5 text-center">Bookings</h1>
          </center>
        </div>
        <div className="row">
          {bookingsList.map((bknglst) => (
            <BookingListCard key={bknglst._id} bookings={bknglst}>
              {bknglst.orderedService}
            </BookingListCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingList;