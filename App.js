import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";
export default function App() {
  return (
    <View style={tw`bg-black justify-center items-center flex-1`}>
      <Text>hi tchisama</Text>
      <StatusBar style="light" />
    </View>
  );
}

