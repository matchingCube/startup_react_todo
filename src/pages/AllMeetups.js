import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const TITLE_DATA = [
    {
      id: "m1",
      title: "I am a Robot",
    },
    {
      id: "m2",
      title: "Who am I?",
    },
    {
      id: "m3",
      title: "React Core Tutorial",
    },
  ];
  return (
    <section className="text-center">
      <h1>All Meetups Page</h1>
      <MeetupList meetups={TITLE_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
