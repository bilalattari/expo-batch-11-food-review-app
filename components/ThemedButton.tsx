import {
  TouchableOpacity,
  type TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { ThemedText } from "./ThemedText";


export type ThemedButtonProps = TouchableOpacityProps & {
  txt: string;
  bgColor?: string;
  txtColor?: string;
  my?: number
}

export default function ThemeButton({
  txt,
  bgColor,
  txtColor,
  my = 0,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    style={[styles.default,
    bgColor && { backgroundColor: bgColor },
    my ? { marginVertical: my } : null
    ]}
      {...rest}>
      <ThemedText type="defaultSemiBold" style={{ color: txtColor ? txtColor : "#fff" }}>
        {txt}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 50,
    backgroundColor: "#eb144c",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
  },
});
