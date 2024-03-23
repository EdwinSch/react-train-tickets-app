import stations from "../data";
import { useState } from "react";

const Form = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const handleDepartureSelect = (event) => {
    const selectedDeparture = stations.find((station) => {
      return station.stopName === event.target.value;
    });
    setDeparture(selectedDeparture);
  };

  const handleDestinatinoSelect = (event) => {
    const selectedDestination = stations.find((station) => {
      return station.stopName === event.target.value;
    });
    setDestination(selectedDestination);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(departure, destination);
  };

  return (
    <form
      className="bg-white mt-10 px-10 py-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div id="container" className="flex justify-center gap-12">
        {/* Select Departure */}
        <div id="select-wrapper" className="w-full">
          <label
            htmlFor="departure"
            className="block capitalize text-neutral-800 mb-2"
          >
            Departure station:
          </label>

          <select
            className="cursor-pointer block w-full border border-black border-solid capitalize p-3 rounded-md text-neutral-600"
            id="departure"
            name="departure"
            defaultValue={departure}
            value={departure.stopName}
            onChange={handleDepartureSelect}
          >
            <option value="" disabled>
              Select station
            </option>
            {stations.map((station, idx) => {
              return (
                <option key={idx} value={station.stopName}>
                  {station.stopName}
                </option>
              );
            })}
          </select>
        </div>

        {/* Select Destination */}
        <div id="select-wrapper" className="w-full">
          <label
            htmlFor="destination"
            className="block capitalize text-neutral-800 mb-2"
          >
            Destination station:
          </label>

          <select
            className="cursor-pointer block w-full border border-black border-solid capitalize p-3 rounded-md text-neutral-600"
            id="destination"
            name="destination"
            defaultValue={destination}
            value={destination.stopName}
            onChange={handleDestinatinoSelect}
          >
            <option value="" disabled>
              Select station
            </option>
            {stations.map((station, idx) => {
              return (
                <option key={idx} value={station.stopName}>
                  {station.stopName}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Submit BTN */}
      <input type="submit" className="submit-btn" value="buy ticket" />
    </form>
  );
};

export default Form;
