export async function getVans() {
  const response = await fetch("/api/vans");
  const data = await response.json();

  const vans = data.vans;

  return vans;
}
