import React, {useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  const openSearch = useCallback((evt) => {
    evt.preventDefault();
    const body = document.querySelector('body');
    body.classList.add('box-collapse-open');
    body.classList.remove('box-collapse-closed');
  }, []);

  const closeSearch = useCallback((evt) => {
    const body = document.querySelector('body');
    body.classList.remove('box-collapse-open');
    body.classList.add('box-collapse-closed');
  }, []);

  return (
    <>
      <div className="click-closed"></div>
      <div className="box-collapse">
        <div className="title-box-d">
          <h3 className="title-d">Search Property</h3>
        </div>
        <span className="close-box-collapse right-boxed bi bi-x" onClick={closeSearch}></span>
        <div className="box-collapse-wrap form">
          <form className="form-a">
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="form-group">
                  <label className="pb-2" htmlFor="Type">
                    Keyword
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-a"
                    placeholder="Keyword"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="Type">
                    Type
                  </label>
                  <select className="form-control form-select form-control-a" id="Type">
                    <option>All Type</option>
                    <option>For Rent</option>
                    <option>For Sale</option>
                    <option>Open House</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="city">
                    City
                  </label>
                  <select className="form-control form-select form-control-a" id="city">
                    <option>All City</option>
                    <option>Alabama</option>
                    <option>Arizona</option>
                    <option>California</option>
                    <option>Colorado</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="bedrooms">
                    Bedrooms
                  </label>
                  <select className="form-control form-select form-control-a" id="bedrooms">
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="garages">
                    Garages
                  </label>
                  <select className="form-control form-select form-control-a" id="garages">
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="bathrooms">
                    Bathrooms
                  </label>
                  <select className="form-control form-select form-control-a" id="bathrooms">
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="price">
                    Min Price
                  </label>
                  <select className="form-control form-select form-control-a" id="price">
                    <option>Unlimite</option>
                    <option>$50,000</option>
                    <option>$100,000</option>
                    <option>$150,000</option>
                    <option>$200,000</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-b">
                  Search Property
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a className="navbar-brand text-brand" href="/">
            Skeleton<span className="color-b">&nbsp;&nbsp; Project</span>
          </a>

          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={pathName === '' ? 'nav-link active' : 'nav-link'} to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className={pathName === 'users' ? 'nav-link active' : 'nav-link'} to="/users">
                  User
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={pathName === 'boards' ? 'nav-link active' : 'nav-link'}
                  to="/boards"
                >
                  Board
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={pathName === 'signup' ? 'nav-link active' : 'nav-link'}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div className="dropdown-menu">
                  <a className="dropdown-item " href="property-single.html">
                    Property Single
                  </a>
                  <a className="dropdown-item " href="blog-single.html">
                    Blog Single
                  </a>
                  <a className="dropdown-item " href="agents-grid.html">
                    Agents Grid
                  </a>
                  <a className="dropdown-item " href="agent-single.html">
                    Agent Single
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            onClick={openSearch}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
