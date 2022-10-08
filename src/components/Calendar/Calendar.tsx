import {
  Card,
  CardListWrapper,
  CardText,
  Container,
  Header,
  Pressable,
  Title,
  Week,
  WeekDay,
  YearButton,
  YearPicker,
  YearText,
} from "./CalendarStyled";
import * as Haptics from "expo-haptics";
import { getDaysIn, getDaysInLastMonth, getDaysInNextMonth } from "../../helpers/getDaysIn";
import { useTheme } from "../../hooks/useTheme";
import { IDayCard } from "../../types/DayCard";
import moment from "moment";
import { useState } from "react";
import Icon from "@expo/vector-icons/Feather";
import { TYPOGRAPHY } from "../../constants/typography";
import { themeType } from "../../types/themeType";

type CalendarProps = {
  onChange: (day: IDayCard) => any;
  selectedDay: moment.Moment;
};

export default function Calendar(props: CalendarProps) {
  const [currentMoment, setCurrentMoment] = useState<moment.Moment>(moment());
  const [selectedYear, setSelectedYear] = useState<moment.Moment>(moment());
  const [isShowingYearPicker, setIsShowingYearPicker] = useState<boolean>(false);
  const days = getDaysIn("month", currentMoment);
  const theme: themeType = useTheme();

  const isCurrentDay = (date: string) => {
    return props.selectedDay.startOf("day").format("DD/MM/YYYY") === date;
  };

  const isCurrentYear = (yearMoment: moment.Moment) => {
    return moment(currentMoment).format("YYYY") === moment(yearMoment).format("YYYY");
  };

  const selectDay = (day: IDayCard) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    props.onChange(day);
  };

  const renderDayCard = (item: IDayCard) => (
    <Card
      key={item.key}
      isCurrentDay={isCurrentDay(item.key)}
      isCurrentMonth={moment(currentMoment).format("MM") === item.month}
      onPress={() => selectDay(item)}
    >
      <CardText isCurrentDay={isCurrentDay(item.key)}>{item.day}</CardText>
    </Card>
  );

  const nextMonth = () => {
    const nextMonth = moment(currentMoment).startOf("month").add(1, "month");
    setCurrentMoment(nextMonth);
  };

  const previousMonth = () => {
    const previousMonth = moment(currentMoment).startOf("month").subtract(1, "month");
    setCurrentMoment(previousMonth);
  };

  const setTodayAsSelected = () => {
    setCurrentMoment(moment());
    setSelectedYear(moment());
    props.onChange({
      day: moment().format("DD"),
      month: moment().format("MM"),
      year: moment().format("YYYY"),
      name: moment().format("ddd").toUpperCase(),
      key: `${moment().format("DD")}/${moment().format("MM")}/${moment().format("YYYY")}`,
    });
  };

  const getDaysList = (): IDayCard[] => {
    return [...getDaysInLastMonth(currentMoment), ...days, ...getDaysInNextMonth(currentMoment)];
  };

  return (
    <Container>
      <Header>
        <Pressable onPress={previousMonth}>
          <Icon color={theme.TEXT} name="chevron-left" size={TYPOGRAPHY.SIZE.ICON} />
        </Pressable>
        <Title>{moment(currentMoment).format("MMMM")}</Title>
        <Pressable onPress={() => setIsShowingYearPicker(!isShowingYearPicker)}>
          <Title>{moment(currentMoment).format("YYYY").toUpperCase()}</Title>
        </Pressable>
        <Pressable onPress={nextMonth}>
          <Icon color={theme.TEXT} name="chevron-right" size={TYPOGRAPHY.SIZE.ICON} />
        </Pressable>
        <Pressable onPress={setTodayAsSelected}>
          <Icon color={theme.TEXT} name="calendar" size={TYPOGRAPHY.SIZE.ICON} />
        </Pressable>
      </Header>

      {isShowingYearPicker && (
        <YearPicker>
          <YearButton onPress={() => setSelectedYear(moment(selectedYear).subtract(3, "year"))}>
            <Icon color={theme.TEXT} name="chevrons-left" size={TYPOGRAPHY.SIZE.ICON} />
          </YearButton>
          <YearButton
            onPress={() => setCurrentMoment(moment(selectedYear).subtract(1, "year"))}
            isCurrentYear={isCurrentYear(moment(selectedYear).subtract(1, "year"))}
          >
            <YearText isCurrentYear={isCurrentYear(moment(selectedYear).subtract(1, "year"))}>
              {moment(selectedYear).subtract(1, "year").format("YYYY")}
            </YearText>
          </YearButton>
          <YearButton
            onPress={() => setCurrentMoment(moment(selectedYear))}
            isCurrentYear={isCurrentYear(moment(selectedYear))}
          >
            <YearText isCurrentYear={isCurrentYear(moment(selectedYear))}>
              {moment(selectedYear).format("YYYY")}
            </YearText>
          </YearButton>
          <YearButton
            onPress={() => setCurrentMoment(moment(selectedYear).add(1, "year"))}
            isCurrentYear={isCurrentYear(moment(selectedYear).add(1, "year"))}
          >
            <YearText isCurrentYear={isCurrentYear(moment(selectedYear).add(1, "year"))}>
              {moment(selectedYear).add(1, "year").format("YYYY")}
            </YearText>
          </YearButton>
          <YearButton onPress={() => setSelectedYear(moment(selectedYear).add(3, "year"))}>
            <Icon color={theme.TEXT} name="chevrons-right" size={TYPOGRAPHY.SIZE.ICON} />
          </YearButton>
        </YearPicker>
      )}

      <Week>
        {getDaysIn("week", currentMoment).map((day: IDayCard) => (
          <WeekDay key={day.key}>{day.name[0]}</WeekDay>
        ))}
      </Week>
      <CardListWrapper>
        {getDaysList()
          .slice(0, 7)
          .map((day: IDayCard) => renderDayCard(day))}
      </CardListWrapper>
      <CardListWrapper>
        {getDaysList()
          .slice(7, 14)
          .map((day: IDayCard) => renderDayCard(day))}
      </CardListWrapper>
      <CardListWrapper>
        {getDaysList()
          .slice(14, 21)
          .map((day: IDayCard) => renderDayCard(day))}
      </CardListWrapper>
      <CardListWrapper>
        {getDaysList()
          .slice(21, 28)
          .map((day: IDayCard) => renderDayCard(day))}
      </CardListWrapper>
      <CardListWrapper>
        {getDaysList()
          .slice(28, 35)
          .map((day: IDayCard) => renderDayCard(day))}
      </CardListWrapper>
      <CardListWrapper>
        {getDaysList()
          .slice(35)
          .map((day: IDayCard) => renderDayCard(day))}
      </CardListWrapper>
    </Container>
  );
}
