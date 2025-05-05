import React from 'react';

const Carousel = () => {
  return (
    <div className="container-md mt-5">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[1, 2, 3].map((n, index) => (
            <div key={n} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="carousel-caption">
                <h3>Başlıq {n}</h3>
                <p>Açıqlama {n}</p>
              </div>
              <img src={`/foto/tb${n}.jpg`} className="d-block w-100" alt={`slide-${n}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;