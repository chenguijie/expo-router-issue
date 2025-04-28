
import { Stack } from "expo-router";
import { View } from "react-native";


interface WarpProps {
  children: React.ReactNode;
}

export default function Warp({ children }: WarpProps) {
  return (
    <View style={{display: "flex", alignItems: "center", justifyContent:"center",width:"100%",height:"100%", backgroundColor:"#33333380"}}>

<Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{height: "100%", width: "60%", backgroundColor: "#fff"}}>
        <Stack
          screenOptions={{
            animation: "slide_from_right",
            headerBackButtonMenuEnabled: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
            },
            headerShadowVisible: false,
          }}
        >
          <View >
          {children}</View>
        </Stack>
      </View>
    </View>
  )
}