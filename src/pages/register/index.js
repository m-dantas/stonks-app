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

import Usuario from '@services/api-usuarios'
import styles from './styles'

export default function Register({ navigation }) {

  const [nome, setNome] = useState('Mauricio')
  const [sobrenome, setSobrenome] = useState('Dantas')
  const [email, setEmail] = useState('mauricio.dantascp@gmail.com')
  const [password, setPassword] = useState('coxinha09')
  const [confirmPass, setConfirmPass] = useState('coxinha09')
  const [nomeEmpresa, setNomeEmpresa] = useState('Endeavor')
  const [cnpj, setCNPJ] = useState('12345678')

  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)

  async function handleSubmit() {
    try {
      if (nome && sobrenome &&
        email && password && confirmPass &&
        nomeEmpresa && cnpj
      ) {
        if (password != confirmPass) {
          alert('Senha não coecidem')
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
          console.log('err 1', {
            err
          })
         })
         setShow(true)
        }
      } else {
        alert('amigo ta faltando coisa ai')
      }
    } catch (err) {
      console.log('err 2', err)
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

            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
              <Text style={styles.textButton}>
                Finalizar cadastro.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>          
          <CodeVerification show={show} navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
