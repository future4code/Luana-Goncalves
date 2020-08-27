import React from "react";
import styled from "styled-components";
import UserListPage from "./components/UserListPage";
import CreateUserFormPage from "./components/CreateUserFormPage";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    currentPage: "createUserFormPage"
  };

  changePage = () => {
    this.state.currentPage === "createUserFormPage"
      ? this.setState({ currentPage: "userListPage" })
      : this.setState({ currentPage: "createUserFormPage" });
  };

  render() {
    const currentPage = () => {
      if (this.state.currentPage === "createUserFormPage") {
        return <CreateUserFormPage />;
      } else if (this.state.currentPage === "userListPage") {
        return <UserListPage />;
      }
    };

    return (
      <AppContainer>
        {currentPage()}
        <button onClick={this.changePage}>Trocar de página</button>
      </AppContainer>
    );
  }
}

export default App;