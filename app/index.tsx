import { ThemedText } from "@/components/ThemedText";
import { Image, StyleSheet, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={{ flex: 1 }}
          source={{
            uri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <ThemedText align="center" type="title">
            Find Best Restaurant
          </ThemedText>
          <ThemedText style={styles.desc} align="center" type="subtitle">
            In Our App you will find best restaurants in your area with user
            reviews.
          </ThemedText>
        </View>
        <ThemedText type="link">Login to Continue</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: { flex: 1, justifyContent: "space-around", padding: 15 },
  topContainer: { flex: 1, backgroundColor: "orange" },
  desc: { marginTop: 10, lineHeight: 27 },
});
