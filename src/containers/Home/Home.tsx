import moment from "moment";
import Entry from "../../components/Entry/Entry";
import CalendarWeek from "../../components/CalendarWeek/CalendarWeek";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, FlatList } from "react-native";
import { TYPOGRAPHY } from "../../constants/typography";
import {
  Container,
  Header,
  Title,
  HeaderIcon,
  SearchContainer,
  IconsWrapper,
  HeaderButton,
  TextInput,
} from "./HomeStyled";
import { IEntry } from "../../interfaces/IEntry";
import { mockEntries } from "../../mocks/entries";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/RootStackParamList";

type ScreenType = StackNavigationProp<RootStackParamList>;

export default function App() {
  const navigation = useNavigation<ScreenType>();
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDay, setSelectedDay] = useState<moment.Moment>(moment().startOf("day"));

  const renderEntry = (entry: IEntry) => (
    <Entry onEdit={() => navigation.navigate("Edit", { entry })} entry={entry}>
      {entry.children}
    </Entry>
  );

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Header>
          <Title>{moment().format("MMMM")}</Title>
          <IconsWrapper>
            <HeaderButton onPress={() => setIsSearching(!isSearching)}>
              <HeaderIcon name={isSearching ? "x" : "search"} size={TYPOGRAPHY.SIZE.ICON} />
            </HeaderButton>
            <HeaderButton onPress={() => navigation.navigate("Calendar")}>
              <HeaderIcon name="calendar" size={TYPOGRAPHY.SIZE.ICON} />
            </HeaderButton>
          </IconsWrapper>
        </Header>
      </TouchableWithoutFeedback>
      {isSearching && (
        <SearchContainer>
          <TextInput
            autoComplete={false}
            mode="outlined"
            placeholder="Pesquisar"
            left={<TextInput.Icon name="magnify" />}
          />
        </SearchContainer>
      )}
      <CalendarWeek selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      <FlatList data={mockEntries} renderItem={({ item }) => renderEntry(item)} keyExtractor={(item) => item.id} />
    </Container>
  );
}
