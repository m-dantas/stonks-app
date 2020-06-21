import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#BDBDBD',
    borderRadius: 2,
    width: '100%',
    height: '20%',
    textAlign: 'center',
    fontSize: 22,
    padding: 3,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2
  },
  confirmCode: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7BF55',
    borderRadius: 3,
    width: '90%',
    height: '18%'
  },
  textConfirm: {
    fontSize: 22,
    color: '#fff'
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3BC472',
    borderRadius: 3,
    width: '90%',
    height: '18%'
  },
  key: {
    width: 50,
    height: 50,
    marginBottom: 15
  }
})