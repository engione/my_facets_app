import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import "./ReviewCard.scss";
import BackIcon from "../../assets/reviews-arrow-back.svg?react";
import ForwardIcon from "../../assets/reviews-arrow-forward.svg?react";

interface Review {
  image: string;
  name: string;
  review: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const cyclicReviews = reviews
    .slice(currentIndex)
    .concat(reviews.slice(0, currentIndex));

  const colors = ["#90C8F5", "#FFB703"];

  return (
    <section id="reviews" className="reviews">
      <div className="container mx-auto">
        <h3 className="reviews__title">Отзывы:</h3>
        <div className="flex space-x-4">
          {cyclicReviews.slice(0, 3).map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={handlePrev} className="button rounded-full">
            <BackIcon />
          </button>
          <button onClick={handleNext} className="button rounded-full ml-4">
            <ForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsList;
