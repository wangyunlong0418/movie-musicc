import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Prompt from '../../components/Model/prompt';

@inject('movieStore')
@observer
class Location extends Component {
  showAlert = () => {
    Alert.alert('Alert Title', 'dsdsd', [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
      {text: 'OK', onPress: () => console.log('OK Pressed!')},
    ]);
  };

  onClickOk = value => {
    const {movieStore} = this.props;
    movieStore.updateCity(value);
    movieStore.handleModal('locationmodal', false);
  };

  render() {
    const {movieStore} = this.props;
    const {city, modal} = movieStore;
    const {locationmodal} = modal;
    return (
      <View style={styles.locationBox}>
        <EvilIcons name="location" size={24} />
        <Text style={styles.text}>正在上映的电影-{city}</Text>
        <View style={styles.refreshBox}>
          <MaterialCommunityIcons name="refresh" size={24} color="#4a82ff" />
        </View>
        <TouchableOpacity
          onPress={() => {
            movieStore.handleModal('locationmodal', true);
          }}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={20}
            color="#4a82ff"
          />
        </TouchableOpacity>
        <Prompt
          visible={locationmodal}
          dialogTitle="城市选择"
          onCancel={() => {
            movieStore.handleModal('locationmodal', false);
          }}
          onOk={this.onClickOk}>
          111
        </Prompt>
      </View>
    );
  }
}

export default Location;

const styles = StyleSheet.create({
  locationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  refreshBox: {
    marginLeft: 14,
    paddingRight: 14,
  },
  text: {
    fontSize: 14,
    color: '#323233',
  },
});
