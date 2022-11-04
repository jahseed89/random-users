import React, { Fragment, useState } from "react";
import axios from "axios";
import Button from "../components/button/Button";
import "./users.scss";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = () => {
    setLoading(true);
    axios
      .get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true)
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  return (
    <div className="users-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card-holder">
          {userData.map((user) => {
            return (
              <Fragment key={user.cell}>
                <div className="img__circle">
                    <img src={user.picture.large} alt="#" />
                </div>
                <p className="name">{user.name.first}</p>
                <p className="gender">{user.gender}</p>
                <div className="footer">
                  <p>Location</p>
                  <p className="location">{user.location.country}</p>
                  
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
        <Button btnText="Get Another User" isActive={activeUser} clickHandler={handleClick} />

    </div>
  );
};

export default Users;
