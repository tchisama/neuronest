import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fa from "react-native-vector-icons/FontAwesome5"
import F from "react-native-vector-icons/FontAwesome"
import ChatBlob from '../components/ChatBlob';
import ChatBlobUser from '../components/ChatBlobUser';
import axios from "axios";
import TodosContext from '../context/TodosContext';
import AlarmsContext from '../context/AlarmsContext';
const ChatScreen = () => {
    const {todos,setTodos}=useContext(TodosContext)
    const {alarms,setAlarms}=useContext(AlarmsContext)
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
                alarms:${JSON.stringify(alarms)}
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
            if(res.data?.toadd?.length>0){
                setChatData(p=>[...p,
                    {
                        from:"bot-",
                        text:`adding ${res.data.toadd.length} tasks to the todos list`,
                        id:chatData.length
                    }
                ])
            }
            if(res.data?.toupdate?.length>0){
                setChatData(p=>[...p,
                    {
                        from:"bot-",
                        text:`updating ${res.data.toupdate.length} tasks `,
                        id:chatData.length
                    }
                ])
            }
            if(res.data?.todelete?.length>0){
                setChatData(p=>[...p,
                    {
                        from:"bot-",
                        text:`deleting ${res.data.todelete.length} tasks `,
                        id:chatData.length
                    }
                ])
            }

            



            res.data.toadd.forEach(element => {
                if(element.type=="task"){
                    setTodos(p=>[element.add,...p])
                }else{

                    setAlarms(p=>[element.add,...p])
                }
            });

            res.data.toupdate.forEach(element => {
                if(element.type=="task"){
                    setTodos(p=>p.map(todo=>todo.id==element.id?element.new:todo))
                }else{
                    setAlarms(p=>p.map(alarm=>alarm.id==element.id?element.new:alarm))
                }
            });

            res.data.todelete.forEach(element => {
                if(element.type=="task"){
                    setTodos(p=>p.filter(todo=>todo.id!=element.id))
                }else{
                    setAlarms(p=>p.filter(alarm=>alarm.id!=element.id))
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
            msg.from=="user"?
            <ChatBlobUser key={i} text={msg.text}/>
            :msg.from=="bot-"?
            <View key={i} style={tw`flex-row items-center py-1`}>
                <Fa color="#766aff" name="check-circle" size={12}></Fa>
                <Text style={tw`px-2 font-medium text-[#766AFF] `}>{msg.text}</Text>
            </View>
            :<ChatBlob key={i} text={msg.text}/>
        )
    })
}

        </ScrollView>
        <View style={tw`h-16  flex-row bg-white p-1 px-2 shadow-xl`}>
            <TextInput multiline defaultValue={input} onChangeText={(newText)=>setInput(newText)} placeholder='what you want to do ?' style={tw` h-full bg-gray-100 border border-gray-200 flex-1 rounded-xl px-2`}></TextInput> 
            <TouchableOpacity onPress={send} style={tw`p-2 px-4 h-full justify-center items-center `}>
                <F name="send" size={22} color={"#766AFF"}></F>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ChatScreen