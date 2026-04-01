import { useEffect, useState } from "react";
import axios from "axios";

function SavedRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/form/all-records",
    );
    setRecords(response.data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Saved Records</h1>

      {records.map((item) => (
        <div key={item._id} className="border p-4 mb-3">
          <p>Name: {item.name}</p>
          <p>Gender: {item.gender}</p>
          <p>Birth Place: {item.birthPlace}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedRecords;
