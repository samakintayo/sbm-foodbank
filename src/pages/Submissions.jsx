import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Correct import for Vite

const Submissions = () => {
  const [requests, setRequests] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch submissions from Supabase
  useEffect(() => {
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from("food_bank_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else {
        setRequests(data);
        setFiltered(data);
      }
      setLoading(false);
    };

    fetchRequests();
  }, []);

  // Filter logic
  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    const filteredData = requests.filter(
      (r) =>
        r.fullName?.toLowerCase().includes(lower) ||
        r.email?.toLowerCase().includes(lower) ||
        r.phone?.toLowerCase().includes(lower)
    );
    setFiltered(filteredData);
  }, [searchTerm, requests]);

  // CSV Download
  const downloadCSV = () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "food_requests.csv");
  };

  // PDF Download
  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.setFontSize(14);
    doc.text("Food Support Submissions", 40, 40);

    const tableColumn = [
      "Name",
      "Email",
      "Phone",
      "Address",
      "Household",
      "Postal",
      "Message",
      "Date",
    ];

    const tableRows = filtered.map((req) => [
      req.fullName,
      req.email,
      req.phone,
      req.address,
      req.householdSize,
      req.postalCode,
      req.message || "-",
      new Date(req.created_at).toLocaleString(),
    ]);

    autoTable(doc, {
      startY: 60,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 8, cellPadding: 4 },
      headStyles: { fillColor: [126, 34, 206] }, // Tailwind purple-700
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    doc.save("food_requests.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Food Support Submissions
        </h1>

        {/* Search + Download Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex gap-2">
        
            <button
              onClick={downloadPDF}
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Download PDF
            </button>
                <button
              onClick={downloadCSV}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Download CSV
            </button>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center text-gray-500">Loading submissions...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">No matching submissions.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-purple-100 text-purple-900">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">Address</th>
                  <th className="py-3 px-4">Household</th>
                  <th className="py-3 px-4">PostalCode</th>
                  <th className="py-3 px-4">Message</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((req) => (
                  <tr
                    key={req.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{req.fullName}</td>
                    <td className="py-3 px-4">{req.email}</td>
                    <td className="py-3 px-4">{req.phone}</td>
                    <td className="py-3 px-4">{req.address}</td>
                    <td className="py-3 px-4">{req.householdSize}</td>
                    <td className="py-3 px-4">{req.postalCode}</td>
                    <td className="py-3 px-4">{req.message || "-"}</td>
                    <td className="py-3 px-4 text-xs text-gray-500">
                      {new Date(req.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Submissions;
