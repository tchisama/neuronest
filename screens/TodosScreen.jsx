import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fa from "react-native-vector-icons/FontAwesome"
import TodosContext from '../context/TodosContext';

const TodosScreen = () => {
    const {todos,setTodos}=useContext(TodosContext)
  return (
    <SafeAreaView  style={tw` flex-1 bg-white`}>
        <View style={tw`p-2 pt-4 bg-white border-b border-b-gray-200`}>
            <Text style={tw`text-white text-4xl text-[#766AFF] font-bold `}>Task Track</Text>
        </View>
        <ScrollView style={tw`flex-1 px-1 bg-gray-100 rounded-xl flex-1`}>
            <View style={tw`py-5`}>
            </View>

{
    todos.map((todo,i)=>(
            <View key={i} style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl flex-row gap-x-2`}>
                <TouchableOpacity style={tw` p-1`}>
                    <Fa name={todo.done?"check-circle":"circle"} size={25} color="#766AFF"></Fa>
                </TouchableOpacity>
                <Text style={tw`flex-1 py-1 text-base font-medium text-gray-700`}>{todo.name}</Text>
            </View>
    ))
}

        </ScrollView>
    </SafeAreaView>
  )
}

export default TodosScreen