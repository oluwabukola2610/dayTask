import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

const notification = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
    <ScrollView
       contentContainerStyle={{ flexGrow: 1 }} 
       className="p-6 gap-y-6"
     >
      <Text>Notification</Text>
    </ScrollView>
  </SafeAreaView>
  )
}

export default notification