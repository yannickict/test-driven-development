export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Negative time is invalid");
  }
  if (seconds === 0) {
    return "0s";
  }

  const restSeconds = seconds % 60;
  const minutes = (seconds - restSeconds) / 60;
  const restMinutes = minutes % 60;
  const hours = (minutes - restMinutes) / 60;

  const hoursString = hours ? hours + "h" : "";
  const minutesString = restMinutes ? restMinutes + "m" : "";
  const secondsString = restSeconds ? restSeconds + "s" : "";

  return hoursString + minutesString + secondsString;
}
