import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fa from "react-native-vector-icons/FontAwesome"
import AlarmsContext from '../context/AlarmsContext';
import { Agenda, Calendar } from 'react-native-calendars';
import EventsContext from '../context/EventsContext';





  
const CalendarScreen = () => {
    const {events, setEvents} = useContext(EventsContext);

  const renderItem = (item,first) => {
    return (
        <View>
        {first && <View style={tw`h-1 rounded w-full bg-[#00000005] mb-2 mt-8 mr-4 `} />}
        <View style={tw`p-4 mt-2 mr-4 border-l-4 border-[#766AFF] bg-white rounded`}>
            <Text style={tw`text-gray-600 text-base font-medium`}>{item.name}</Text>
            <Text style={tw`text-gray-400 text-right mt-2`}>{item.time.slice(0,5)}</Text>
        </View>
        </View>
    );
  };
  




  return (
    <SafeAreaView  style={tw` flex-1 bg-white`}>
        <View style={tw`p-2 pt-4 bg-white border-b border-b-gray-200`}>
            <Text style={tw`text-white text-4xl  text-[#766AFF] font-bold `}>Calendar</Text>
        </View>
        <Agenda
            items={events}
            theme={{
                selectedDayBackgroundColor: '#766AFF',
                selectedDayTextColor: 'white',
                agendaTodayColor: '#766AFF',
                agendaKnobColor: '#766AFF'
            }}
            selected={"2023-08-26"}
            renderItem={renderItem}
            renderEmptyData={() => (
                <View style={tw`bg-white p-4 m-2 rounded-xl shadow-sm`}>
                  <Text style={tw`text-gray-500 text-base font-medium`}>No events for this day</Text>
                </View>
              )}

        />


    </SafeAreaView>
  )
}

export default CalendarScreen