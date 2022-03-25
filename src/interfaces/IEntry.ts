import { MoodEnum } from "../constants/moods";

export type EntryImage = {
  id: string;
  uri: string;
};

export type EntryTag = {
  id: string;
  text: string;
};

export interface IEntry {
  id: string;
  children: any;
  datetime: string;
  mood: MoodEnum;
  images?: EntryImage[];
  tags?: EntryTag[];
}
