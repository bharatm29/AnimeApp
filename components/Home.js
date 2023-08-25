import { Button, MD2Colors, Text } from "react-native-paper";
import { View } from "react-native";

export default function Home({ jumpTo, route }) {
    return (
      <Button buttonColor={MD2Colors.purple400} onPress={() => {
          jumpTo("search");
      }} textColor={MD2Colors.purple50}>Home</Button>
    );
}
