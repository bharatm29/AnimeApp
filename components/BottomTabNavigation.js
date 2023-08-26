import { BottomNavigation, MD2Colors, Text } from "react-native-paper";
import { useState } from "react";
import Home from "./Home";
import Search from "./Search";
import Profile from "./Profile";

export default function BottomTabNavigation({ navigation }) {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "home",
            title: "Home",
            focusedIcon: "home-variant",
            unfocusedIcon: "home-variant-outline",
            color: MD2Colors.red900,
        },
        {
            key: "search",
            title: "Search",
            focusedIcon: "card-search",
            unfocusedIcon: "card-search-outline",
        },
        {
            key: "profile",
            title: "Profile",
            focusedIcon: "account-circle",
            unfocusedIcon: "account-circle-outline",
        },
    ]);

    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={({ route, jumpTo }) => {
            switch (route.key) {
                case 'home':
                    return <Home jumpTo={jumpTo} route={route} />;
                case 'search':
                    return <Search navigation={navigation}/>;
                case 'profile':
                    return <Profile />;
            }
        }}
        shifting={true}
        activeColor={MD2Colors.blue300}
        inactiveColor={MD2Colors.blue400}
        barStyle={{ backgroundColor: MD2Colors.blue800 }}
      />
    );
}
