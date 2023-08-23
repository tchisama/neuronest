import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from "react-native-vector-icons/MaterialCommunityIcons"

const ChatScreen = () => {
  return (
    <SafeAreaView  style={tw`bg-[#eee] flex-1 p-2`}>
        <Text style={tw`text-white text-4xl font-bold px-2 py-2 text-[#766AFF]`}>Talk Flow</Text>
        <View style={tw`flex-1 rounded-xl`}>
            
        </View>
        <View style={tw`h-12  flex-row`}>
            <TextInput style={tw` h-full bg-gray-200 flex-1 rounded-xl px-2`}></TextInput> 
            <TouchableOpacity style={tw`p-2 h-full justify-center items-center `}>
                <Ionic name="send" size={28} color={"#766AFF"}></Ionic>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ChatScreen