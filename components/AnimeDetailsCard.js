import { Button, Card, MD2Colors, Text } from "react-native-paper";
import { Appearance, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnimeDetailsCard({ route, navigation }) {
    Appearance.setColorScheme("dark")

    const {
        animeTitle,
        type,
        synopsis,
        releasedDate,
        status,
        animeImg,
        genres,
        episodesAvailable,
    } = route.params.animeData;

    navigation.setOptions({ title: animeTitle })

    return (
      <SafeAreaView style={{backgroundColor: MD2Colors.amber900}}>
          <ScrollView>
              <Text>{synopsis}</Text>
          </ScrollView>
      </SafeAreaView>
    );


};
