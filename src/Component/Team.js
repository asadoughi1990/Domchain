import React, { Component } from "react";
import TeamItems from "./TeamItems";
import { Person } from './../constant';

class Team extends Component {
  render() {
    let personHandler = Person.map((item, i) => (
      <TeamItems
        key={i}
        teamname={item.teamname}
        skill={item.skill}
        photo={item.photo}
      />
    ));
    return (
      <section className="section bg-gray" id="team">
        <div className="container text-center">
          <h1 className="section-title">Team</h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            varius ex. Suspendisse sagittis rutrum condimentum.
          </p>
          <div className="container">
            <div className="row mt-5">{personHandler}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
