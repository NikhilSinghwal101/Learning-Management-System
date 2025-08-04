import React, { useEffect, useRef, useState } from 'react';
// import CountUp from 'react-countup';

const Counter = ({ endNumber, duration }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasCounted = useRef(false);

    // Without 'react-countup' library
    const countUp = () => {
        const start = 0;
        const stepTime = Math.abs(Math.floor(duration / endNumber));
        let currentCount = start;

        const timer = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);
            if (currentCount === endNumber) {
                clearInterval(timer);
            }
        }, stepTime);
    };
    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted.current) {
                hasCounted.current = true; // Prevent counting more than once
                countUp();
            }
        });
    };


    // With 'react-countup' library
    // const handleScroll = (entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting && !hasCounted.current) {
    //             hasCounted.current = true; // Prevent counting more than once
    //             countRef.current.start(); // Start the count
    //         }
    //     });
    // };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll);
        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    return (
        <div className='inline-block' ref={countRef}>
            <p>{count}</p>
            {/* <CountUp ref={countRef} end={endNumber} duration={duration/1000} /> */}
        </div>
    );
};

export default Counter;
