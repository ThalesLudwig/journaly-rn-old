import { MoodEnum } from "../../constants/moods";
import { Container, MoodIcon, Title } from "./MoodCardStyled";
import { getMoodIcon } from "../../helpers/moodHelper";

type MoodCardProps = { isSelected: boolean; mood: MoodEnum; onPress: Function };

export const MoodCard = ({ isSelected, mood, onPress }: MoodCardProps) => {
  return (
    <Container onPress={onPress} isSelected={isSelected} mood={mood}>
      <MoodIcon mood={mood} name={getMoodIcon(mood)} size={24} />
      <Title mood={mood}>{MoodEnum[mood]}</Title>
    </Container>
  );
};

export default MoodCard;
