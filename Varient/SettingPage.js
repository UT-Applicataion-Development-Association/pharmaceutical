import React from "react";

// import { Text} from 'native-base'
import { View, Image, Text, StyleSheet, Button, Alert } from 'react-native';


const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        textAlign: "center",
        position: 'absolute',
        top: 2
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "white"
    }
});

class SettingPage extends React.Component {

    render() {
        // const userImage = this.props.userImage
        // const userName = this.props.userName
        const userImage = "https://i.pinimg.com/originals/ce/5d/03/ce5d0338d3cb37c097e49e40ca458a49.jpg"
        const userName = "Alice"
        const userAge = 19
        const userPassword = ""
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text style={styles.header}>Setting page</Text>

                <Image
                    style={styles.userImage}
                    onClick={() => this.changeUserImage()}
                    source={{ uri: userImage, }} />

                <Text>User Name: {userName}</Text>
                <Text>User Age: {userAge}</Text>

                <View>
                    <Button
                        title="Change Name"
                        onPress={() => this.changeUserName(userName)} />
                    <Button
                        title="Change Age"
                        onPress={() => this.changeUserAge()} />
                    <Button
                        title="Change Passward"
                        onPress={this.changePassward} />
                </View>
            </View>

        );
    }

    changeUserName(oldUserName) {
        Alert.prompt(
            "Enter UserName",
            "Enter your new UserName",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: username => console.log("OK Pressed, Username: " + username
                    )
                }
            ],
            "plain-text"
        );
        console.log("UserName changed")
    }

    changeUserAge() {
        Alert.prompt(
            "Enter Age",
            "Enter your new UserName",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: username => console.log("OK Pressed, Username: " + username
                    )
                }
            ],
            "plain-text"
        );
        console.log("age changed")
    }

    changeUserImage() {
        console.log("image changed")
    }

    changePassward = () => {
        Alert.prompt(
            "Enter password",
            "Enter your new password",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: password => console.log("OK Pressed, password: " + password
                    )
                }
            ],
            "secure-text"
        );
        console.log("Passward changed")
    }
}


export default SettingPage; 