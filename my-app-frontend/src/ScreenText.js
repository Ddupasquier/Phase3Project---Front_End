import React from "react";
import image from "./LocalAssets/pixil-frame-0 (2).png";
import blinkingarrow from "./LocalAssets/right_arrow_transparent.gif";

function ScreenText({ data, handleDataState }) {
  // const [convoId, setConvoId] = useState(1);
  console.log(data);

  if (data === null) {
    return <h2>Loading...</h2>;
  }
  const [roomData, convoId] = data;

  const arrow = <img src={blinkingarrow} alt="arrow" />;

  function loadNextConvoData(id) {
    fetch(`http://localhost:9292/conversations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        handleDataState(data, id);
      });
  }

  function handleButtonClick(e) {
    const convo = roomData.conversations.filter(
      (c) => c.id === parseInt(e.target.name)
    );
    if (convo.length === 0) {
      loadNextConvoData(parseInt(e.target.name));
    } else {
      handleDataState(roomData, convo[0].id);
    }
  }
  const currentConvo = roomData.conversations.filter((c) => c.id === convoId);
  console.log(currentConvo);
  const choices = currentConvo[0].choices;
  const buttons = choices.map((c) => (
    <button
      key={c.id}
      onClick={handleButtonClick}
      name={c.next_conversation_id}
      className="convo_btns"
    >
      <p>
        {arrow} {c.text}
      </p>
    </button>
  ));
  return (
    <>
      <img src={image} alt="img"></img>
      <p>{currentConvo[0].text}</p>
      <div>{buttons}</div>
    </>
  );
}

export default ScreenText;
