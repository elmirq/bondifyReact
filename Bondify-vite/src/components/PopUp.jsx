import React, { useEffect } from 'react';

const PopUp = () => {
  useEffect(() => {
    const button = document.getElementById('baglamaButton');
    const card = document.getElementById('popUp');

    const close = () => {
      card.classList.add('hide-left');
      card.addEventListener('animationend', () => {
        card.style.display = 'none';
      });
    };

    button.addEventListener('click', close);

    return () => button.removeEventListener('click', close);
  }, []);

  return (
    <div className="card position-absolute bottom-0 start-0 mb-1 ms-1" id="popUp">
      <h5 className="card-header">
        Feaed
        <button type="button" id="baglamaButton" className="btn btn-sm position-absolute top-0 end-0 m-2">
          <i className="bi bi-x-lg"></i>
        </button>
      </h5>
      <div className="card-body">
        <h5 className="card-title">baljblaj</h5>
        <p className="card-text">Bla bla bla</p>
        <a href="#" className="btn btn-secondary position-absolute bottom-0 end-0 me-4 mb-4">Elaqe</a>
      </div>
    </div>
  );
};

export default PopUp;