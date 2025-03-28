import HotelBlock from "./HotelBlock";

async function getData(params) {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1 className="text-2xl font-bold text-center mb-6 ">Hotel details</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
