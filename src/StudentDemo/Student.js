import { React, useEffect, useState } from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
const root = createRoot(document.getElementById('root'));

export default function GetAllFaculty() {
  const navigate = useNavigate();
  const api = "https://6315f77133e540a6d3894dc8.mockapi.io/student";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  const formatedData = data.map((stu) => {
    return (
      <>
        <div class="card col-md-3 my-4">
          <img src={stu.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <Link to={"../student/" + stu.id}>
              <h3 class="card-title">{stu.name}</h3>
            </Link>
            
          </div>
         
        </div>
      </>
    );
    });
  return <div class="row">{formatedData}</div>;
}