import React from "react";
import { useState } from "react";
import image from "./LocalAssets/pixil-frame-0 (2).png";

function ScreenText({ data, handleDataState }) {
  const [convoId, setConvoId] = useState(1);
  if (data === null) {
    return <h2>Loading...</h2>;
  }
  console.log(convoId);

  function loadNextConvoData(id) {
    fetch(`http://localhost:9292/conversations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleDataState(data);
      });
  }

  function handleButtonClick(e) {
    const convo = data.conversations.filter(
      (c) => c.id === parseInt(e.target.name)
    );
    if (convo.length === 0) {
      loadNextConvoData(parseInt(e.target.name));
    } else {
      console.log(convo);
      setConvoId(convo[0].id);
    }
  }
  const currentConvo = data.conversations.filter((c) => c.id === convoId);
  console.log(currentConvo);
  const choices = currentConvo[0].choices;
  const buttons = choices.map((c) => (
    <button onClick={handleButtonClick} name={c.next_conversation_id}>
      {c.text}
    </button>
  ));
  return (
    <>
      <img src={image}></img>
      <p>{data.conversations[convoId - 1].text}</p>
      <div>{buttons}</div>
    </>
  );
}

export default ScreenText;
