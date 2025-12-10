export function formatTime(date) {
  return new Date(date).toLocaleTimeString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
