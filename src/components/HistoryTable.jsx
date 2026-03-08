const HistoryTable = ({ metricHistory }) => {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Entry History</h2>
      <div className="overflow-x-scroll border border-slate-700 rounded-xl lg:overflow-x-hidden">
        <table className="table-auto w-full text-left min-w-3xl border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-700 bg-slate-950 p-2">Date</th>
              <th className="border border-slate-700 bg-slate-950 p-2">
                Weight (KG)
              </th>
              <th className="border border-slate-700 bg-slate-950 p-2">
                Body Fat (%)
              </th>
              <th className="border border-slate-700 bg-slate-950 p-2">FFMI</th>
            </tr>
          </thead>
          <tbody>
            {metricHistory.length === 0 ? (
              <tr>
                <td className="col-span-4 text-center">No entries yet</td>
              </tr>
            ) : (
              metricHistory.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-slate-700 bg-slate-900 p-2">
                    {entry.date}
                  </td>
                  <td className="border border-slate-700 bg-slate-900 p-2">
                    {entry.weight}
                  </td>
                  <td className="border border-slate-700 bg-slate-900 p-2">
                    {entry.bodyFat}
                  </td>
                  <td className="border border-slate-700 bg-slate-900 p-2">
                    {entry.ffmi}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HistoryTable;
