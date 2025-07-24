
import { useState } from "react";
import FileUploader from "../components/FileUploader"
import ChartRenderer from "../components/ChartRenderer"

export default function Dashboard() {
  const [parsedData, setParsedData] = useState([]);

  const headers = parsedData[0]; // first row as header
  const rows = parsedData.slice(1); // rest as data rows 

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Upload and Analyze Excel/CSV</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
       
        <FileUploader onParse={setParsedData} />
      </div>

      {parsedData.length > 1 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <ChartRenderer headers={headers} rows={rows} />
        </div>
      )}
    </div>
  );
}
