import styled from "styled-components/native";

export const CardWrapper = styled.Pressable`
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${({ isCurrentDay, theme }) => (isCurrentDay ? theme.PRIMARY : theme.BACKGROUND)};
  min-width: 45px;
  flex: 1;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CardText = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ isCurrentDay, theme }) => (isCurrentDay ? theme.BACKGROUND : theme.TEXT)};
`;

export const CardListWrapper = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;