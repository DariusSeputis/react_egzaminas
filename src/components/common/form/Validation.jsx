import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Validation = ({ render }) => {
  // Hooks
  // -- state
  const [inputValue, setInputValue] = useState('');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (inputValue.length > 0) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [inputValue]);

  return render(setInputValue, inputValue, validated);
};

Validation.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Validation;
