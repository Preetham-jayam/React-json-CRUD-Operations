import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpView = () => {
  const { empid } = useParams();
  const [empdata, setEmpData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        const data = resp;
        console.log(resp);
        setEmpData(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [empid]);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Details</h2>
          <hr/>
        </div>
        <div className="card-body"></div>
        {empdata && (
          <div>
            <h2>
              Employee Name: {empdata.name} 
            </h2>
            <h3>Contact Details </h3>
            <h5>Email : {empdata.email}</h5>
            <h5>Phone : {empdata.phone}</h5>
            <Link className="btn btn-danger" to ='/'>Back to List</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpView;
