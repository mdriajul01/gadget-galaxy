// src/ReviewPage.js

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reviewInput.trim() && rating > 0) {
      setReviews([...reviews, { text: reviewInput.trim(), rating }]);
      setReviewInput("");
      setRating(0);
    }
  };

  const handleChange = (event) => {
    setReviewInput(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <h1>Email</h1>
        <input
          name="email"
          type="text"
          placeholder="exampale@gmail.com" className="my-2 rounded-xl w-72 "
        />
        <textarea
          value={reviewInput}
          onChange={handleChange}
          placeholder="Write your review here..."
          rows="4"
          className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center mt-4">
          {[1, 2, 3, 4, 5, 6].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-xl ${
                rating >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-400 text-black font-semibold hover:text-white rounded-lg hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
        {reviews.length > 0 ? (
          <ul className="list-disc pl-5">
            {reviews.map((review, index) => (
              <li key={index} className="mb-4 p-2 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`text-xl ${
                        review.rating >= star
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                {review.text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
