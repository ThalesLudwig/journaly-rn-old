import { MoodEnum } from "../constants/moods";
import { IEntry, EntryImage, EntryTag } from "../interfaces/IEntry";

const tags: EntryTag[] = [
  { id: "1", text: "Lorem" },
  { id: "2", text: "Enean congue" },
  { id: "3", text: "Donec" },
];

export const mockEntries: IEntry[] = [
  {
    id: "1",
    datetime: "2022-02-17T14:08:01",
    mood: MoodEnum.ANGRY,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, nulla egestas pulvinar iaculis, augue leo sodales odio.",
  },
  {
    id: "2",
    datetime: "2022-02-11T04:55:01",
    mood: MoodEnum.FANTASTIC,
    children: "Morbi rhoncus, nulla egestas pulvinar iaculis, augue leo sodales odio.",
    tags: [tags[0], tags[1]],
  },
  {
    id: "3",
    datetime: "2022-01-23T23:01:01",
    mood: MoodEnum.GREAT,
    children:
      "In auctor tincidunt tristique. Aliquam fermentum et quam non commodo. Enean congue pretium consequat. Aenean nec porttitor ante, quis aliquet erat.",
  },
  {
    id: "4",
    datetime: "2022-01-18T18:32:01",
    mood: MoodEnum.HAPPY,
    children: "Enean congue pretium consequat. Aenean nec porttitor ante, quis aliquet erat.",
  },
  {
    id: "5",
    datetime: "2022-01-10T12:48:01",
    mood: MoodEnum.NEUTRAL,
    children:
      "Donec quis ante elementum est condimentum accumsan sed vel erat. Donec ultricies euismod hendrerit. Nam dictum est vel sagittis condimentum. Aenean lobortis, erat id consequat fringilla.",
    tags: [tags[1]],
  },
  {
    id: "6",
    datetime: "2022-01-10T12:48:01",
    mood: MoodEnum.SAD,
    children:
      "Donec quis ante elementum est condimentum accumsan sed vel erat. Donec ultricies euismod hendrerit. Nam dictum est vel sagittis condimentum. Aenean lobortis, erat id consequat fringilla. Donec quis ante elementum est condimentum accumsan sed vel erat. Donec ultricies euismod hendrerit. Nam dictum est vel sagittis condimentum. Aenean lobortis, erat id consequat fringilla. Donec quis ante elementum est condimentum accumsan sed vel erat. Donec ultricies euismod hendrerit. Nam dictum est vel sagittis condimentum. Aenean lobortis, erat id consequat fringilla.",
  },
  {
    id: "7",
    datetime: "2022-01-10T12:48:01",
    mood: MoodEnum.STRESSED,
    children:
      "Donec quis ante elementum est condimentum accumsan sed vel erat. Donec ultricies euismod hendrerit. Nam dictum est vel sagittis condimentum. Aenean lobortis, erat id consequat fringilla.",
    tags,
  },
];
