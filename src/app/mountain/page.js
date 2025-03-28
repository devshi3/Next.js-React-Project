async function getData(params) {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6 ">Lift status info</h1>
      <table>
        <thead className="text-2xl font-bold text-center mb-6 ">
          <tr>
            <th>Lift Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody className="text-xl font-mono text-center mb-6 ">
          {data.map((lift) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
