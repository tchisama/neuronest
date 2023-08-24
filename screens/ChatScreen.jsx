import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fa from "react-native-vector-icons/FontAwesome5"
const ChatScreen = () => {
  return (
    <SafeAreaView  style={tw`bg-[#eee] flex-1 p-2`}>
        <Text style={tw`text-white text-4xl font-bold px-2 py-2 text-[#766AFF]`}>Talk Flow</Text>
        <ScrollView style={tw`flex-1 rounded-xl `}>
            <View style={tw`mt-10`}></View>

            <View style={tw`flex-row  gap-x-2 py-2`}>
                <View style={tw`h-8 w-8 bg-[#766AFF] rounded-full justify-center items-center`}>
                    <Icon name="robot" color="white" size={18}></Icon>
                </View>
                <View style={tw`bg-[#766AFF] p-4 flex-1 rounded-xl max-w-[80%]`}>
                    <Text style={tw`text-base font-medium text-white`}>hello tchisama what are you going to do today , hope its well be a great day for you!</Text>
                </View>
            </View>

            <View style={tw`flex-row-reverse w-full gap-x-2 py-2 justify-start`}>
                <View style={tw`h-8 w-8 bg-[#ddd] rounded-full justify-center items-center`}>
                    <Fa name="user-alt" size={18} color="#888"></Fa>
                </View>
                <View style={tw`bg-white p-4  rounded-xl max-w-[80%]`}>
                    <Text style={tw`text-base font-medium text-gray-700`}>hello </Text>
                </View>
            </View>

        </ScrollView>
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