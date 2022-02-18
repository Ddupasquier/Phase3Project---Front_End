import React from "react";
function End() {
  return (
    <div className="video">
      <h1>
        <span className="the">THE </span>
        <span className="ends">END</span>
        <span className="q">?</span>
      </h1>
      {/*  */}
      <span className="rickroll">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xLGktQmtR5A?autoplay=1"
          title="YouTube video player"
          frameborder="10"
          allow="autoplay"
        ></iframe>
      </span>
      <audio autoplay="true" src="https://www.youtube.com/watch?v=P6dC8F6z11E"></audio>
    </div>
  );
}

export default End;
