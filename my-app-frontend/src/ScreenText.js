import React from "react";
import { useState } from "react";

function ScreenText({ data }) {
  const [convoId, setConvoId] = useState(1);
  if (data === null) {
    return <h2>Loading...</h2>;
  }

  function loadNextConvoData() {}

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
  const choices = data.conversations[convoId - 1].choices;
  const buttons = choices.map((c) => (
    <button onClick={handleButtonClick} name={c.next_conversation_id}>
      {c.text}
    </button>
  ));
  return (
    <>
      <div className="line">{data.conversations[convoId - 1].text}</div>
      <div>{buttons}</div>
    </>
  );
}

export default ScreenText;
