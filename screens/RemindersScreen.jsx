import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fa from "react-native-vector-icons/FontAwesome"
import AlarmsContext from '../context/AlarmsContext';

const RemindersScreen = () => {
    const {alarms,setAlarms}=useContext(AlarmsContext)
  return (
    <SafeAreaView  style={tw` flex-1 bg-white`}>
        <View style={tw`p-2 pt-4 bg-white border-b border-b-gray-200`}>
            <Text style={tw`text-white text-4xl text-[#766AFF] font-bold `}>Reminders</Text>
        </View>
        <ScrollView style={tw`flex-1 bg-gray-100 rounded-xl flex-1 px-1`}>
            <View style={tw`py-5`}></View>

{
    alarms.map((alarm,i)=>(
            <View key={i} style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl gap-y-2`}>
                <Text style={tw`text-base font-medium text-gray-500`}>{alarm.name}</Text>
                <View style={tw`flex-row gap-x-2`}>
                <View style={tw`flex-row gap-x-2 items-end`}>
                    <Text style={tw`pt-4  text-5xl font-medium text-[#766AFF]`}>{Math.floor(alarm.time)}:00</Text>
                </View>
                <View style={tw`flex-1 `}>
                    <View style={tw`flex-row items-end flex-1 justify-end`}>
                        <TouchableOpacity style={tw` p-1`}>
                            <Fa name={alarm.on?"toggle-on":"toggle-off"} size={25} color="#766AFF"></Fa>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
    ))
}

{
    alarms.length==0 && 
    <View style={tw`flex-1 justify-center items-center gap-y-4`}>
        <Text style={tw`text-5xl p-2`}>⏰</Text>
        <Text style={tw`text-center w-[80%] mx-auto text-gray-400 font-medium`}>Empty list, full of potential. Time to add tasks and make things happen!</Text>
        <TouchableOpacity style={tw`px-6 py-3 flex-row gap-x-2 items-center justify-center rounded-xl bg-white shadow-sm m-1`}>
            <Text style={tw`text-[#766aff] font-medium text-base`}> add reminder</Text>
        </TouchableOpacity>
    </View>
}


        </ScrollView>
    </SafeAreaView>
  )
}

export default RemindersScreen