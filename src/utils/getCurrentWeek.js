import moment from "moment";

export default function getCurrentWeek() {
  const dateValue = moment();

  const startDayOfWeek = dateValue.clone().startOf("week");
  const day = startDayOfWeek.clone().subtract(-1, "day");

  const thisWeek = [];

  for (let i = 0; i < 5; i++) {
    thisWeek.push(day.add(1, "day").clone());
  }

  return [...thisWeek];
}
