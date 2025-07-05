import { View, Text } from 'react-native'
import React from 'react'
import Card from './src/components/Card'

export default function App() {
  return (
    <View>
      <Card tittle='fira' image={require('./assets/Logo')}subTittle='100'/>

    </View>
  )
}