import { Dimensions } from "react-native";

export default {
  ScreenX: Dimensions.get("window").width,
  ScreenY: Dimensions.get("window").height,
  Sizes: {
    Title: 23,
    Subtitle: 20,
    Normal: 18,
    Medium: 16,
    Small: 12,
  },
  Avatar: {
    Normal: 100,
  },
};
