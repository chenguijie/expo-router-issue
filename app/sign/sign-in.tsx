import { Link } from "expo-router";
import { View ,Text, Dimensions} from "react-native";

const {height,width} = Dimensions.get("window");

const signIn = () => {
    console.log(height,width,"height,width");
  return (
    <View style={{width:"100%",height:"100%"}}>
    <View style={{padding: 50, backgroundColor: "#ff000080",width:"100%",height:"100%"}}>
      <View >
      <Link href="/sign/reset-password"><Text style={{fontSize: 18,color: "blue"}}>click and link to reset-password</Text></Link>
      </View>
    </View>
  </View>
  )
};
export default signIn;