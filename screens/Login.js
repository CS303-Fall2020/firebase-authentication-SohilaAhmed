import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { NavigationActions, navigation } from "react-navigation";
import * as firebase from "firebase";
import { StackActions  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  OnLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };

  OnCreateAccount = () => {
  //   this.props.navigation.navigate("SignUp");
  // };
  this.props.navigation.dispatch(
    StackActions.replace('SignUp', {})
  );
  }
  //   var navActions = navigation.replace({
  //     index: 0,
  //     routes: [
  //       {
  //         name: 'SignUp',
  //       },
  //     ],
  //   })
  //   this.props.navigation.dispatch(navActions);
  // }

  OnForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  }
    //   var navActions = navigation.replace({
    //     index: 0,
    //     routes: [
    //       {
    //         name: 'ForgotPassword',
    //       },
    //     ],
    //   })
    //   this.props.navigation.dispatch(navActions);
    // };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed keyboard");
        }}
      >
        <View style={styles.Login}>
          <Text>Login</Text>
          <View style={{ paddingTop: 20 }} />

          <TextInput
            value={this.state.email}
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          <TextInput
            value={this.state.password}
            placeholder="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          {/* </View> */}
          <View style={{ paddingTop: 20 }} />

          <Button title="Login" onPress={this.OnLogin} />

          <View style={{ paddingTop: 50 }} />

          <Button title="SignUp" color="coral" onPress={() => 
          this.props.navigation.replace('SignUp', {})
          
          } />
      {/* //       () =>
      //     this.props.navigation.replace({
      //       index: 0,
      //       routes: [{ name: 'SignUp' }],
      //     })
      //   }
      // /> */}
          <View style={{ paddingTop: 80 }} />

          <Button
            title="ForgotPassword"
            color="red"
            onPress={this.OnForgotPassword}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  Login: {
    paddingTop: 20
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  m: {
    alignItems: "center"
  }
});
