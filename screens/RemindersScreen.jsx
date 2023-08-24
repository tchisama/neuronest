import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fa from "react-native-vector-icons/FontAwesome"

const RemindersScreen = () => {
  return (
    <SafeAreaView  style={tw` flex-1 bg-white`}>
        <View style={tw`p-2 pt-4 bg-white border-b border-b-gray-200`}>
            <Text style={tw`text-white text-4xl text-[#766AFF] font-bold `}>Reminders</Text>
        </View>
        <ScrollView style={tw`flex-1 bg-gray-100 rounded-xl flex-1`}>
            <View style={tw`py-5`}></View>

            <View style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl gap-y-2`}>
                <Text style={tw`text-base font-medium text-gray-500`}>Workout Reminder</Text>
                <View style={tw`flex-row gap-x-2`}>
                <View style={tw`flex-row gap-x-2 items-end`}>
                    <Text style={tw`pt-4  text-5xl font-medium text-[#766AFF]`}>08:40</Text>
                    <Text style={tw`py-2 text-base font-medium text-[#766AFF]`}>pm</Text>
                </View>
                <View style={tw`flex-1 `}>
                    <View style={tw`flex-row items-end flex-1 justify-end`}>
                        <TouchableOpacity style={tw` p-1`}>
                            <Fa name="toggle-on" size={25} color="#766AFF"></Fa>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
            


            <View style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl gap-y-2`}>
                <Text style={tw`text-base font-medium text-gray-500`}>go to sleep</Text>
                <View style={tw`flex-row gap-x-2`}>
                <View style={tw`flex-row gap-x-2 items-end`}>
                    <Text style={tw`pt-4  text-5xl font-medium text-[#766AFF]`}>11:30</Text>
                    <Text style={tw`py-2 text-base font-medium text-[#766AFF]`}>pm</Text>
                </View>
                <View style={tw`flex-1 `}>
                    <View style={tw`flex-row items-end flex-1 justify-end`}>
                        <TouchableOpacity style={tw` p-1`}>
                            <Fa name="toggle-off" size={25} color="#766AFF"></Fa>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default RemindersScreen