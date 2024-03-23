import stations from "../data";
import { useGlobalContext } from "../context";

const Form = () => {
  const {
    departure,
    setDeparture,
    destination,
    setDestination,
    date,
    setDate,
    setPrice,
    setShowTicket,
  } = useGlobalContext();

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

  const handleDateSelect = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate Inputs
    if (!destination || !departure || !date) {
      console.log("no input!");
      return;
    }

    // Calulate Stops
    const stops = Math.abs(+destination.stopNumber - +departure.stopNumber);
    console.log(stops);

    // Set Price
    if (stops <= 2) {
      setPrice("1,50");
    } else if (stops >= 6) {
      setPrice("3,00");
    } else {
      setPrice("2,25");
    }

    // Format date

    // Output Ticket
    setShowTicket(true);

    // console.log(departure, destination, date);
  };

  return (
    <form
      className="bg-white mt-6 p-6 md:p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div
        id="container"
        className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 "
      >
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
            required
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
            required
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

      <div
        id="container"
        className="mt-8 md:mt-6 flex flex-col md:flex-row gap-8 justify-between items-center"
      >
        {/* Date input */}
        <div id="wrapper">
          <label
            htmlFor="date"
            className="mr-2 capitalize block md:inline text-center mb-2 md:mb-0"
          >
            travel date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateSelect}
            className=" border border-black border-solid  p-2 rounded-md text-neutral-600"
            required
          />
        </div>

        {/* Submit BTN */}
        <input
          type="submit"
          className="bg-cyan-800 hover:bg-cyan-600 duration-200 text-slate-50 capitalize px-6 py-3 font-semibold tracking-wider rounded-md cursor-pointer"
          value="buy ticket"
        />
      </div>
    </form>
  );
};

export default Form;
