import React from "react";
import AboutCreators from "./AboutCreators";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function IntroScreen() {
  return (
    <div className="introscreen ui inverted segment">
      <Link to="/gametitle" className="togreen bitfont">
      <h1><Typewriter
  options={{
    strings: ['Enter'],
    autoStart: true,
    loop: true,
  }}
/></h1><br/>
      </Link>
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
        <div class="collapse" id="collapseExample">
          <div class="aboutcreators card card-body">
            <AboutCreators />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
