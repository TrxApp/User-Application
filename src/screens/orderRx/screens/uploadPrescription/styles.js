import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window');

const styles = {
  headerStyle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle2: {
    marginTop: 10,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    width,
    padding: 10,
    bottom: 0,
    left: 0
  }
};

export default styles;
