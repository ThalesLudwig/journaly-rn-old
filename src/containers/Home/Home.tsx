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
  Empty,
} from "./HomeStyled";
import { IEntry } from "../../interfaces/IEntry";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../interfaces/IRootState";
import { removeEntry } from "../../config/entrySlice";
import { ScreenType } from "../../types/ScreenType";
import { Headline, Subheading } from "react-native-paper";

export default function App() {
  const navigation = useNavigation<ScreenType>();
  const { value: entries } = useSelector((state: IRootState) => state.entries);
  const dispatch = useDispatch();

  const [isSearching, setIsSearching] = useState(false);
  const [selectedDay, setSelectedDay] = useState<moment.Moment>(moment().startOf("day"));

  const onDelete = (entry: IEntry): void => {
    const index = entries.findIndex((e) => e.id === entry.id);
    dispatch(removeEntry(index));
  };

  const renderEntry = (entry: IEntry) => (
    <Entry
      onPress={() => navigation.navigate("Entry", { entry })}
      onDelete={() => onDelete(entry)}
      onEdit={() => navigation.navigate("Edit", { entry })}
      entry={entry}
    >
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
      {entries.length === 0 && (
        <Empty>
          <Headline>Nothing to see here.</Headline>
          <Subheading>Add a new entry!</Subheading>
        </Empty>
      )}
      <FlatList data={entries} renderItem={({ item }) => renderEntry(item)} keyExtractor={(item) => item.id} />
    </Container>
  );
}
