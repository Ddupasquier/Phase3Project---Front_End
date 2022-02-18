import React from "react";
import AboutCreators from "./AboutCreators";
import UserLogin from "./UserLogin";


function IntroScreen() {
  return (
    <>
      <div className="introscreen">
      <UserLogin />
        <p className="togreen">
          Maybe we put a bit about the game in this section
        </p>
        <div>
          <p>
            <button
              className="btn btn-primary togreen button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              A Bit About The Creators
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="aboutcreators">
              <AboutCreators />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroScreen;
