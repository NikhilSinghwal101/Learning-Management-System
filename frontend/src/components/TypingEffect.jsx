import React, { useEffect, useState } from 'react';
import '../App.css';

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isDeleting) {
                setDisplayedText((prev) => prev.slice(0, -1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setIndex(0); // Reset index for next typing
                }
            } else {
                setDisplayedText((prev) => prev + text.charAt(index));
                if (index < text.length - 1) {
                    setIndex((prev) => prev + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, displayedText, isDeleting, index]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev); // Toggle cursor visibility
        }, 500); // Cursor blinks every 500ms

        return () => clearInterval(cursorInterval); // Cleanup on unmount
    }, []);

    return (
        <div className=''>
            {displayedText}
            {showCursor && <span className="mt-[-10px] cursor text-white text-bold md:text-6xl lg:text-6xl sm:text-4xl text-4xl">|</span>}
        </div>
    );
};

export default TypingEffect;
