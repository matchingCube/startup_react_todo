import React from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} title={meetup.title} />
      ))}
    </ul>
  );
}

export default MeetupList;
