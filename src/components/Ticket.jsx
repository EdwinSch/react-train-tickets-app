import { useGlobalContext } from "../context";

const Ticket = () => {
  const { departure, destination, date } = useGlobalContext();
  return (
    <div
      id="ticket-container"
      className="bg-white mt-6 p-6 md:p-10 rounded-lg text-center"
    >
      <h2 className="capitalize text-neutral-600 text-xl font-semibold tracking-wide">
        your ticket
      </h2>
      <div id="ticket" className="mt-2">
        <p>From: {departure.stopName}</p>
        <p>To: {destination.stopName}</p>
        <p>Valid on: {date}</p>
      </div>
    </div>
  );
};
export default Ticket;
