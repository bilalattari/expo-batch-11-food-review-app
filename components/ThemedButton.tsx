import {
  TouchableOpacity,
  type TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { ThemedText } from "./ThemedText";

export default function ThemeButton() {
  return (
    <TouchableOpacity style={styles.default}>
      <ThemedText lightColor="#fff">Continue</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 40,
    backgroundColor: "#eb144c",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
