import React, { forwardRef, useState } from "react"


const Heading = () => {

  const [fullname, setfullname] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });


  const inputEventTwo = (event) => {

    
    const {value, name} = event.target;
    setfullname((preValue) => {
      if (name === 'fname') {
        return {
          fname: value,
          lname: preValue.lname,
        }

      }else if(name==='lname'){
        return{
          fname: preValue.fname,
          lname:value,
        }
      }
    })

  }
  const onSubmit = (event) => {
    event.preventDefault();

  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div
          style={{ background: "red", width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h1 style={{ color: "white", background: "transparent", textShadow: "0 2px 2px black" }}>Hello {fullname.fname} {fullname.lname}</h1>

          <input name="fname" onChange={inputEventTwo}
            style={{ width: "50%", border: "none", textAlign: "center", outline: "none", margin: "20px 0", padding: "10px 20px" }} type="text" placeholder="Enter Your Name" value={fullname.fname} />
   
          <input name="lname" onChange={inputEventTwo}
            style={{ width: "50%", border: "none", textAlign: "center", outline: "none", margin: "20px 0", padding: "10px 20px" }} type="text" placeholder="Enter Your Last Name" value={fullname.lname} />
            
          <input name="email" onChange={inputEventTwo}
            style={{ width: "50%", border: "none", textAlign: "center", outline: "none", margin: "20px 0", padding: "10px 20px" }} type="email" placeholder="Enter Your Email" value={fullname.email} />
            
          <input name="phone" onChange={inputEventTwo}
            style={{ width: "50%", border: "none", textAlign: "center", outline: "none", margin: "20px 0", padding: "10px 20px" }} type="number" placeholder="Enter Your Mobile Number" value={fullname.phone} />

          <button style={{ padding: "0.1px 0.5rem", fontSize: "2rem", cursor: "pointer", background: "deepskyblue", border: "3px solid wheat", borderRadius: "4px", outline: "none" }}>Clik Me 👍</button>
        </div>
      </form>
    </>

  )
}

export default Heading;