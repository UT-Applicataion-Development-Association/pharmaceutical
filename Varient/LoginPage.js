import React from "react";
import { Text, View, Button } from "react-native";

class LoginPage extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text style={{ fontSize: 30 }}>Welcome to Varient</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Landing")}
                    title="Login"
                />
            </View>
        );
    }
}

export default LoginPage;