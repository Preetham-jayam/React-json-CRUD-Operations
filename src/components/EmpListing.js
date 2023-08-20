import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, setEmpData] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/employee")
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
  }, []);

  const LoadEdit=(id)=>{
    navigate('/employee/edit/'+id);

  };
  const LoadRemove=(id)=>{
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:8000/employee/'+id,{
          method:'DELETE' 
      })
      .then((res)=>{
          alert('Removed succesfully');
          window.location.reload();
      })
      .catch((err)=>{
          console.error(err.message);
      })

    }

  };
  const LoadDetail=(id)=>{
    navigate('/employee/detail/'+id);

  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
            <div className="divbtn">
                <Link className="btn btn-success" to='employee/create'>Add New (+)</Link>
            </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.mail}</td>
                    <td>{emp.phone}</td>
                    <td>
                      <button onClick={()=>{LoadEdit(emp.id)}} className="btn btn-success" >
                        Edit
                      </button>
                      <button onClick={()=>{LoadRemove(emp.id)}} className="btn btn-danger" >
                        Remove
                      </button>
                      <button onClick={()=>{LoadDetail(emp.id)}} className="btn btn-primary" >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
