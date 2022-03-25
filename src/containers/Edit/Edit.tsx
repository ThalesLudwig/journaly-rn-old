import { useState } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import MoodCard from "../../components/MoodCard/MoodCard";
import { MoodEnum } from "../../constants/moods";
import { truncate } from "lodash";
import { Container, Title, Subtitle, Padding, TagList, ChipWrapper, Chip } from "./EditStyled";
import { RouteProp, useRoute } from "@react-navigation/native";
import { IEntry } from "../../interfaces/IEntry";

export default function Edit() {
  const {
    params: { entry },
  } = useRoute<RouteProp<{ Edit: { entry: IEntry } }, "Edit">>();

  const [description, setDescription] = useState(entry.children);
  const [tagInput, setTagInput] = useState("");
  const [moodInput, setMoodInput] = useState(entry.mood);
  const [tags, setTags] = useState<string[]>(entry.tags?.map(tag => tag.text) || []);

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
    setTagInput("");
    setTags([...tags, tagInput]);
  };

  const onRemoveTag = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const onSubmit = () => {};

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
            autoComplete={false}
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
            autoComplete={false}
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
          <Button disabled={description.trim() === ''} mode="contained" onPress={onSubmit}>
            Save changes
          </Button>
        </Padding>
      </KeyboardAvoidingView>
    </Container>
  );
}
