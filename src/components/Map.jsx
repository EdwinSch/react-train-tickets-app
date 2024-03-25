import stations from "../data";

const Map = () => {
  return (
    <div id="map-container" className="bg-white mt-6 p-6 lg:p-10 rounded-lg ">
      <h2 className="mb-4 capitalize text-neutral-600 text-lg font-semibold tracking-wide">
        line map
      </h2>

      {/* Stops */}
      <section id="stops-wrapper" className="flex flex-col lg:flex-row">
        {stations.map((stop, idx) => {
          return (
            <article
              id="stop"
              key={idx}
              className="flex lg:flex-col h-auto w-auto lg:w-20 items-center gap-2 lg:gap-4"
            >
              <div
                id="illustration-wrapper"
                className="flex flex-col lg:flex-row lg:w-full items-center lg:justify-center"
              >
                <div
                  id="line"
                  className="bg-neutral-600 h-3 lg:h-1 w-1 lg:w-10"
                ></div>
                <div id="dot" className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div
                  id="line"
                  className="bg-neutral-600 h-3 lg:h-1 w-1 lg:w-10"
                ></div>
              </div>
              <p className="text-sm text-center lg:rotate-45 lg:leading-tight">
                {stop.stopName}
              </p>
            </article>
          );
        })}
      </section>

      {/* Fares */}

      <section id="fares-wrapper" className="mt-8">
        <h2 className="capitalize text-neutral-600 text-lg font-semibold tracking-wide">
          Fares
        </h2>
        <p className="text-sm leading-6">2 stops: &euro; 1,50</p>
        <p className="text-sm leading-6">3-6 stops: &euro; 2,25</p>
        <p className="text-sm leading-6">7+ stops: &euro; 3,00</p>
      </section>
    </div>
  );
};
export default Map;
