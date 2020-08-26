import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/axiosConstants";

const DeleteButton = styled.span`
  color: red;
`;

class UserListPage extends React.Component {
  state = {
    users: []
  };

  componentDidMount = () => {
    this.getUsers();
  };

     axios.get(baseUrl, axiosConfig).then((response) => {
       this.setState({ users: response.data });
     })
     .catch((error) => {
     console.log(error.message);
     });
};

deleteUser = (userId) => {
  axios
    .delete(`${baseUrl}/${userId}`, axiosConfig)
    .then((response) => {
      this.getUsers();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

render() {
  return (
   <div>
    {this.state.users.map((user) => {
     return (
     <p key={user.id}>
      {user.name}
      <DeleteButton onClick={() => this.deleteUser(user.id)}>
         {" "}
          X
      </DeleteButton>
          </p>
        );
      })}
    </div>
  );
}


export default UserListPage;