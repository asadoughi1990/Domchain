import React from 'react';

const TeamItems = (props) => {
    return (
      <div className="col-lg-3 col-sm-6">
        <div className="team-box">
          <div className="team-wrapper mb-4 mb-lg-0">
            <div className="team-member">
              <img src={props.photo} alt="Person 1" />
            </div>
          </div>
          <div className="team-info">
            <div className="team-name">{props.teamname}</div>
            <div className="team-designation">{props.skill}</div>
          </div>
          <div className="team-socmed">
            <div className="border-separator"></div>
            <ul className="list-socmed list-unstyled m-0">
              <li>
                <a href="/">
                  <i className="ion ion-logo-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ion ion-logo-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ion ion-logo-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ion ion-logo-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

}

export default TeamItems;