function LoShuGrid() {
  return (
    <div>
      <h2 className="text-center font-bold mb-3">LO SHU GRID</h2>

      <div className="grid grid-cols-3 border-2 border-black text-center">
        <div className="border p-6">4 Rahu</div>
        <div className="border p-6">9 Mangal</div>
        <div className="border p-6">2 Chandra</div>

        <div className="border p-6">3 Guru</div>
        <div className="border p-6">5 Budh</div>
        <div className="border p-6">7 Ketu</div>

        <div className="border p-6">8 Shani</div>
        <div className="border p-6">1 Surya</div>
        <div className="border p-6">6 Shukra</div>
      </div>
    </div>
  );
}

export default LoShuGrid;
