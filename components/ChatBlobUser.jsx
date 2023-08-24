
import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";

const ChatBlobUser = ({text}) => {
  return (
            <View style={tw`flex-row-reverse w-full gap-x-2 py-1 justify-start`}>
                {/* <View style={tw`h-8 w-8 bg-[#ddd] rounded-full justify-center items-center`}>
                    <Fa name="user-alt" size={18} color="#888"></Fa>
                </View> */}
                <View style={tw`bg-white p-3 mr-2 rounded-xl max-w-[80%] shadow-sm`}>
                    <Text style={tw`text-base font-medium text-gray-700 `}>{text}</Text>
                </View>
            </View>
  )
}

export default ChatBlobUser