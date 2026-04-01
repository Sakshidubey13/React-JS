import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AstrologyForm from "../components/AstrologyForm";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg border-4 border-green-700">
        <Header />
        <AstrologyForm />
      </div>
    </div>
  );
}

export default Home;
