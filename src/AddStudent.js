import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import StudentEdit from "./StudentEdit";

export default function AddFaculty() {
  const navigate = useNavigate();
  const apiUrl = "https://6315f77133e540a6d3894dc8.mockapi.io/student";

  const [stu, setStudent] = useState({ name: "" });
  return (<>
    <div class="row g-3 mx-4">
      {/* <div class="col-md-6">
        <label for="inputEmail4" class="form-label">id:</label>
        <input type="text" class="form-control" id="inputEmail4" onChange={(e)=>{setStudent({...stu,id:e.target.value})}}/>
      </div> */}
      <div class="col-md-6">
        <label  class="form-label">Name:</label>
        <input type="text" class="form-control" onChange={(e)=>{setStudent({...stu,name:e.target.value})}}  />
      </div>
      <div class="col-6">
        <label for="inputAddress" class="form-label">department:</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e)=>{setStudent({...stu,department:e.target.value})}} />
      </div>
      <div class="col-6">
        <label for="inputAddress2" class="form-label">City:</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(e)=>{setStudent({...stu,city:e.target.value})}}/>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">State:</label>
        <input type="text" class="form-control" id="inputCity" onChange={(e)=>{setStudent({...stu,state:e.target.value})}}/>
      </div>
      <div class="col-md-6">
        <label for="inputState" class="form-label">Image:</label>
        <input type="text" class="form-control" id="inputState" onChange={(e)=>{setStudent({...stu,image:e.target.value})}} />
      </div>
    
    </div><br/>
    <div className="col  d-flex justify-content-center">
    <input type="button" value="Add Student" className="btn btn-primary mx-4" onClick={() => {

      fetch("https://6315f77133e540a6d3894dc8.mockapi.io/student", {
        method: "POST",
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
    <br/>
  </>);
}
