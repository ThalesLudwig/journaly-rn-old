import { Container } from "./CalendarStyled";
import CalendarComponent from "../../components/Calendar/Calendar";

export default function Calendar() {
  return (
    <Container>
      <CalendarComponent onChange={day => console.log(day)} />
    </Container>
  );
}
