import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Modal
} from 'react-native'

import CodeVerification from '@components/CodeVerification'
import CustomModal from '@components/CustomModal'

import Usuario from '@services/api-usuarios'
import styles from './styles'
import { set } from 'react-native-reanimated'

export default function Register({ navigation }) {

  const [nome, setNome] = useState('Mauricio')
  const [sobrenome, setSobrenome] = useState('Dantas')
  const [email, setEmail] = useState('mauricio.dantascp@gmail.com')
  const [password, setPassword] = useState('coxinha09')
  const [confirmPass, setConfirmPass] = useState('coxinha09')
  const [nomeEmpresa, setNomeEmpresa] = useState('Endeavor')
  const [cnpj, setCNPJ] = useState('12345678')

  const [isValid, setIsValid] = useState({ valid: false, message: '', show: false })
  const [show, setShow] = useState(false)

  const handleSubmit = async () => {
    try {
      if (nome && sobrenome &&
        email && password && confirmPass &&
        nomeEmpresa && cnpj
      ) {
        if (password != confirmPass) {
          setIsValid({ 
            error: true,
            message: 'Senhas não coecidem',
            show: true 
          })
          setPassword('')
          setConfirmPass('')
        } else {
         const body = {
            nome,
            sobrenome,
            email,
            password,
            nomeEmpresa,
            cnpj
          }
         await Usuario.post(body).then(res => {
          setShow(true)
         }).catch(err => {
          throw new Error(err.response.data.msg)
         })
        }
      } else {
        setIsValid({ 
          error: true,
          message: 'Verifique se todos os campos estão preenchidos',
          show: true 
        })
      }
    } catch (err) {
      setIsValid({ 
        error: true, 
        message: err.message, 
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

  const ChoiceModal = () => {
    if (!isValid.error && show) {
      return (
        <View>          
          <CodeVerification show={show} navigation={navigation} />
        </View>
      )
    } else if (isValid.error && isValid.show) {
      return <CustomModal props={isValid} closed={() => closed()}/>
    } else {
      return false
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textTitle}>Cadastro</Text>
            <TextInput
              placeholder="Nome"
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              placeholder="Sobrenome"
              style={styles.input}
              value={sobrenome}
              onChangeText={setSobrenome}
            />
            <TextInput
              placeholder="E-mail"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              style={styles.input}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Senha"
              secureTextEntry={true}
              textContentType="password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TextInput
              placeholder="Confirme a senha"
              secureTextEntry={true}
              textContentType="password"
              value={confirmPass}
              onChangeText={setConfirmPass}
              style={styles.input}
            />

            <View style={styles.lineStyle} />
            <TextInput
              placeholder="Nome da empresa"
              style={styles.input}
              value={nomeEmpresa}
              onChangeText={setNomeEmpresa}
            />
            <TextInput
              placeholder="CNPJ"
              style={styles.input}
              keyboardType="number-pad"
              value={cnpj}
              onChangeText={setCNPJ}
            />

            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleSubmit()}>
              <Text style={styles.textButton}>
                Finalizar cadastro.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ChoiceModal />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
