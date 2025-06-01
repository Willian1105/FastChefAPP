import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4b400',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop:70,
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#000',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
    alignSelf: 'flex-start',
  },
  input: {
    height: 50,
    backgroundColor: '#ffdb58',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 30,
    width: '100%',
  },
  buttonYellow: {
    backgroundColor: '#ffdb58',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    width: '70%',
  },
  buttonTextBlack: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  receitaBox: {
    marginTop: 30,
    backgroundColor: '#ffdb58',
    borderRadius: 8,
    padding: 15,
    width: '100%',

  },
  receitaTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  receitaText: {
    fontSize: 16,
  },
});
