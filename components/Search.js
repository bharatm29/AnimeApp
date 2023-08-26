import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { encode } from "base-64";
import AnimeCard from "./AnimeCard";
import SearchFilter from "./SearchFiter";

export const API_URL = {
    "top": "http://10.0.2.2:4000/anime/top-airing",
    "search": "http://10.0.2.2:4000/anime/search/",
    "genre": "http://10.0.2.2:4000/anime/genre/",
    "details": "http://10.0.2.2:4000/anime/details/",
};

export default function Search({ navigation }) {
    const [animeData, setAnimeData] = useState({});
    const [animeName, setAnimeName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("search");

    function determineURL() {
        let URL = API_URL.top;

        switch (value) {
            case "top": {
                URL = API_URL.top;
                break;
            }
            case "search": {
                URL = API_URL.search + animeName;
                break;
            }
            case "genre": {
                URL = API_URL.genre + animeName;
                break;
            }
            default: {
                URL = API_URL.top;
                break;
            }
        }
        return URL;
    }

    const fetchData = async () => {
        if (value !== "top" && animeName === "") {
            return;
        }
        setIsLoading(true);

        const email = "bharat@123";
        const password = "123";

        const URL = determineURL();

        const headers = new Headers();
        headers.append("Authorization", "Basic " + encode(`${email}:${password}`));

        const res = await fetch(URL, {
            method: "GET",
            headers: headers,
        });

        const data = await res.json();

        setAnimeData(oldData => {
            return data;
        });
        setIsLoading(false);
    };

    return (
      <View style={{ height: "100%" }}>
          <Searchbar onChangeText={setAnimeName} value={animeName} loading={isLoading} onIconPress={() => {
              fetchData(animeName, setAnimeData, setIsLoading);
          }} />
          <SearchFilter value={value} setValue={setValue} />
          <ScrollView>{
              animeData?.animes?.map(anime => {
                  return <AnimeCard navigation={navigation} {...anime}></AnimeCard>;
              })
          }</ScrollView>
      </View>
    );
}
