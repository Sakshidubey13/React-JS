import { useState, useEffect } from "react";

//functional component
const TextUtils = () => {
  // component render (get all element )
  useEffect(() => {
    setText(localStorage.getItem("text"));
    setCount(localStorage.getItem("count"));
    setCountWords(localStorage.getItem("words"));
    setSecond(localStorage.getItem("second"));
  }, []);

  const [text, setText] = useState("");
  // onChange={(e)=>e.target.value} means output outside and any text write that show and store here .
  
  //setText - a method by which we can only change value of the state.
  const [count, setCount] = useState(0);
  const [countWords, setCountWords] = useState(0);
  const [second, setSecond] = useState(0);

  return (
    <>
      <div className="container">
        <div className="text-center p-3">
          <h2>Text-Utils</h2>
        </div>

        <div className="m-3">
          <div className="form-floating">
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);

                //local stoorage storing data (work)
                localStorage.setItem("text", text);
              }} // onChange tab change hoga jab textarea mein kuch bhi ek letter bhi change hoga
              //onChange - get value entered in input filled on every change (input,type)
              //  onChange={(e) => setText(e.target.value)} => that ocure a storing value .
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
          <button
            onClick={() => {
              setText(text.toUpperCase());
              localStorage.setItem("text", text.toUpperCase());
            }}
            className=" mx-1 btn btn-primary"
          >
            To UpperCase
          </button>
          

          <button
            onClick={() => {
              setText(text.toLowerCase());
              localStorage.setItem("text", text.toLowerCase());
            }}
            className=" mx-1 btn btn-warning"
          >
            To LowerCase
          </button>

          <button
            onClick={() => {
              setCount(text.length);
              localStorage.setItem("count", count.toString()); 
            }}
            className=" mx-1 btn btn-info"
          >
            Count Letters
          </button>

          <button
            onClick={() => {
              setCountWords(text.split(" ").length);
              localStorage.setItem("words", countWords.toString()); 
            }}
            className=" mx-1 btn btn-success"
          >
            Count Words
          </button>

          <button
            onClick={() => {
              setSecond((text.split(" ").length * 60) / 200);
              localStorage.setItem("second", second.toString());
            }}
            //text.split(" ").length => total words count
            // 200 -> 60
            //n->   ?
            // n* 60 /200
            //
            className=" mx-1 btn btn-secondary"
          >
            Check Reading Time
          </button>

          <button
            onClick={() => {
              setText("");
              setCount(0);
              setCountWords(0);
              setSecond(0);
            }}
            className="mx-1 btn btn-danger"
          >
            {" "}
            Clear Text
          </button>
        </div>

        <hr />
        {/* // state ki value change jo textarea mein hai vo nitche bhi show hoga */}
        <div>
          <hr />

          <div className="result-box">
            <p>{text}</p>
            <p>Text Count : {count}</p>
            <p>Word Count : {countWords}</p>
            <p>Reading Time : {second}s</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextUtils;

//display text.
//display
