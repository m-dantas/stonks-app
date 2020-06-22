import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: '92%',    
    minHeight: '50%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    opacity: 1,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  confirmCode: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E7BF55',
    borderWidth: 2,
    borderRadius: 3,
    width: '90%',
    height: '18%'
  },
  modalText: {
    textAlign: 'center'
  }, 
  textConfirm: {
    fontSize: 22,
    color: '#E7BF55'
  },
  icon: {
    width: 73,
    height: 72,
    marginBottom: 15
  }
})