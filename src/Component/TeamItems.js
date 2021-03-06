import React from 'react';

const TeamItems = (props) => {
    return (
      <div className="col-lg col-sm-6">
        <div className="team-box">
          <div className="team-wrapper mb-4 mb-lg-0">
            <div className="team-member">
              <img src={props.photo} alt="Person" />
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
                <a href={props.linkedIn}>
                <i className="ion ion-logo-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

}

export default TeamItems;