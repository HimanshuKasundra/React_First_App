import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Product from "./ProductsDemo/Product";
import Student from "./StudentDemo/Student";
import Faculty from "./FacultyDemo/Faculty";
import StudentDetails from "./StudentDetails";
import StudentEdit from "./StudentEdit";
import AddStudent from "./AddStudent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/student" element={<Student />}></Route>
          <Route path="/student/:id" element={<StudentDetails />}></Route>
          <Route path="/student/edit/:id" element={<StudentEdit/>}></Route>
          <Route path="/student/add" element={<AddStudent/>}></Route>
          <Route path="/faculties" element={<Faculty />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
