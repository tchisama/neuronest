import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fa from "react-native-vector-icons/FontAwesome"
import TodosContext from '../context/TodosContext';

const TodosScreen = () => {
    const {todos,setTodos}=useContext(TodosContext)
    const [select,setSelect]=useState()
    const [input,setInput]=useState("")
    useEffect(()=>{
        setSelect(todos.map(()=>({selected:false})))
    },[todos])
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
            <TouchableOpacity key={i} style={tw`bg-white shadow-sm m-1 p-3 items-start rounded-xl flex-row gap-x-2`}>
                <TouchableOpacity onPress={()=>setTodos(p=>p.map((t,ii)=>ii==i?{...t,done:!t.done}:t))} style={tw` p-1`}>
                    <Fa name={todo.done?"check-circle":"circle"} size={25} color="#766AFF"></Fa>
                </TouchableOpacity>
                <Text style={tw`flex-1 py-1 text-base font-medium text-gray-700`}>{todo.name}</Text>
                <TouchableOpacity style={tw`p-2`}>
                    <Fa name={"ellipsis-v"} size={15} color="#766AFF"></Fa>
                </TouchableOpacity>

            </TouchableOpacity>
    )) 
}
{
    todos.length==0 && 
    <View style={tw`flex-1 justify-center items-center gap-y-4`}>
        <Text style={tw`text-5xl p-2`}>🌟</Text>
        <Text style={tw`text-center w-[80%] mx-auto text-gray-400 font-medium`}>Empty list, full of potential. Time to add tasks and make things happen!</Text>
    </View>
}

        </ScrollView>
        <View style={tw`h-16  flex-row bg-white p-1 px-2 shadow-xl`}>
            <TextInput multiline defaultValue={input} onChangeText={(newText)=>setInput(newText)} placeholder='what is your next task?' style={tw` h-full bg-gray-100 border border-gray-200 flex-1 rounded-xl px-2`}></TextInput> 
            <TouchableOpacity onPress={()=>{setTodos(p=>[{name:input,id:Math.random(),done:false},...p]);setInput("")}} style={tw`p-2 px-4 h-full justify-center items-center `}>
                <Fa name="plus" size={22} color={"#766AFF"}></Fa>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default TodosScreen