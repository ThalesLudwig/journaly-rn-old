import styled from "styled-components/native";
import { MoodEnum } from "../../constants/moods";
import { TYPOGRAPHY } from "../../constants/typography";
import Icon from "@expo/vector-icons/FontAwesome5";

export const Container = styled.Pressable`
  width: 150px;
  height: 100px;
  border-radius: 10px;
  border-width: 3px;
  border-color: ${({ isSelected, mood, theme }) =>
    isSelected ? theme[MoodEnum[mood]].TEXT : theme.BACKGROUND};
  padding: 10px;
  justify-content: space-between;
  background-color: ${({ mood, theme }) => theme[MoodEnum[mood]].BACKGROUND};
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
  font-weight: bold;
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
`;

export const MoodIcon = styled(Icon).attrs(({ mood, theme }) => ({
  color: theme[MoodEnum[mood]].TEXT
}))`
  margin-bottom: 5px;
`;