import moment from "moment";
import { IDayCard } from "../interfaces/IDayCard";

export const getDaysIn = (range: "week" | "month", currentMoment?: moment.Moment): IDayCard[] => {
  const currentMonth = currentMoment || moment();
  const firstDay = moment(currentMonth).startOf(range);
  const lastDay = moment(currentMonth).endOf(range);
  const daysInRange: IDayCard[] = [];

  while (firstDay.isSameOrBefore(lastDay)) {
    daysInRange.push({
      day: firstDay.startOf("day").format("DD"),
      name: firstDay.startOf("day").format("ddd").toUpperCase(),
      key: `${firstDay.startOf("day").format("DD")}/${firstDay.format("MM")}/${firstDay.format("YYYY")}`,
      month: firstDay.startOf("day").format("MM"),
      year: firstDay.startOf("day").format("YYYY"),
    });
    firstDay.add(1, "days");
  }
  return daysInRange;
};

export const getDaysInLastMonth = (currentMoment: moment.Moment): IDayCard[] => {
  const startOfMonth = moment(currentMoment).startOf("month");
  const startOfWeek = moment(currentMoment).startOf("month").startOf("week");
  const daysInRange: IDayCard[] = [];
  while (startOfWeek.isBefore(startOfMonth)) {
    daysInRange.push({
      day: startOfWeek.startOf("day").format("DD"),
      name: startOfWeek.startOf("day").format("ddd").toUpperCase(),
      key: `${startOfWeek.startOf("day").format("DD")}/${startOfWeek.format("MM")}/${startOfWeek.format("YYYY")}`,
      month: startOfWeek.startOf("day").format("MM"),
      year: startOfWeek.startOf("day").format("YYYY"),
    });
    startOfWeek.add(1, "days");
  }
  return daysInRange;
};

export const getDaysInNextMonth = (currentMoment: moment.Moment): IDayCard[] => {
  const endOfMonth = moment(currentMoment).endOf("month");
  const endOfWeek = moment(currentMoment).endOf("month").endOf("week");
  const daysInRange: IDayCard[] = [];
  while (endOfWeek.isAfter(endOfMonth)) {
    daysInRange.push({
      day: endOfWeek.startOf("day").format("DD"),
      name: endOfWeek.startOf("day").format("ddd").toUpperCase(),
      key: `${endOfWeek.startOf("day").format("DD")}/${endOfWeek.format("MM")}/${endOfWeek.format("YYYY")}`,
      month: endOfWeek.startOf("day").format("MM"),
      year: endOfWeek.startOf("day").format("YYYY"),
    });
    endOfWeek.subtract(1, "days");
  }
  return daysInRange.reverse();
};
