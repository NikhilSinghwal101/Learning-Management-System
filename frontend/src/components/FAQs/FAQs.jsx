import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import './FAQs.css';


// Sample FAQ data
const faqs = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        question: "How does React work?",
        answer: "React creates a virtual DOM to optimize rendering and improve performance."
    },
    {
        question: "What are hooks in React?",
        answer: "Hooks are functions that let you use state and other React features without writing a class."
    }
];

const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="faq-container md:mx-56 lg:mx-56 sm:mx-8 mx-8 my-16 bg-slate-100">
            <h2 className="faq-title md:text-3xl lg:text-3xl sm:text-2xl text-xl">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item shadow-md">
                    <div className="faq-question lg:text-[18px] md:text-[18px] sm:text-[16px] text-[15px] lg:p-[15px] md:p-[15px] sm:p-[14px] p-[12px]" onClick={() => handleToggle(index)}>
                        {faq.question}
                        {expandedIndex === index ? (
                            <FaMinus className="icon" />
                        ) : (
                            <FaPlus className="icon" />
                        )}
                    </div>
                    {/* {expandedIndex === index && ( */}
                        <div className={`faq-answer lg:text-[15px] md:text-[15px] sm:text-[14px] text-[13px] ${expandedIndex === index ? 'expanded' : ''}`}>{faq.answer}</div>
                    {/* )} */}
                </div>
            ))}
        </div>
    );
};

export default FAQs;

