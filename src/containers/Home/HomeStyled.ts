import styled from "styled-components/native";
import Icon from "@expo/vector-icons/Feather";
import { Button, TextInput as PaperTextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TYPOGRAPHY } from "../../constants/typography";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const Header = styled.View`
  padding: 24px;
  padding-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${TYPOGRAPHY.SIZE.TITLE};
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;

export const SearchContainer = styled.KeyboardAvoidingView`
  padding: 0 24px;
  padding-top: 14px;
`;

export const HeaderIcon = styled(Icon)``;

export const Empty = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 25px;
`;

export const NothingHereImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const TextInput = styled(PaperTextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.PLACEHOLDER,
}))`
  background-color: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.TEXT};
`;

export const HeaderButton = styled(Button).attrs(({ theme }) => ({
  color: theme.TEXT,
}))``;
