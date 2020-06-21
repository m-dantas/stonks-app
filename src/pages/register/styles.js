import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  textTitle: {
    alignSelf: 'flex-start',
    fontSize: 27,
    padding: 15
  },
  textButton: {
    color: '#FFF'
  },
  lineStyle:{
    width: '90%',
    borderRadius: 5,
    borderWidth: 0.7,
    borderBottomColor:'#000',
    opacity: 0.3,
    margin: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: '#BDBDBD',
    borderRadius: 2,
    width: '90%',
    fontSize: 21,
    padding: 7,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2
  },
  btnSubmit: {
    backgroundColor: '#3BC472',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    height: 40,
    width: '90%',
    marginTop: 7
  }
})