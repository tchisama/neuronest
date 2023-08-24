import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fa from "react-native-vector-icons/FontAwesome5"
const ChatScreen = () => {
  return (
    <SafeAreaView  style={tw`bg-white flex-1 `}>

        <View style={tw`p-2 pt-4 bg-white border-b border-b-gray-200`}>
            <Text style={tw`text-white text-4xl text-[#766AFF] font-bold `}>Talk Flow</Text>
        </View>

        <ScrollView style={tw`flex-1 bg-gray-100 rounded-xl px-2`}>
            <View style={tw`mt-10`}></View>

            <View style={tw`gap-x-2 py-2 flex-row`}>
                <View style={tw`gap-1 `}>
                    <View style={tw`h-2 w-2 border-2 border-[#766AFF] rounded-full justify-center items-center`}></View>
                    <View style={tw`h-2 w-2 border-2 border-[#766AFF] rounded-full justify-center items-center`}></View>
                </View>
                <View style={tw`bg-[#766AFF] p-3  flex-1 rounded-xl shadow-sm max-w-[80%]`}>
                    <Text style={tw`text-base font-medium text-white `}>that's great! enjoy your movie night with your family 🍿</Text>
                </View>
            </View>

            <View style={tw`flex-row-reverse w-full gap-x-2 py-2 justify-start`}>
                {/* <View style={tw`h-8 w-8 bg-[#ddd] rounded-full justify-center items-center`}>
                    <Fa name="user-alt" size={18} color="#888"></Fa>
                </View> */}
                <View style={tw`bg-white p-3 mr-2 rounded-xl max-w-[80%] shadow-sm`}>
                    <Text style={tw`text-base font-medium text-gray-700 `}>hello </Text>
                </View>
            </View>

        </ScrollView>
        <View style={tw`h-14  flex-row bg-white p-1 px-2 shadow-xl`}>
            <TextInput placeholder='what you want to do ?' style={tw` h-full bg-gray-100 border border-gray-200 flex-1 rounded-xl px-2`}></TextInput> 
            <TouchableOpacity style={tw`p-2 h-full justify-center items-center `}>
                <Ionic name="send" size={28} color={"#766AFF"}></Ionic>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ChatScreen