import { useState } from "react";

const MetricForm = ({setMetricHistory}) => {
  // Use states - stores date in memory for later use
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(weight, height, bodyFat, gender, date);

    const weightNum = Number(weight);
    const heightNum = Number(height) / 100;
    const bodyFatNum = Number(bodyFat);

    const leanMass = weightNum * (1 - bodyFatNum / 100);
    const ffmi = leanMass / (heightNum * heightNum);
    const ffmiRounded = Number(ffmi.toFixed(2));

    console.log(ffmiRounded);

    const newMetric = {
      weight: weightNum,
      bodyFat: bodyFatNum,
      ffmi: ffmiRounded,
      date: date,
    };

    setMetricHistory(prev => [...prev, newMetric]);
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Record Your Metrics</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
      >
        {/* Weight Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="weight" className="text-sm font-medium">
            Weight (KG)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 75"
            className="bg-slate-950 border border-slate-700 rounded-md p-2.5 outline-none"
          />
        </div>

        {/* Height Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="height" className="text-sm font-medium">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 180"
            className="bg-slate-950 border border-slate-700 rounded-md p-2.5 outline-none"
          />
        </div>

        {/* Body Fat Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="bodyFat" className="text-sm font-medium">
            Body Fat (%)
          </label>
          <input
            type="number"
            id="bodyFat"
            value={bodyFat}
            onChange={(e) => setBodyFat(e.target.value)}
            placeholder="e.g. 15"
            className="bg-slate-950 border border-slate-700 rounded-md p-2.5 outline-none"
          />
        </div>

        {/* Gender Section */}
        <fieldset className="md:col-span-1 lg:col-span-1">
          <legend className="text-sm font-medium mb-3">Gender</legend>
          <div className="flex gap-6 items-center h-full">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => setGender(e.target.value)}
                className="accent-teal-500"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => setGender(e.target.value)}
                className="accent-teal-500"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </fieldset>

        {/* Date Input */}
        <div className="flex flex-col gap-2 md:col-span-1 lg:col-span-1">
          <label htmlFor="date" className="text-sm font-medium">
            Date Recorded
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-slate-950 border border-slate-700 rounded-md p-2.5 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="lg:col-span-2 mt-2 pl-2 pr-2 bg-teal-500 text-slate-950 font-bold py-3 rounded-md shadow-lg"
        >
          Calculate & Save Metrics
        </button>
      </form>
    </>
  );
};

export default MetricForm;
