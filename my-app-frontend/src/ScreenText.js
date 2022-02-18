import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "./LocalAssets/pixil-frame-0 (2).png";
import flipimage from "./LocalAssets/fliphouse.png";
import blinkingarrow from "./LocalAssets/right_arrow_transparent.gif";

function ScreenText({ data, handleDataState, user, houseState }) {
  // const [convoId, setConvoId] = useState(1);
  // console.log(data);
  const [typewrittenText, setTypewrittenText] = useState("");
  const [roomData, convoId] = data;
  const [intervalId, setIntervalId] = useState(null);
  const currentConvo = roomData.conversations.filter((c) => c.id === convoId);

  const txt = `${currentConvo[0].text}`;
  const speed = 0;

  useEffect(() => {
    // console.log("looping");
    const id = setInterval(() => {
      setTypewrittenText((text) => {
        if (text.length < txt.length) {
          return text + txt[text.length];
        } else {
          clearInterval(id);
          return text;
        }
      });
      setIntervalId(id);
      return () => {
        clearInterval(intervalId);
      };
    }, speed);
  }, [txt]);

  const arrow = <img src={blinkingarrow} alt="arrow" />;

  function loadNextConvoData(id) {
    fetch(`http://localhost:9292/conversations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        handleDataState(data, id);
      });
  }

  function handleButtonClick(e) {
    clearInterval(intervalId);
    setTypewrittenText("");
    const convo = roomData.conversations.filter(
      (c) => c.id === parseInt(e.target.name)
    );
    if (convo.length === 0) {
      loadNextConvoData(parseInt(e.target.name));
    } else {
      handleDataState(roomData, convo[0].id);
    }
  }

  // console.log(currentConvo);
  const choices = currentConvo[0].choices;
  const buttons = choices.map((c) => (
    <button
      key={c.id}
      onClick={handleButtonClick}
      name={c.next_conversation_id}
      className="convo_btns"
    >
      {arrow}
      {c.text}
    </button>
  ));

  function endbtn() {
    if (convoId === 36) {
      return (
        <button className="togreen button">
          <Link to="/end" className="endbtn">Thanks for playing, {user}!</Link>
        </button>
      );
    }
  }

  return (
    <>
      <p className="username">Username: {user}</p>
      {houseState === "attic" || houseState === "fliphouse" ? (
        <img src={flipimage} alt="flip" />
      ) : (
        <img src={image} alt="reg" />
      )}
      <br />
      <p className="convo_text" id="demo">
        {typewrittenText}
      </p>
      <div>{typewrittenText === txt ? buttons : null}</div>
      {endbtn()}
    </>
  );
}

export default ScreenText;
