import { Link,  } from "expo-router";
import { View,Text } from "react-native";
import { Redirect } from "expo-router";

export function Index() {
  return <Redirect href="/sign/sign-in" />;
}
export default function HomeScreen() {
  return (
    <View style={{padding: 52}}>
      <Index />
      <Link href="/sign/sign-in">
        <Text>link to sign in</Text>
      </Link>
    </View>
  );
}
