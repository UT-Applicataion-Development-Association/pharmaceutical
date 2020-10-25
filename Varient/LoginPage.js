import React from "react";
import { Text, View, Button,StyleSheet, TextInput } from "react-native";

class LoginPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username:null,
        password:null,
      };
    }



    render(){
        return (
            <View style={styles.screen}>
            <Text style={styles.greeting}>Welcome to Varient</Text>
            <TextInput style={styles.textInput}
              placeholder="Username"
              value={this.state.username}
              onChangeText={text => this.setState({username:text})}
            />
            <TextInput style={styles.textInput}
              placeholder="Password"
              value={this.state.password}
              onChangeText={text => this.setState({password:text})}

            />
            <Button title="Sign in!" onPress={() => this.props.navigation.navigate("Landing")} />
            <Button 
              style={{fontSize:13}} 
              color="grey" 
              title="Not a user? Sign up!" 
              onPress={() => this.props.navigation.navigate("Signup")} />

            
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