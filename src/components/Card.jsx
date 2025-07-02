import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description }) => (
  <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;
