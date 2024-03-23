import stations from "../data";

const Map = () => {
  return (
    <div id="map-container" className="bg-white mt-6 p-6 md:p-10 rounded-lg">
      <h2 className="mb-4 capitalize text-neutral-600 text-xl font-semibold tracking-wide">
        metro map
      </h2>

      {/* Stops */}
      <section id="stops-wrapper" className="flex flex-col ">
        {stations.map((stop, idx) => {
          return (
            <article
              id="stop"
              key={idx}
              className="flex h-auto items-center gap-2"
            >
              <div
                id="illustration-wrapper"
                className="flex flex-col items-center"
              >
                <div id="line" className="bg-neutral-600 h-3 w-1"></div>
                <div id="dot" className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div id="line" className="bg-neutral-600 h-3 w-1"></div>
              </div>
              <p className="text-sm">{stop.stopName}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default Map;
