import { PaperProvider as Provider } from "react-native-paper"
import BottomTabNavigation from "./components/BottomTabNavigation";

export default function App(){
    return (
      <Provider>
          <BottomTabNavigation></BottomTabNavigation>
      </Provider>
    );
}
