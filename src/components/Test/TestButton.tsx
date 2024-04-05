import React from 'react';
import './Test.scss';

interface ButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void;
}

export const TestButton: React.FC<ButtonProps> = ({ text, isActive, onClick }) => {
    return (
        <button 
            className={`button ${isActive ? 'active' : ''}`} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

