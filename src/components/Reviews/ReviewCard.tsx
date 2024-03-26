import React from 'react';
import "./ReviewCard.scss";

interface ReviewCardProps {
	image: string;
	name: string;
	review: string;
	color: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ image, name, review, color }) => {
	return (
		<div className={`rounded-3xl p-8 bg-${color} shadow-md w-[430px] h-[257px] flex flex-col`} style={{ backgroundColor: color }}>
			<div className="flex items-center mb-8">
				<img src={image} alt={name} className="rounded-full w-[76px] h-[76px] mr-4 object-cover" />
				<div className="text-lg font-bold text-white">{name}</div>
			</div>
			<div className="overflow-auto h-[180px] custom-scrollbar">
				<p className="text-lg font-normal text-white">{review}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
