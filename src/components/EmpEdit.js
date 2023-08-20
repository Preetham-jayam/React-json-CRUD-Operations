import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
const EmpEdit = () => {
  const { empid } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        
        console.log(resp);
        setId(resp.id);
        setName(resp.name);
        setMail(resp.mail);
        setPhone(resp.phone);
        setActive(resp.active);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [empid]);
  const [id,setId]=useState('');
  const [name,setName]=useState('');
  const [mail,setMail]=useState('');
  const [phone,setPhone]=useState('');
  const [active,setActive]=useState(true);
  const [blur,setBlur]=useState(false)
 const navigate=useNavigate();
  const submitHandler=(e)=>{
      e.preventDefault();
      const empData={id,name,mail,phone,active};
      fetch('http://localhost:8000/employee/'+empid,{
          method:'PUT',
          headers:{
          'Content-Type':'application/json'},
          body : JSON.stringify(empData),
          
      })
      .then((res)=>{
          alert('Saved succesfully');
          navigate('/');
      })
      .catch((err)=>{
          console.error(err.message);
      })
  }
  return (
    <div>
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={submitHandler}>
                    <div className='card' style={{"textAlign":"left"}}>
                         <div className='card-title'>
                            <h2>Employee Edit</h2>
                         </div>
                         <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>ID</label>
                                        <input className='form-control' value={id} disabled></input>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input required value={name} onChange={(e)=>setName(e.target.value)} className='form-control' onMouseDown={e=>setBlur(true)}></input>
                                       {name.length===0 && blur && <span  className='text-danger'>Name is required</span> }
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input required value={mail} onChange={e=>setMail(e.target.value)}  className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Phone</label>
                                        <input required value={phone} onChange={e=>setPhone(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                  <div className='form-check'>
                                        <input type="checkbox"  checked={active} onChange={e=>setActive(e.target.checked)} className='form-check-input'></input>
                                        <label  className='form-check-label'>IsActive</label>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                       <button className='btn btn-success' type='submit'>Save</button>
                                       <Link to='/' className='btn btn-danger'>Back</Link>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EmpEdit