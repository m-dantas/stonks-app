import React, { useState, useEffect } from 'react'
import {
  View, 
  Text,
  Dimensions
} from 'react-native'

import Chart from '@components/Chart'
import Menu from '@components/Menu'

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'

export default function Home() {

  const [user, setUser] = useState({})

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const user = await AsyncStorage.getItem('@USUARIO')
    setUser(JSON.parse(user))
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }} >
      <View style={styles.header}>
        <Text style={styles.labelNome}>
          Olá, {user.nome}
        </Text>
      </View>      
      <Chart />
      <Menu />
    </View>
  )
}
