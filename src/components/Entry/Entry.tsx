import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "@expo/vector-icons/Feather";
import moment from "moment";
import { IEntry } from "../../types/EntryType";
import { TouchableOpacity, View } from "react-native";
import { Paragraph, Dialog, Portal, Button } from "react-native-paper";
import { truncate } from "lodash";
import {
  Container,
  Image,
  InfoWrapper,
  ImagesRow,
  TagsRow,
  ImagePlaceholder,
  ChipWrapper,
  SwipeAction,
  Divider,
  Chip,
  TimeWrapper,
  MoodWrapper,
  Time,
  MoodTitle,
  MoodIcon,
  ImagePlaceholderText,
} from "./EntryStyled";
import { getMoodIcon, getMoodName } from "../../helpers/moodHelper";
import { useState } from "react";

const SwipeLeft = ({ onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onDelete}>
      <SwipeAction>
        <Icon name="trash-2" size={24} color="white" />
      </SwipeAction>
    </TouchableOpacity>
  );
};

const SwipeRight = ({ onEdit }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onEdit}>
      <SwipeAction isPrimary>
        <Icon name="edit" size={24} color="white" />
      </SwipeAction>
    </TouchableOpacity>
  );
};

type EntryProps = {
  entry: IEntry;
  children: React.ReactNode;
  onEdit: Function;
  onDelete: Function;
  onPress: Function;
};

export const Entry = ({ entry, onEdit, onDelete, onPress }: EntryProps) => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const IMAGES_AMOUNT = 2;
  const TAGS_AMOUNT = 2;
  const images = entry.images?.slice(0, IMAGES_AMOUNT) || [];
  const extraImagesAmount = entry.images ? entry.images.length - IMAGES_AMOUNT : 0;
  const tags = entry.tags?.slice(0, TAGS_AMOUNT) || [];
  const extraTagsAmount = entry.tags ? entry.tags?.length - TAGS_AMOUNT : 0;

  return (
    <Swipeable
      renderLeftActions={() => <SwipeLeft onDelete={() => setIsShowingModal(true)} />}
      renderRightActions={() => <SwipeRight onEdit={onEdit} />}
    >
      <Divider />
      <Container onPress={onPress}>
        <MoodWrapper mood={entry.mood}>
          <View>
            <MoodIcon mood={entry.mood} name={getMoodIcon(entry.mood)} size={24} />
            <MoodTitle mood={entry.mood}>{getMoodName(entry.mood)}</MoodTitle>
          </View>
          <TimeWrapper mood={entry.mood}>
            <Time mood={entry.mood}>{moment(entry.datetime, "DD/MM/YYYY HH:mm").format("HH:mm")}</Time>
          </TimeWrapper>
        </MoodWrapper>
        <InfoWrapper>
          <Paragraph numberOfLines={images?.length > 0 ? 2 : 3}>{entry.children}</Paragraph>
          {images?.length > 0 && (
            <ImagesRow>
              {images?.map((image) => (
                <Image key={image.id} source={{ uri: image.uri }} resizeMode="cover" />
              ))}
              {extraImagesAmount > 0 && (
                <ImagePlaceholder mood={entry.mood}>
                  <ImagePlaceholderText mood={entry.mood}>{`+ ${extraImagesAmount}`}</ImagePlaceholderText>
                </ImagePlaceholder>
              )}
            </ImagesRow>
          )}
          {tags && tags?.length > 0 && (
            <TagsRow>
              {tags?.map((tag) => (
                <ChipWrapper key={tag.id}>
                  <Chip mood={entry.mood}>{truncate(tag.text, { length: 8 })}</Chip>
                </ChipWrapper>
              ))}
              {extraTagsAmount > 0 && (
                <ChipWrapper>
                  <Chip mood={entry.mood}>+{extraTagsAmount}</Chip>
                </ChipWrapper>
              )}
            </TagsRow>
          )}
        </InfoWrapper>
      </Container>
      <Divider />
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
    </Swipeable>
  );
};

export default Entry;
