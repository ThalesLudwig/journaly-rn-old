import Icon from "@expo/vector-icons/FontAwesome5";
import { Dimensions } from "react-native";
import { Divider as PaperDivider } from "react-native-paper";
import styled from "styled-components/native";
import { MoodEnum } from "../../constants/moods";
import { TYPOGRAPHY } from "../../constants/typography";

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  width: ${Dimensions.get("window").width}px;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const InfoWrapper = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const MoodWrapper = styled.View`
  width: 100px;
  height: 115px;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
  padding: 10px;
  justify-content: space-between;
  background-color: ${({ mood, theme }) => theme[MoodEnum[mood]].BACKGROUND};
`;

export const MoodTitle = styled.Text`
  font-weight: bold;
  font-size: ${TYPOGRAPHY.SIZE.TEXT};
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
`;

export const TimeWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
`;

export const Time = styled.Text`
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
  font-weight: bold;
`;

export const ImagesRow = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 15px 15px 0 0;
`;

export const TagsRow = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 20px 20px 0 0;
`;

export const ChipWrapper = styled.View`
  margin-right: 10px;
`;

export const ImagePlaceholderText = styled.Text`
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
  font-weight: bold;
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
`;

export const SwipeAction = styled.View`
  background-color: ${({ theme, isPrimary }) => (isPrimary ? theme.PRIMARY : theme.DELETE)};
  justify-content: center;
  align-items: center;
  width: 150px;
  flex-grow: 1;
`;

export const Divider = styled(PaperDivider)`
  background-color: ${({ theme }) => theme.DISABLED};
`;

export const Chip = styled.Text`
  padding: 5px 12px;
  border-radius: 15px;
  border-width: 0.5px;
  border-color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
  overflow: hidden;
  font-weight: bold;
  background-color: ${({ mood, theme }) => theme[MoodEnum[mood]].BACKGROUND};
  color: ${({ mood, theme }) => theme[MoodEnum[mood]].TEXT};
`;

export const ImagePlaceholder = styled.View`
  border-radius: 10px;
  width: 55px;
  height: 55px;
  margin-right: 10px;
  background-color: ${({ mood, theme }) => theme[MoodEnum[mood]].BACKGROUND};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 10,
  },
})`
  width: 55px;
  height: 55px;
  margin-right: 10px;
`;

export const MoodIcon = styled(Icon).attrs(({ mood, theme }) => ({
  color: theme[MoodEnum[mood]].TEXT
}))`
  margin-bottom: 5px;
`;