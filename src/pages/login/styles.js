import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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