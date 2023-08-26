import { Button, Card, Text, Portal, Dialog, Modal, Appbar, MD2Colors } from "react-native-paper";
import { Linking, ScrollView, View } from "react-native";
import { useState } from "react";
import { encode } from "base-64";
import { API_URL } from "./Search";
import AnimeDetailsCard from "./AnimeDetailsCard";

export default function AnimeCard({ animeId, animeImg, animeTitle, animeUrl, genres, latestEp, navigation }) {
    const [animeData, setAnimeData] = useState({});

    const fetchData = async () => {
        const email = "bharat@123";
        const password = "123";

        const headers = new Headers();
        headers.append("Authorization", "Basic " + encode(`${email}:${password}`));

        const res = await fetch(API_URL.details + animeId, {
            method: "GET",
            headers: headers,
        });

        const data = await res.json();

        setAnimeData(oldData => {
            return data;
        });

        navigation.navigate("details", { animeData: data });
    };

    return (
      <View>
          <Card>
              <Card.Content>
                  <Text variant="titleLarge" onPress={() => Linking.openURL(animeUrl)}>{animeTitle}</Text>
                  <Text variant="bodyMedium">{latestEp}</Text>
              </Card.Content>
              <Card.Cover source={{ uri: animeImg }} />
              <Card.Actions>
                  <Button onPress={() => {
                      fetchData();
                  }}>View Info</Button>
                  <Button onPress={() => {
                  }}>Save to Profile</Button>
              </Card.Actions>
          </Card>
      </View>
    );
}
