import React, { useState } from "react";
import { FaUser, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import "./Qustion.css";
const CustomerQuestionPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      
      <h1 className="text-center text-4xl font-semibold my-8">Have a Qustion</h1>
      <div id="body" className=" flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#768d9bd8] p-6 rounded-lg shadow-lg shadow-zinc-300">
          <h1 className="text-2xl font-semibold mb-6 text-[#ffffffe5]">
            Submit Your Question
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg border-gray-300 p-2">
              <FaUser className="text-[#fff] mr-2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full p-2 border-none outline-none rounded-lg"
                required
              />
            </div>
            <div className="flex items-center border rounded-lg border-gray-300 p-2">
              <FaEnvelope className="text-[#44c475] mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border-none outline-none rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col border rounded-lg border-gray-300 p-2">
              <div className="flex items-center mb-2">
                <FaQuestionCircle className="text-red-500 h-8 mr-2" />
                <label htmlFor="question" className="text-[#fffe] text-lg">
                  Your Question?
                </label>
              </div>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Type your question here..."
                className="w-full p-2 border-none outline-none resize-none rounded-lg"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-lg hover:text-base font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerQuestionPage;
