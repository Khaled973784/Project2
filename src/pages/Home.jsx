function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Welcome to MediCare
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Professional healthcare services for you and your family.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Home;