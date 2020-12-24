import React from 'react';
import { Link } from 'react-router-dom';

import './SubHeaderSearchPage.css';

const SubHeaderSearchPage = () => {
  return (
    <div className="search-page-sub-header container-fluid border-bottom ">
      <div className="row px-4">
        <div className="col-md-1"></div>
        <div className="col-md-6 ml-5 px-5">
          <nav className="navbar-nav navbar-expand-lg">
            <ul className="nav">
              <li className="nav-item p-2 active">
                <Link
                  to="#"
                  className="d-flex align-items-center justify-content-between ">
                  <i className="fa fa-search mr-2"></i>
                  All
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between ">
                  <i className="fa fa-map-marker mr-2"></i>
                  Maps
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between ">
                  <i className="fa fa-newspaper-o mr-2"></i>
                  News
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between ">
                  <i className="fa fa-play mr-2"></i>
                  Videos
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between ">
                  <i className="fa fa-ellipsis-v mr-2"></i>
                  More
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto pr-4">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Tools
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderSearchPage;
