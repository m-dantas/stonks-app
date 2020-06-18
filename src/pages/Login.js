import React, { useState, useEffect } from 'react'
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

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
    {children}
  </TouchableWithoutFeedback>
)

function Login() {

  const [logo] = useState(new Animated.ValueXY({x: 230, y: 220}))

  useEffect(() => {
    keyboardDidShowListerner = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListerner = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
  })

  function keyboardDidShow () {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 160,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100
      })
    ]).start()
  }

  function keyboardDidHide () {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 230,
        duration: 100,
        easing: Easing.in(Easing.linear)
      }),
      Animated.timing(logo.y, {
        toValue: 220,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
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
            source={require('../../assets/logo.png')}
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
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.blueText}>Cadastre-se</Text>        
          </TouchableOpacity>    
        </View>
      </KeyboardAvoidingView>
   </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%'
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 2,
    width: '90%',
    fontSize: 17,
    padding: 3,
    marginBottom: 5
  },
  btnSubmit: {
    backgroundColor: '#E7BF55',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    height: 40,
    width: '90%',
    marginTop: 7
  },
  btnForget: {
    alignItems: 'flex-end',
    display: 'flex',
    marginTop: 7,
    marginBottom: 30,
    width: '90%'
  },
  blueText: {
    color: '#2F80ED',
  }
})

export default Login
