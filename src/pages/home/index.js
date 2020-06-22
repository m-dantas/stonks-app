import React, { useState, useEffect } from 'react'
import {
  View, 
  Text
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {

  const [user, setUser] = useState({})

  useEffect(() => {
    getUser()
  },)

  const getUser = async () => {
    const user = await AsyncStorage.getItem('@USUARIO')
    setUser(JSON.parse(user))
  }

  return (
    <View>
      <Text>{user.nome}</Text>
    </View>
  )
}
