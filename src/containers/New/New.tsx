import { useState } from "react";
import { FlatList, KeyboardAvoidingView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import MoodCard from "../../components/MoodCard/MoodCard";
import { MoodEnum } from "../../constants/moods";
import { truncate } from "lodash";
import { Container, Title, Subtitle, Padding, TagList, ChipWrapper, Chip, CleanFormButton } from "./NewStyled";
import { useDispatch } from "react-redux";
import { IEntry } from "../../interfaces/IEntry";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { addEntry } from "../../config/entrySlice";
import { ScreenType } from "../../types/ScreenType";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default function New() {
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [moodInput, setMoodInput] = useState(0);
  const [tags, setTags] = useState<string[]>([]);

  const navigation = useNavigation<ScreenType>();
  const dispatch = useDispatch();

  const moods: number[] = [
    MoodEnum.NEUTRAL,
    MoodEnum.HAPPY,
    MoodEnum.SAD,
    MoodEnum.FANTASTIC,
    MoodEnum.ANGRY,
    MoodEnum.GREAT,
    MoodEnum.STRESSED,
  ];

  const onInputTag = (): void => {
    setTags([...tags, tagInput]);
    setTagInput("");
  };

  const onRemoveTag = (index: number): void => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const onCleanForm = (): void => {
    setDescription("");
    setMoodInput(0);
    setTagInput("");
    setTags([]);
  };

  const onSubmit = (): void => {
    const entry: IEntry = {
      children: description,
      datetime: moment().format("DD/MM/YYYY HH:mm"),
      id: uuid(),
      mood: moodInput,
      tags: tags.map((tag) => ({ id: uuid(), text: tag })),
    };
    dispatch(addEntry(entry));
    navigation.navigate("Home");
    onCleanForm();
  };

  return (
    <Container>
      <ScrollView>
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
                    {truncate(tag, { length: 15 })}
                  </Chip>
                </ChipWrapper>
              ))}
            </TagList>
            <Button disabled={description.trim() === ""} mode="contained" onPress={onSubmit}>
              Create Entry
            </Button>
            <CleanFormButton onPress={onCleanForm}>Clean Form</CleanFormButton>
          </Padding>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
}
