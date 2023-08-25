import { PaperProvider as Provider } from "react-native-paper"
import Home from "./components/Home";

export default function App(){
    return (
      <Provider>
          <Home></Home>
      </Provider>
    );
}
