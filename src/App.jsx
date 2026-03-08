import Navbar from "./components/Navbar";
import MetricForm from "./components/MetricForm";
import HistoryTable from "./components/HistoryTable";
import { useState } from "react";

function App() {
  const [metricHistory, setMetricHistory] = useState([]);
  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center w-full py-10 px-4 gap-10 flex-1">
        <section className="w-full max-w-9/10 bg-slate-900/50 p-6 rounded-xl border border-slate-800 shadow-xl">
          <MetricForm setMetricHistory={setMetricHistory} />
        </section>
        <section className="w-full max-w-9/10 bg-slate-900/50 p-6 rounded-xl border border-slate-800 shadow-xl">
          <HistoryTable metricHistory={metricHistory} />
        </section>
      </main>
      <footer className="p-5 border-t border-slate-800 text-center text-sm text-slate-400">
        <p>© 2026 FFMI Calculator by Mohammed Juber Ahmed</p>
      </footer>
    </div>
  );
}

export default App;
