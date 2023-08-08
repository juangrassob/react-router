export async function getVans() {
  const response = await fetch("/api/vans");

  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();

  const vans = data.vans;

  return vans;
}

export async function getVanById(id) {
  const response = await fetch(`/api/vans/${id}`);

  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();

  const van = data.vans;

  console.log("api van name: ", van.name);

  return van;
}
