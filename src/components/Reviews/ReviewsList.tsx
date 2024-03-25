import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

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
		setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
	};

	const cyclicReviews = reviews.slice(currentIndex).concat(reviews.slice(0, currentIndex));

	const colors = ['#90C8F5', '#FFB703'];

	return (
		<div>
			<div className="flex space-x-4">
				{cyclicReviews.slice(0, 3).map((review, index) => (
					<ReviewCard key={index} {...review} color={colors[index % colors.length]} />
				))}
			</div>
			<div className="flex justify-center mt-4">
				<button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded-full">Prev</button>
				<button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4">Next</button>
			</div>
		</div>
	);
};

export default ReviewsList;
