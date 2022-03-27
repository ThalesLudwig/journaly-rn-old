import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TYPOGRAPHY } from "../../constants/typography";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const Content = styled.View`
  padding: 0 24px 24px 24px;
`;

export const Header = styled.View`
  padding: 24px;
  padding-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${TYPOGRAPHY.SIZE.TITLE};
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT}
`;

export const SwitchWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;