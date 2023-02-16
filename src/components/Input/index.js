import React from 'react';
import './index.css';

const Input = ({ onInputChange, onSubmit }) => {
  return (
    <div className="mt5">
      <p className="f3 dark-blue">
        {'This Magic Brain will detect faces in your pictures'}
        <br />
        <br />
        {'Give it a try!'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
