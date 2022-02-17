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
      <span className="rickroll"><iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xLGktQmtR5A?autoplay=1"
        title="YouTube video player"
        frameborder="10"
        
      ></iframe></span>
    </div>
  );
}

export default End;
