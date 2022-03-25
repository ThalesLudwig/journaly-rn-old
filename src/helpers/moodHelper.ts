import { MoodEnum } from "../constants/moods";

export const getMoodName = (mood: MoodEnum): string => {
  switch (mood) {
    case MoodEnum.ANGRY:
      return "Angry";
    case MoodEnum.FANTASTIC:
      return "Fantastic";
    case MoodEnum.GREAT:
      return "Great";
    case MoodEnum.HAPPY:
      return "Happy";
    case MoodEnum.NEUTRAL:
      return "Neutral";
    case MoodEnum.SAD:
      return "Sad";
    case MoodEnum.STRESSED:
      return "Stressed";
    default:
      return "Neutral";
  }
};

export const getMoodIcon = (mood: MoodEnum) => {
  switch (mood) {
    case MoodEnum.ANGRY:
      return "angry";
    case MoodEnum.FANTASTIC:
      return "grin-beam";
    case MoodEnum.GREAT:
      return "grin";
    case MoodEnum.HAPPY:
      return "smile";
    case MoodEnum.NEUTRAL:
      return "meh";
    case MoodEnum.SAD:
      return "frown";
    case MoodEnum.STRESSED:
      return "tired";
    default:
      return "meh";
  }
};
