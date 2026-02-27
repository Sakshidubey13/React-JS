const TextUtils = () => {
  return (
    <>
      <div className="container">
      <div className="text-center p-3">
        <h2>Text-Utils</h2>
      </div>
 
      <div>
          <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 200 }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Enter your text here...</label>
        </div>
      </div>
      </div>
    </>
  );
};

export default TextUtils;
