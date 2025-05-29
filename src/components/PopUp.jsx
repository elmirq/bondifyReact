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
    <div className="card position-fixed bottom-0 start-0 mb-1 ms-1" id="popUp">
      <h5 className="card-header">
        Lorem, ipsum.
        <button type="button" id="baglamaButton" className="btn btn-sm position-absolute top-0 end-0 m-2">
          <i className="bi bi-x-lg"></i>
        </button>
      </h5>
      <div className="card-body">
        <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iusto ipsum vero dolorum porro nesciunt non rem laborum enim reprehenderit!</p>
        <a href="#" className="btn btn-secondary position-absolute bottom-0 end-0 me-4 mb-4">Əlaqə</a>
      </div>
    </div>
  );
};

export default PopUp;