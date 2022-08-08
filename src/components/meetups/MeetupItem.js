import React from "react";
import Todo from "../Todo";

function MeetupItem(props) {
  return (
    <li key={props.id}>
      <Todo text={props.title} />
    </li>
  );
}

export default MeetupItem;
