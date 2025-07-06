import React from 'react';

const TestimonialCard = ({ quote, name, clientType, avatarSrc }) => {
  return (
    <div className="testimonial-card-pinaka">
      <div className="testimonial-avatar-container-pinaka">
        {avatarSrc ? (
          <img src={avatarSrc} alt={name} className="testimonial-avatar-pinaka" />
        ) : (
          <div className="testimonial-placeholder-icon-pinaka">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="testimonial-quote-pinaka">"{quote}"</p>
      <h4 className="testimonial-name-pinaka">{name}</h4>
      <p className="testimonial-client-type-pinaka">{clientType}</p>
    </div>
  );
};

export default TestimonialCard;