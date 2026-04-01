import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Galaxy Live Mahavastu</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/records">Records</Link>
      </div>
    </div>
  );
}

export default Navbar;
