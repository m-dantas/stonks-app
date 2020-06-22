import React, { useState, useEffect } from 'react'
import { 
  Modal, 
  View, 
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './styles'

export default function CustomModal(props) {
  const { show, error, message } = props['props']
  
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setModalVisible(show)
  }, [])

  function closeModal () {
   setModalVisible(false)
   props.closed(true)
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
            <Image 
              source={
                !error ? require('@icons/success.png') : require('@icons/error.png')
              } 
              style={styles.icon} 
            />
            
            <Text style={styles.modalText}>
              {message}             
            </Text>
            <TouchableOpacity style={styles.confirmCode} onPress={() => closeModal()}>
              <Text style={styles.textConfirm}>
                Fechar
              </Text>
            </TouchableOpacity>  
          </View>          
        </View>
      </Modal>
    </View>
  )
}
