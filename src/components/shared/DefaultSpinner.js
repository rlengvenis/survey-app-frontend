import React from 'react';
import Spinner from 'react-spinner-material';


const DefaultSpinner = () => {
  return (
    <div className="spinner-holder">
      <Spinner
        size={60}
        spinnerColor="#4285f4"
        spinnerWidth={3}
        visible={true}
      />
    </div>
  );
};

export default DefaultSpinner;