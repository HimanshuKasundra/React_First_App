import { React, useEffect, useState } from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom"

export default function EditFaculty() {
  const param = useParams();
  const navigate = useNavigate();
  const [stu, setStudent] = useState({});

  useEffect(() => {
    fetch("https://6315f77133e540a6d3894dc8.mockapi.io/student/" + param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setStudent(res));
  }, []);


  return (<>
    <form class="row g-3 my-2 mx-4" >
      <h1 align="center"><u>Edit page</u></h1><br />
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">id</label>
        <input type="text" class="form-control" id="inputEmail4" value={stu.id} onChange={(e) => {
      setStudent({ ...stu, id: e.target.value });
    }} />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputPassword4" value={stu.name} onChange={(e) => {
      setStudent({ ...stu, name: e.target.value });
    }} />
      </div>
      <div class="col-6">
        <label for="inputAddress" class="form-label">department</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"  value={stu.department} onChange={(e) => {
      setStudent({ ...stu, department: e.target.value });
    }} />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" value={stu.city} onChange={(e) => {
      setStudent({ ...stu, city: e.target.value });
    }}  />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Image</label>
        <input type="text" class="form-control" id="inputCity" value={stu.image} onChange={(e) => {
      setStudent({ ...stu, image: e.target.value });
    }}  />
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">Mobile</label>
        <input type="text" class="form-control" id="inputCity"  value={stu.mobile} onChange={(e) => {
      setStudent({ ...stu, mobile: e.target.value });
    }}/>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      </form>
      <div className="row">
      <div className="col  d-flex justify-content-center">

      <input type="button" className="btn btn-primary" value="Edit Student" onClick={() => {
        fetch("https://6315f77133e540a6d3894dc8.mockapi.io/student/" + param.id, {
          method: "PUT",
          body: JSON.stringify(stu),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          
          navigate('/student');
        })
      }} />
      </div>
      </div>
      <br />
   
  
  </>);
}