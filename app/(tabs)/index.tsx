import { Link,  } from "expo-router";
import { View,Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{padding: 52}}>
      <Link href="/sign/sign-in">
        <Text>link to sign in</Text>
      </Link>
    </View>
  );
}
