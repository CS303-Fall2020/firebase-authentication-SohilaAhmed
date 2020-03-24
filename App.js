import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from './config/Firebase';
import * as firebase from 'firebase';
import Navigator from './routes/homeStack';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // isAuthenticationReady: false,
      // isAuthenticated: false
     };
    if(!firebase.apps.length){
     firebase.initializeApp(Firebase.FirebaseConfig);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  } 

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user})
  }


  render(){
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    // <View>
    // {(this.state.isAuthenticated) ? <Main /> : <Navigator /> }
    // </View>
    <Navigator />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
