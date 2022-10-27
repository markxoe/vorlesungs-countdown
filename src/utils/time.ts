import moment from "moment";

const startOffset = 15 * 60 * 1000; // 15 minutes
const duration = 90 * 60 * 1000; // 90 minutes

export const getTagesbeginn = (time: number) =>
  moment(time).startOf("day").valueOf();

export const getVorlesungsbeginn = (time: number) => {
  const timeOfDay = time - getTagesbeginn(time);

  return (timeOfDay - startOffset) % (2 * 60 * 60 * 1000);
};

export const getVorlesungsEnde = (time: number) =>
  getVorlesungsbeginn(time) + duration;

export const formatShit = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / 1000 / 60 / 60);
  const minutes = Math.floor(milliseconds / 1000 / 60 - hours * 60);
  const seconds = Math.floor(milliseconds / 1000 - minutes * 60 - hours * 3600);

  return `${hours}:${minutes}:${seconds}`;
};
