import LoShuGrid from "./LoShuGrid";

function NumerologyForm() {
  return (
    <div className="mt-8">
      <h2 className="bg-yellow-300 text-center font-bold text-2xl p-2">
        NUMEROLOGY
      </h2>

      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Birth Number"
            className="border p-2"
          />
          <input
            type="text"
            placeholder="Destiny Number"
            className="border p-2"
          />
          <input type="text" placeholder="Name Number" className="border p-2" />
          <input
            type="text"
            placeholder="Lucky Number"
            className="border p-2"
          />
          <input
            type="text"
            placeholder="Lucky Colour"
            className="border p-2"
          />
          <input
            type="text"
            placeholder="Unlucky Colour"
            className="border p-2"
          />
        </div>

        <LoShuGrid />
      </div>
    </div>
  );
}

export default NumerologyForm;
