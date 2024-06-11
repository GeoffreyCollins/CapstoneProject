import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is the purpose of this website?",
            answer: "This website helps you monitor and manage your carbon footprint by tracking various activities that contribute to carbon emissions."
        },
        {
            question: "How does the Carbon Tracker work?",
            answer: "The Carbon Tracker uses data from various sources to calculate the carbon emissions of different activities. You can track your city's carbon emissions."
        },
        {
            question: "Why should I use a Carbon Tracker?",
            answer: "Using a Carbon Tracker can help you understand your carbon footprint and take steps to reduce it. It can also help you compare your carbon emissions with others."
        }
    ];

    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;