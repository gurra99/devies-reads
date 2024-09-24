import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/structure/layout/layout";
import { AppContainer } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import { ToastContainer } from "react-toastify";
import Header from "./components/fragments/header/header";
import SignedOut from "./utilities/signed-out";
import Book from "./pages/book/book";
import SignIn from "./pages/sign-in/sign-in";
import MyBooks from "./pages/my-books/my-books";
import SignUp from "./pages/sign-up/sign-up";

function App() {
  return (
    <AppContainer>
      <Layout>
        <Header />
        <ToastContainer
          position={"top-left"}
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/signed-out" element={<SignedOut />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </AppContainer>
  );
}

export default App;
