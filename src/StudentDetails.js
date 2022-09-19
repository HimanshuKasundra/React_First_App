import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import StudentEdit from "./StudentEdit"
import Student from "./StudentDemo/Student"
export default function StudentDetails() {
    const param = useParams();
    const navigate = useNavigate();
    const [stu, setStudent] = useState({});
    useEffect((res) => {
        fetch("https://6315f77133e540a6d3894dc8.mockapi.io/student/" + param.id, { method: "GET" })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setStudent(res);
            });
    }, [])


    return (
        <>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={stu.image} class="card-img-top" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title"><u>Name:</u> {stu.name}</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Depratment:{stu.department}</li>
                                <li class="list-group-item">City:{stu.city}</li>
                                <li class="list-group-item">State:{stu.state}</li>
                                <li class="list-group-item">Mobile:{stu.mobile}</li>
                                <li class="list-group-item">Id:{stu.id}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-md-12 my-2 mx-4 d-flex justify-content-center">
                    <div>
                        <button align="center" className="btn btn-primary mx-4" onClick={() => {
                            fetch("https://6315f77133e540a6d3894dc8.mockapi.io/student/" + param.id, { method: "DELETE" })
                                .then(res => {
                                    navigate('/student');
                                });
                        }}>Delete</button>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => {
                            navigate('../student/edit/' + param.id);
                        }}>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}