import React from 'react';
import { View,
  TouchableHighlight,
  Modal,
  StyleSheet,
  CameraRoll,
  Image,
  Dimensions,
  ScrollView,} from 'react-native';
const util = require('util');
import { Container, Header, Content, Text, Footer, FooterTab, Button, Icon, H1 } from 'native-base';
import styles from './styles';
const { width } = Dimensions.get('window');
export default class uploadPrescription extends React.Component {
  static navigationOptions = {
    title: 'Upload Prescription'
  };

  state = {
    modalVisible: false,
    photos: [],
    index: null,
    uri: '',
    imageSelected: false
  }

  componentWillMount() {
    this.getPhotos();
  }

  render() {
    console.log(this.state.photos);
    var { navigate } = this.props.navigation;
    return(
      <Container>
        <Content>
          <H1 style={styles.headerStyle}>Upload Your Prescription</H1>
            <Button block large style={styles.buttonStyle}>
              <Text>Take Picture</Text>
              <Icon name='camera' />
            </Button>
            <Button
              block
              large
              style={styles.buttonStyle2}
              onPress={() => { this.toggleModal(); this.getPhotos() }}>
              <Text>Open Photo Library</Text>
                <Icon name='image' />
            </Button>
            <Button
              success

              onPress={
              () => navigate('SelectPharmacy', {})
            }>
            <Text>Select Pharmacy</Text>
          </Button>
            <Modal
         animationType={"slide"}
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => console.log('closed')}
       >
         <View style={styles.modalContainer}>
           <ScrollView
             contentContainerStyle={styles.scrollView}>
             {
               this.state.photos.map((p, i) => {
                 return (
                   <TouchableHighlight
                     style={{opacity: i === this.state.index ? 0.3 : 1}}
                     key={i}
                     underlayColor='transparent'
                     onPress={() => this.setIndex(i)}
                   >
                     <Image
                       style={{
                         width: width/3,
                         height: width/3
                       }}
                       source={{uri: p.node.image.uri}}
                     />
                   </TouchableHighlight>
                 )
               })
             }
           </ScrollView>
           <Button
              onPress={this.toggleModal}>
             <Text>close</Text>
           </Button>

           {
             this.state.index !== null  && (
               <View style={styles.shareButton}>
                 <Button
                   onPress={this.share}
                   disabled={this.state.imageSelected ? true : false}>
                   <Text>Select</Text>
                 </Button>
               </View>
             )
           }
         </View>
       </Modal>
       <Image
         style={{width: 50, height: 50}}
         source={{uri: this.state.uri}}
       />
        </Content>
      </Container>
    );
  }

  share = () => {
    this.setState({uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'});
    this.setState({ imageSelected: true });
    this.setState({ modalVisible: !this.state.modalVisible });
  }
  toggleModal = () => {
      this.setState({ modalVisible: !this.state.modalVisible });
    }

    setIndex = (index) => {
        if (index === this.state.index) {
          index = null
        }
        this.setState({ index })
      }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }
}
