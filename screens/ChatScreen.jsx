import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fa from "react-native-vector-icons/FontAwesome5"
import ChatBlob from '../components/ChatBlob';
import ChatBlobUser from '../components/ChatBlobUser';
import axios from "axios";
import TodosContext from '../context/TodosContext';
const ChatScreen = () => {
    const {todos,setTodos}=useContext(TodosContext)
    const [chatData,setChatData]=useState([
        {
            from:"bot",
            text:"Hey ,🚀 superstar! time to make your day amazing! 🌟",
            id:0
        }
    ])
    const [input,setInput]=useState("")
    const send=()=>{
        if(input){
            setChatData(p=>[...p,
                {
                    from:"user",
                    text:input,
                    id:chatData.length
                }
            ])
        }
        let msg = input;
        setInput("")
        axios.post("http://192.168.1.6:8080/chat",{
            message:msg,
            data:`{
                todos:${JSON.stringify(todos)},
                alarms:[]
            }`
        }).then((res)=>{
            console.log(res.data)
            setChatData(p=>[...p,
                {
                    from:"bot",
                    text:res.data?.message,
                    id:chatData.length
                }
            ])

            res.data.toadd.forEach(element => {
                if(element.type=="task"){
                    setTodos(p=>[...p,element.add])
                }
            });
        }).catch(err=>console.log(err))
    }
  return (
    <SafeAreaView  style={tw`bg-white flex-1 `}>

        <View style={tw`p-2 pt-4 bg-white border-b border-b-gray-200`}>
            <Text style={tw`text-white text-4xl  text-[#766AFF] font-bold `}>Talk Flow</Text>
        </View>

        <ScrollView style={tw`flex-1 bg-gray-100 rounded-xl px-2`}>
            <View style={tw`my-6`}>
                <Text style={tw`text-center mx-auto max-w-[80%] text-5xl p-2 text-gray-400`}>🐱</Text>
                <Text style={tw`text-center mx-auto max-w-[80%] text-gray-400`}>Greetings, I'm Obra AI here to assist you. Feel free to share your daily tasks and updates, and I'll seamlessly organize them for you.</Text>
            </View>


{
    chatData.map((msg,i)=>{
        return(
            msg.from=="user"?<ChatBlobUser key={i} text={msg.text}/>:<ChatBlob text={msg.text}/>
        )
    })
}

        </ScrollView>
        <View style={tw`h-16  flex-row bg-white p-1 px-2 shadow-xl`}>
            <TextInput multiline defaultValue={input} onChangeText={(newText)=>setInput(newText)} placeholder='what you want to do ?' style={tw` h-full bg-gray-100 border border-gray-200 flex-1 rounded-xl px-2`}></TextInput> 
            <TouchableOpacity onPress={send} style={tw`p-2 h-full justify-center items-center `}>
                <Ionic name="send" size={28} color={"#766AFF"}></Ionic>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ChatScreen