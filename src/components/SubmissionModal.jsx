const SubmissionModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold text-purple-800">
          Request Submitted 🎉
        </h2>
        <p className="text-gray-600">
          Thank you for reaching out. Our team will contact you shortly to
          arrange support.
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-purple-700 to-yellow-500 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubmissionModal;
