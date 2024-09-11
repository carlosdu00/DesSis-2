import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const name = "Prof. Felipe Becker Nunes";

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Favicon.ico.png" }}
        style={{ width: 250, height: 250 }}
      />

      <Text style={styles.title}>Hello World!</Text>
      <Text>Meu primeiro App!</Text>

      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
  },
});