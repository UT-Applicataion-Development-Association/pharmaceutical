import React from "react";
import { Text, View, Button,StyleSheet, TextInput } from "react-native";

class LoginPage extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
            <Text style={styles.greeting}>Welcome to Varient</Text>
            <TextInput style={styles.textInput}
              placeholder="Username"
            />
            <TextInput style={styles.textInput}
              placeholder="Password"

            />
            <Button title="Sign up!" onPress={() => this.props.navigation.navigate("Landing")} />

            
          </View>
        );
    }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',

  },

  greeting:{
    marginVertical:100,
    fontSize:18,
  },

  textInput :{
    marginVertical:20,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    width: 300,

  },

  title:{
    fontFamily: 'open-sans-bold'
  },

});

export default LoginPage;