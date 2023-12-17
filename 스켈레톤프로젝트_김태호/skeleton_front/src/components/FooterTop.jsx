import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">About</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Property</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Blog</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copyright-footer">
                <p className="copyright color-text-a">
                  &copy; Copyright
                  <span className="color-a">EstateAgency</span> All Rights Reserved.
                </p>
              </div>
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
