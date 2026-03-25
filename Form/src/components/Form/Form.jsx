import React,{ useState } from "react";
//array = is to store multiple value of same datatype.
//object(hasmap) = to store multiple values of different data type or diffrent behavior.


export default function Form() {
  //setuse -> value update.
  const [user,setuser] = useState({});
  const handleSubmit =()=>{ }

  return (
    <div style={{ height: "100vh" }} className=" position-relative">
      <div className="col-3 position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
               onChange={(e) =>setUser({...user,name:e.target.value})}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"/>
          </div>

          {/* email */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
             onChange={(e) => setUser({...user,email:e.target.value})}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"/>

              <div id="emailHelp" className="form-text">
                 We'll never share your email with anyone else.
               </div>
             </div>

                {/* contact sec */}
            <div className="mb-3">
            <label htmlFor="number" className="form-label">
                Contact
            </label>
            <input
                        onChange={(e) => setUser({...user,contact:e.target.value})}
              type="number"
              className="form-control"
              id="number"
              aria-describedby="emailHelp"/>
          </div>

          {/* password */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
                        onChange={(e) => setUser({...user,password:e.target.value})}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
           {/* submit */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
