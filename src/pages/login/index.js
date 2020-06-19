import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Keyboard,
  Easing
} from 'react-native'

import styles from './styles'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default function Login({ navigation }) {
  const [logo] = useState(new Animated.ValueXY({ x: 160, y: 150 }))

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
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={() => {}}
          />      

          <TouchableOpacity style={styles.btnSubmit}>
            <Text>
              Acessar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnForget}>
            <Text style={styles.blueText}>
              Esqueceu sua senha?
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
      </KeyboardAvoidingView>
   </DismissKeyboard>
  )
}
