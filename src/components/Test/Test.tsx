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
            className={`button-ok ${isActive ? 'active' : ''}`} 
            onClick={onClick}
        >
            <img 
                src="src/components/Test/ok-circle.svg" 
                className={`icon-ok ${isActive ? 'active' : ''}`} 
            />
            {text}
        </button>
    );
};

