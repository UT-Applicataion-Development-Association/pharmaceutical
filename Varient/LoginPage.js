import React from "react";
import { Text, View, Button } from "react-native";
import AuthContext from "./contexts/AuthContext";

class LoginPage extends React.Component {
    static contextType = AuthContext;

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
                    onPress={() => this.context.signIn({})}
                    title="Login"
                />
            </View>
        );
    }
}

export default LoginPage;