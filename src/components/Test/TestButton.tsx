import React from 'react';
import './TestButton.scss';

interface TestButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void;
}

export const TestButton: React.FC<TestButtonProps> = ({ text, isActive, onClick }) => {
    return (
        <button 
            className={`button-ok ${isActive ? 'active' : ''}`} 
            onClick={onClick}
        >
            <img 
                src="../../src/assets/ok-circle.svg" 
                className={`icon-ok ${isActive ? 'active' : ''}`} 
            />
            {text}
        </button>
    );
};

