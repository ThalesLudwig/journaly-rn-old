import moment from "moment";
import * as Haptics from "expo-haptics";
import { IDayCard } from "../../types/DayCard";
import { CardWrapper, Card, CardText, CardListWrapper } from "./CalendarWeekStyled";
import { getDaysIn } from "../../helpers/getDaysIn";

type CalendarWeekProps = {
  onSelectDay: (day: moment.Moment) => void;
  selectedDay: moment.Moment;
};

export function CalendarWeek({ selectedDay, onSelectDay }: CalendarWeekProps) {
  const isCurrentDay = (date: string) => {
    return selectedDay.startOf("day").format("DD/MM/YYYY") === date;
  };

  const selectDayOfWeek = (day: IDayCard) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onSelectDay(moment(`${day.day}/${day.month}/${day.year}`, "DD/MM/YYYY").startOf("day"));
  };

  const renderDayCard = (item: IDayCard) => (
    <CardWrapper key={item.key} isCurrentDay={isCurrentDay(item.key)} onPress={() => selectDayOfWeek(item)}>
      <Card>
        <CardText isCurrentDay={isCurrentDay(item.key)}>{item.name}</CardText>
        <CardText isCurrentDay={isCurrentDay(item.key)}>{item.day}</CardText>
      </Card>
    </CardWrapper>
  );

  return <CardListWrapper>{getDaysIn('week').map((day: IDayCard) => renderDayCard(day))}</CardListWrapper>;
}

export default CalendarWeek;
