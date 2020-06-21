import React, { useState, useEffect } from 'react'
import { 
  Modal, 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image
} from 'react-native'

import styles from './styles'
import Usuarios from '@services/api-usuarios';


export default function CodeVerification({ show, navigation }) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [codeVerify, setCodeVerify] = useState('')
  const [choiceButton, setChoiceButton] = useState(0)
  
  const [textButton, setTextButton] = useState('')

  useEffect(() => {
    setModalVisible(show)
  }, [show])

  async function handleVerify () {
    try {
      if (codeVerify.length === 4) {
        Keyboard.dismiss()
        setChoiceButton(1)
        Usuarios.code({ codeVerify })
          .then(res => {
            setChoiceButton(2)
          }).catch(err => {
            console.log(err)
          })
      } else {
        alert('Preencha com todos os digitos')
      }
    } catch (err) {
      console.log(err)
    }
  }

  function RenderButton () {
    if (choiceButton == 0) {
      return (
        <TouchableOpacity style={styles.confirmCode} onPress={handleVerify}>
          <Text style={styles.textConfirm}>
            VERIFICAR
          </Text>
        </TouchableOpacity>  
      )
    } else if (choiceButton == 1) {
      return (
        <TouchableOpacity style={styles.confirmCode} disabled={true}>
          <Text style={styles.textConfirm}>
            VERIFICANDO...
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login') }>
          <Text style={styles.textConfirm}>
            EFETUAR LOGIN
          </Text>
       </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles.centeredView} >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>            
            <Image source={require('@icons/key.png')} style={styles.key} />
            <Text style={styles.modalText}>Insira seu código de verificação.</Text>
            <TextInput
              placeholder="CÓDIGO DE VERIFICAÇÃO"
              keyboardType="numeric"
              maxLength={4}
              onChangeText={setCodeVerify}
              style={styles.input}
            />
            <RenderButton />
          </View>          
        </View>
      </Modal>
    </View>
  )
}
