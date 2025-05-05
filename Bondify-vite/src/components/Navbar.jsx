import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(173, 223, 235)' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="public/foto/bond.png" alt="Logo" width="50" height="45" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Biz Kimik
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Haqqımızda</a></li>
                <li><a className="dropdown-item" href="#">Rəhbərlik</a></li>
                <li><a className="dropdown-item" href="#">??</a></li>
                <li><a className="dropdown-item" href="#">Siyasətimiz</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Xidmətlər
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Əyləncə</a></li>
                <li><a className="dropdown-item" href="#">İnteraktiv Əyləncə</a></li>
                <li><a className="dropdown-item" href="#">Dekorasiya</a></li>
                <li><a className="dropdown-item" href="#">Team Building</a></li>
                <li><a className="dropdown-item" href="#">Tədbir Təşkili</a></li>
                <li><a className="dropdown-item" href="#">Konsept Yaradılması</a></li>
                <li><a className="dropdown-item" href="#">Öyrədici oyunlar</a></li>
                <li><a className="dropdown-item" href="#">Təlimlər</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link disabled">Görülmüş İşlər</a></li>
            <li className="nav-item"><a className="nav-link disabled">Müştərilər</a></li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-dark" type="submit">Əlaqə</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
