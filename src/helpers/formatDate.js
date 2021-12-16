export function formatDate(time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  let minutes = date.getMinutes();

  minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;

  return `${day}/${month + 1}/${year} ${hour}:${minutes}`;
}
