import moment from "moment";

const startOffset = 15 * 60 * 1000; // 15 minutes (first Vorlesung would be at 00:15, not 00:00)
const duration = 90 * 60 * 1000; // 90 minutes
const timeBetweenVorlesungen = 2 * 60 * 60 * 1000; // 2 hours (firs Vorlesung 00:15, next 02:15)

export const getTagesbeginn = (time: number) =>
  moment(time).startOf("day").valueOf();

export const getTimeSinceVorlesungsBeginn = (time: number) => {
  const timeOfDay = time - getTagesbeginn(time);

  return (timeOfDay - startOffset) % timeBetweenVorlesungen;
};

export const getTimeUntilVorlesungsEnde = (time: number) =>
  getTimeSinceVorlesungsBeginn(time) + duration;

export const formatShit = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / 1000 / 60 / 60);
  const minutes = Math.floor(milliseconds / 1000 / 60 - hours * 60);
  const seconds = Math.floor(milliseconds / 1000 - minutes * 60 - hours * 3600);

  return `${hours}:${minutes}:${seconds}`;
};
