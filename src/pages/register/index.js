import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'

import styles from './styles'

export default function Register() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [nomeEmpresa, setNomeEmpresa] = useState('')
  const [cnpj, setCNPJ] = useState('')

  async function handleSubmit() {
    try {
      if (nome && sobrenome &&
        email && pass && confirmPass &&
        nomeEmpresa && cnpj
      ) {
        if (pass != confirmPass) {
          alert('Senha não coecidem')
          setPass('')
          setConfirmPass('')
        } else {
          alert('safe')
        }
      } else {
        alert('amigo ta faltando coisa ai')
      }
    } catch (err) {
      
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
              value={pass}
              onChangeText={setPass}
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
