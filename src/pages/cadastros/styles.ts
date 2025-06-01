import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4b400'
  },
  boxTop: {
    height: Dimensions.get('window').height / 5,
    width: '50%',
    backgroundColor: '#f4b400',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxMid: {
    height: Dimensions.get('window').height / 3,  // aumentei para caber os 3 inputs confortavelmente
    width: '90%',
    backgroundColor: '#f4b400',
    paddingHorizontal: 30
  },
  boxBottom: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    backgroundColor: '#f4b400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 22
  },
  titleInput: {
    marginLeft: 5,
    marginTop: 20
  },
  BoxInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 1,
    flexDirection: 'row',
    backgroundColor: '#ffdb58',
    borderRadius: 8,
    paddingHorizontal: 8
  },
  input: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffdb58',
    borderRadius: 8,
  },
  button: {
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffdb58',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10
  },
  textBottom: {
    fontSize: 16,
  },
  textBottomCreate: {
    fontSize: 17,
    color: 'blue',
  }
});
