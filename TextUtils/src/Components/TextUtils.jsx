import { useState } from "react";

//functional component
const TextUtils = () => {
  const [text, setText] = useState(""); // any text write here and that text show line 16
  // onChange={(e)=>e.target.value} means output outside and any text write that show and store here .
  //text - text is a state where data will be stored 
  //setText - a method by which we can only change value of the state.
  const [count,setCount] = useState(0);
  const [countWords, setCountWords] = useState(0);


  return (
    <>
      <div className="container">
        <div className="text-center p-3">
          <h2>Text-Utils</h2>
        </div>

        <div className="m-3">
          <div className="form-floating">
            <textarea
              onChange={(e) => setText(e.target.value)} // onChange tab change hoga jab textarea mein kuch bhi ek letter bhi change hoga
              //onChange - get value entered in input filled on every change (input,type)

              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 200 }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Enter your text here...</label>
          </div>
        </div>

        <div className="px-3">
             {/*onClick={() => alert(text)} in that koi bhi text show karna hai button ke click ke upper tab ye usse hoga than alert massage will be open it*/}
          <button onClick={()=>setText(text.toUpperCase())} className=" mx-1 btn btn-primary">   
           To UpperCase 
          </button>
           <button onClick={()=>setText(text.toLowerCase())} className=" mx-1 btn btn-warning">   
           To LowerCase 
          </button>
          <button onClick={()=>setCount(text.length)} className=" mx-1 btn btn-info">   
           Count Letters 
          </button>
           <button onClick={()=>setCountWords(text.split(" ").length)} className=" mx-1 btn btn-success">   
           Count Words 
          </button>
        </div>

        <hr />
        {/* // state ki value change jo textarea mein hai vo nitche bhi show hoga */}
        <div>

           <p> {text}</p>
            <p>Text Count : {count}</p>
            <p>Word Count : {countWords}</p>

            </div>
      </div>
    </>
  );
};

export default TextUtils;

//display text.
//display 
