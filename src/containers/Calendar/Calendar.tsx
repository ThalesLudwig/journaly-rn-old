import { Container } from "./CalendarStyled";
import CalendarComponent from "../../components/Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../config/dateSlice";
import { IRootState } from "../../types/RootState";
import moment from "moment";

export default function Calendar() {
  const { value: selectedDay } = useSelector((state: IRootState) => state.date);
  const dispatch = useDispatch();

  return (
    <Container>
      <CalendarComponent
        selectedDay={moment(selectedDay, "DD/MM/YYYY")}
        onChange={(day) => dispatch(setDate(day.key))}
      />
    </Container>
  );
}
