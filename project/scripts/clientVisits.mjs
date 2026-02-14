export function clientVisits() {

  let visits = localStorage.getItem("visits");

  if (visits) {
    visits = parseInt(visits) + 1;
  } else {
    visits = 1;
  }

  localStorage.setItem("visits", visits);

  return visits;
}