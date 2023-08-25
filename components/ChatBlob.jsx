import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";

const ChatBlob = ({text}) => {
  return (
            <View style={tw`gap-x-2 py-1 flex-row `}>
                {/* <View style={tw`gap-1 `}>
                    <View style={tw`h-2 w-2 border-2 border-[#766AFF] rounded-full justify-center items-center`}></View>
                    <View style={tw`h-2 w-2 border-2 border-[#766AFF] rounded-full justify-center items-center`}></View>
                </View> */}
                <View style={tw`bg-[#766AFF] p-3  rounded-xl shadow-sm max-w-[80%]`}>
                    <Text style={tw`text-base font-medium text-white `}>{text}</Text>
                </View>
            </View>
  )
}

export default ChatBlob