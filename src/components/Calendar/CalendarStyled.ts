import styled from "styled-components/native";
import { TYPOGRAPHY } from "../../constants/typography";
import { Button } from "react-native-paper";
import { themeType } from "../../types/themeType";

const getCardBackgroundColor = (isCurrentDay: boolean, isCurrentMonth: boolean, theme: themeType): string => {
  if (isCurrentDay) return theme.PRIMARY;
  return isCurrentMonth ? theme.BACKGROUND : theme.DISABLED;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const Card = styled.Pressable`
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ isCurrentDay, isCurrentMonth, theme }) =>
    getCardBackgroundColor(isCurrentDay, isCurrentMonth, theme)};
  border-color: ${({ isCurrentDay, theme }) => (isCurrentDay ? theme.PRIMARY : theme.CARD)};
  flex: 1;
  border-width: 1px;
  margin: 2px;
  justify-content: center;
  align-items: center;
`;

export const WeekDay = styled.Text`
  padding: 10px 0;
  flex: 1;
  margin: 2px;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;

export const Week = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  padding: 0 8px;
`;

export const YearButton = styled.TouchableOpacity`
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${({ isCurrentYear, theme }) => (isCurrentYear ? theme.PRIMARY : theme.BACKGROUND)};
  border-color: ${({ isCurrentYear, theme }) => (isCurrentYear ? theme.PRIMARY : theme.CARD)};
  border-width: 1px;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 4px;
`;

export const YearText = styled.Text`
  font-size: ${TYPOGRAPHY.SIZE.TEXT};
  font-weight: bold;
  color: ${({ isCurrentYear, theme }) => (isCurrentYear ? theme.BACKGROUND : theme.TEXT)};
`;

export const CardText = styled.Text`
  font-weight: bold;
  color: ${({ isCurrentDay, theme }) => (isCurrentDay ? theme.BACKGROUND : theme.TEXT)};
`;

export const CardListWrapper = styled.View`
  flex-direction: row;
  padding: 0 8px;
  flex: 1;
`;

export const Header = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
`;

export const YearPicker = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 0 4px;
`;

export const Title = styled.Text`
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;

export const Pressable = styled(Button).attrs(({ theme }) => ({
  color: theme.TEXT,
  // mode: "outlined",
}))``;
