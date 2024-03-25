import { useGlobalContext } from "../context";
import QRCode from "react-qr-code";

const Ticket = () => {
  const { departure, destination, date, price, setShowTicket } =
    useGlobalContext();
  // console.log(departure, destination, date, price);

  return (
    <div
      id="ticket-container"
      className="bg-white mt-6 p-6 md:p-10 rounded-lg text-center"
    >
      <h2 className="capitalize text-neutral-600 text-xl font-semibold tracking-wide">
        your ticket
      </h2>
      <div id="ticket" className="my-4 leading-7">
        <p>From: {departure.stopName}</p>
        <p>To: {destination.stopName}</p>
        <p>Valid on: {date}</p>
        <p>Price: &euro; {price}</p>
      </div>
      <div id="code-container">
        <QRCode
          className="m-auto"
          size={200}
          value={(departure.stopName, destination.stopName, date, price)}
        />
      </div>
      <button
        onClick={() => setShowTicket(false)}
        type="button"
        className="mt-16 bg-cyan-800 hover:bg-cyan-600 duration-200 text-slate-50 capitalize px-6 py-3 font-semibold tracking-wider rounded-md cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};
export default Ticket;
