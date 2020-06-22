import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Keyboard,
  Easing
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

import CustomModal from '@components/CustomModal'
import Usuario from '@services/api-usuarios'
import styles from './styles'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default function Login({ navigation }) {

  const [email, setEmail] = useState('mauricio.dantascp@gmail.com')
  const [password, setPassword] = useState('123456')
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState({})

  const [logo] = useState(new Animated.ValueXY({ x: 160, y: 150 }))
  const [isValid, setIsValid] = useState({ error: false, message: '', show: false })

  useEffect(() => {
    keyboardDidShowListerner = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListerner = Keyboard.addListener('keyboardDidHide', keyboardDidHide)    
  }, [])

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 300
      }),
      Animated.timing(logo.y, {
        toValue: 125,
        duration: 300
      })
    ]).start()
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 160,
        duration: 100,
        easing: Easing.linear
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
        easing: Easing.linear
      })
    ]).start()
  }

  const saveAndNavigation = async () => {
    await AsyncStorage.setItem('@AUTH', JSON.stringify(auth))
    await AsyncStorage.setItem('@USUARIO', JSON.stringify(user))

    navigation.navigate('Home')
  }

  const handleLogin = async () => {
    try {
      if (email && password) {
        const body = {
          email,
          password
        }  
        const user = await Usuario.login(body)

        if (user) {
          setAuth(user.data.auth)
          setUser(user.data.usuario)
          saveAndNavigation()
        } else {
          throw new Error(user)
        }
      } else {
        setIsValid({ 
          error: true, 
          message: 'Campo e-mail ou senha não preenchidos', 
          show: true 
        })
      }
    } catch (err) {
      setIsValid({
        error: true,
        message: err.response.data.message,
        show: true
      })
    }
  }
  
  const closed = () => {
    setIsValid({ 
      error: false, 
      message: '',
      show: false 
    })
  }

  const RenderModal = () => {
    if (isValid.show) {
      return <CustomModal props={isValid} closed={() => closed()}/>
    } else {
      return false
    }
  }

  return (
    <DismissKeyboard>      
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require('assets/logo.png')}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />      

          <TouchableOpacity style={styles.btnSubmit} onPress={handleLogin}>
            <Text>
              Acessar
            </Text>
          </TouchableOpacity>

          <Text>Não tem uma conta? </Text>      
          <TouchableOpacity 
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.blueText}>Cadastre-se</Text>        
          </TouchableOpacity>    
        </View>        
        <RenderModal />
      </KeyboardAvoidingView>
   </DismissKeyboard>
  )
}
