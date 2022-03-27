import { useState } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import MoodCard from "../../components/MoodCard/MoodCard";
import { MoodEnum } from "../../constants/moods";
import { truncate } from "lodash";
import { Container, Title, Subtitle, Padding, TagList, ChipWrapper, Chip } from "./EditStyled";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { EntryTag, IEntry } from "../../interfaces/IEntry";
import { ScreenType } from "../../types/ScreenType";
import { useDispatch } from "react-redux";
import moment from "moment";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { updateEntry } from "../../config/entrySlice";

export default function Edit() {
  const {
    params: { entry },
  } = useRoute<RouteProp<{ Edit: { entry: IEntry } }, "Edit">>();
  const navigation = useNavigation<ScreenType>();
  const dispatch = useDispatch();

  const [description, setDescription] = useState(entry.children);
  const [tagInput, setTagInput] = useState("");
  const [moodInput, setMoodInput] = useState(entry.mood);
  const [tags, setTags] = useState<EntryTag[]>(entry.tags || []);

  const moods: number[] = [
    MoodEnum.NEUTRAL,
    MoodEnum.HAPPY,
    MoodEnum.SAD,
    MoodEnum.FANTASTIC,
    MoodEnum.ANGRY,
    MoodEnum.GREAT,
    MoodEnum.STRESSED,
  ];

  const onInputTag = () => {
    setTags([...tags, { id: uuid(), text: tagInput }]);
    setTagInput("");
  };

  const onRemoveTag = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const onSubmit = () => {
    const updatedEntry: IEntry = {
      children: description,
      datetime: moment().format("DD/MM/YYYY HH:mm"),
      id: entry.id,
      mood: moodInput,
      tags,
    };
    dispatch(updateEntry(updatedEntry));
    navigation.goBack();
  };

  return (
    <Container>
      <KeyboardAvoidingView>
        <Padding>
          <Title>How are you feeling?</Title>
        </Padding>
        <FlatList
          style={{ flexGrow: 0, marginStart: 24 }}
          horizontal
          data={moods}
          showsHorizontalScrollIndicator={false}
          renderItem={(mood) => (
            <MoodCard onPress={() => setMoodInput(mood.item)} isSelected={mood.item === moodInput} mood={mood.item} />
          )}
          keyExtractor={(mood) => mood.toString()}
        />
        <Padding>
          <Title>How is your day?</Title>
          <TextInput
            placeholder="No pressure!"
            mode="outlined"
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
          />
          <Title>Tags</Title>
          <Subtitle>It helps to keep things organized.</Subtitle>
          <TextInput
            placeholder="#"
            mode="outlined"
            value={tagInput}
            onChangeText={setTagInput}
            returnKeyType="done"
            onSubmitEditing={onInputTag}
          />
          <TagList>
            {tags.map((tag, index) => (
              <ChipWrapper key={index}>
                <Chip onClose={() => onRemoveTag(index)} mood={moodInput}>
                  {truncate(tag.text, { length: 15 })}
                </Chip>
              </ChipWrapper>
            ))}
          </TagList>
          <Button disabled={description.trim() === ""} mode="contained" onPress={onSubmit}>
            Save changes
          </Button>
        </Padding>
      </KeyboardAvoidingView>
    </Container>
  );
}
