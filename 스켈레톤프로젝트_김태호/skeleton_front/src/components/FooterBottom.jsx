import React from 'react';
import {Link} from 'react-router-dom';

function FooterBottom() {
  return (
    <>
      {' '}
      <section className="section-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">EstateAgency</h3>
                </div>
                <div className="w-body-a">
                  <p className="w-text-a color-text-a">
                    Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea
                    commodo consequat duis sed aute irure.
                  </p>
                </div>
                <div className="w-footer-a">
                  <ul className="list-unstyled">
                    <li className="color-a">
                      <span className="color-text-a">Phone .</span> contact@example.com
                    </li>
                    <li className="color-a">
                      <span className="color-text-a">Email .</span> +54 356 945234
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">The Company</h3>
                </div>
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i> <Link href="#">Site Map</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i> <Link href="#">Legal</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i> <Link href="#">Agent Admin</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i> <Link href="#">Careers</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i> <Link href="#">Affiliate</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i> <Link href="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">International sites</h3>
                </div>
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <Link href="#">Venezuela</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <Link href="#">China</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <Link href="#">Hong Kong</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <Link href="#">Argentina</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <Link href="#">Singapore</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <Link href="#">Philippines</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterBottom;
