import React, { Fragment, useState } from "react";
import axios from "axios";
import Button from "../components/button/Button";
import "./users.scss";

// const Users = () => {
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [activeUser, setActiveUser] = useState(false);

//   const url = "https://randomuser.me/api/"

//   const handleClick = () => {
//     setLoading(true);
//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response.data.results);
//         setUserData(response.data.results);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(true);
//       })
//       .finally(() => {
//         setLoading(false);
//         setActiveUser(true);
//       });
//   };

  return (
    <div className="users-container">
      {loading ? (
        <h1 className="loading-txt">Loading...</h1>
      ) : (
        <div className="card-holder">
          {userData.map((user) => {
            return (
              <Fragment key={user.cell}>
                <div className="img__circle">
                  <img src={user.picture.large} alt="#" />
                </div>
                <p className="name">
                    <span>Name</span>
                    <span>{user.name.first}</span>
                </p>
                <p className="gender">
                  <span>Gender</span>
                  <span>{user.gender}</span>
                </p>
                <hr />
                <div className="footer">
                  <p>Location</p>
                  <p className="location">{user.location.country}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
      <div className="pagination-btn-holder">
        <Button
          btnText="Get Another User"
          isActive={activeUser}
          clickHandler={handleClick}
        />
      </div>
    </div>
  );
};

export default Users;
