import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome Pavan!!</Text>
        <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}
