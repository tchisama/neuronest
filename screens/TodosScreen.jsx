import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fa from "react-native-vector-icons/FontAwesome5"

const TodosScreen = () => {
  return (
    <SafeAreaView  style={tw`bg-[#eee] flex-1 p-2`}>
        <Text style={tw`text-white text-4xl font-bold px-2 py-2 text-[#766AFF]`}>Task Track</Text>
        <ScrollView style={tw`flex-1 rounded-xl flex-1`}>
            <View style={tw`py-5`}></View>

            <View style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl flex-row gap-x-2`}>
                <TouchableOpacity style={tw` p-1`}>
                    <Fa name="check-circle" size={25} color="#766AFF"></Fa>
                </TouchableOpacity>
                <Text style={tw`flex-1 py-1 text-base font-medium text-gray-700`}>check your code problems</Text>
            </View>
            <View style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl flex-row gap-x-2`}>
                <TouchableOpacity style={tw` p-1`}>
                    <Fa name="circle" size={25} color="#766AFF"></Fa>
                </TouchableOpacity>
                <Text style={tw`flex-1 py-1 text-base font-medium text-gray-700`}>talk to my girl</Text>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default TodosScreen