import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TYPOGRAPHY } from "../../constants/typography";
import { TextInput as PaperTextInput, Chip as PaperChip, Button } from "react-native-paper";
import { MoodEnum } from "../../constants/moods";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const Padding = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: ${TYPOGRAPHY.SIZE.TITLE};
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  color: ${({ theme }) => theme.TEXT};
  margin-top: 5px;
`;

export const TagList = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 15px 0;
`;

export const ChipWrapper = styled.View`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Chip = styled(PaperChip)`
  border-width: 0.5px;
  border-color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
  background-color: ${({ mood, theme }) => theme[MoodEnum[mood]].BACKGROUND};
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
`;

export const CleanFormButton = styled(Button).attrs({ mode: "outlined" })`
  margin-top: 10px;
`;

export const TextInput = styled(PaperTextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.PLACEHOLDER,
}))`
  background-color: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.TEXT};
`;
