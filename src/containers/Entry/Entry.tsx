import MoodCard from "../../components/MoodCard/MoodCard";
import { truncate } from "lodash";
import {
  Container,
  Title,
  Subtitle,
  Padding,
  TagList,
  ChipWrapper,
  Chip,
  DeleteButton,
  EditButton,
} from "./EntryStyled";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { IEntry } from "../../interfaces/IEntry";
import { ScreenType } from "../../types/ScreenType";
import { IRootState } from "../../interfaces/IRootState";
import { useDispatch, useSelector } from "react-redux";
import { Paragraph, Dialog, Portal, Button } from "react-native-paper";
import { useState } from "react";
import { removeEntry } from "../../config/entrySlice";

export default function Entry() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const { params } = useRoute<RouteProp<{ Edit: { entry: IEntry } }, "Edit">>();
  const navigation = useNavigation<ScreenType>();
  const { value: entries } = useSelector((state: IRootState) => state.entries);
  const dispatch = useDispatch();

  const entry = entries.find((entry) => entry.id === params.entry.id) || params.entry;

  const onDelete = (): void => {
    const index = entries.findIndex((e) => e.id === entry.id);
    dispatch(removeEntry(index));
    navigation.navigate("Journal");
  };

  return (
    <Container>
      <Padding>
        <Title>How are you feeling?</Title>
        <MoodCard isSelected={false} onPress={() => {}} mood={entry.mood} />
        <Title>How is your day?</Title>
        <Subtitle>{entry.children}</Subtitle>
        <Title>Tags</Title>
        <TagList>
          {entry.tags?.map((tag, index) => (
            <ChipWrapper key={index}>
              <Chip mood={entry.mood}>{truncate(tag.text, { length: 15 })}</Chip>
            </ChipWrapper>
          ))}
        </TagList>
        <EditButton onPress={() => navigation.navigate("Edit", { entry })}>Edit</EditButton>
        <DeleteButton onPress={() => setIsShowingModal(true)}>Delete</DeleteButton>
        <Portal>
          <Dialog visible={isShowingModal} onDismiss={() => setIsShowingModal(false)}>
            <Dialog.Title>Delete this entry?</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Do you really wish to delete this entry? This action can not be reverted.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => onDelete()}>Yes, delete</Button>
              <Button onPress={() => setIsShowingModal(false)}>No, cancel.</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Padding>
    </Container>
  );
}
