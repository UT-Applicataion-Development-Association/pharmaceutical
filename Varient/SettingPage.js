import React from "react";

import {Text, Thumbnail, Container, Content, Button, Icon, Toast, Root} from 'native-base'
import {View, Image, StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        textAlign: "center",
        position: 'absolute',
        top: 2
    },
    userImage: {
        margin: 10,
        marginTop: 50,
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "white"
    },
});

class SettingPage extends React.Component {
    state = {
        userName: "Alice",
        userImage: "https://i.pinimg.com/originals/ce/5d/03/ce5d0338d3cb37c097e49e40ca458a49.jpg",
        userAge: 19,
        userPassword: "",
        showToast: false

    }

    render() {
        return (
            <Container style={{alignItems: "center"}}>

                <Image
                    style={styles.userImage}
                    onClick={() => this.changeUserImage()}
                    source={{uri: this.state.userImage,}}>
                </Image>

                <Text>User Name: {this.state.userName}</Text>
                <Text>User Age: {this.state.userAge}</Text>

                <Content>

                    <Button transparent onPress={() => this.changeUserName()}
                            style={{alignSelf: 'center'}}>
                        {/*<Icon name='people' />*/}
                        <Text>Change Name</Text>
                    </Button>
                    <Button transparent onPress={() => this.changeUserAge()}
                            style={{alignSelf: 'center'}}>
                        {/*<Icon name='home' />*/}
                        <Text>Change Age</Text>
                    </Button>
                    <Button transparent onPress={() => this.changePassword()}
                            style={{alignSelf: 'center'}}>
                        {/*<Icon name='lock' />*/}
                        <Text>Change Passward</Text>
                    </Button>

                </Content>
            </Container>

        );
    }

    changeUserName() {
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
                    onPress: username => {
                        this.setState({userName: username})
                    }

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
                    onPress: userAge => {
                        if (!isNaN(userAge)) {
                            this.setState({userAge: userAge})
                            Toast.show({
                                text: "Your Age is Changed",
                                duration: 1000
                            })
                        } else {
                            Alert.alert("Please enter a valid number")
                        }
                    }
                }
            ],
            "plain-text"
        );
        console.log("age changed")
    }

    changeUserImage() {
        this.props.navigation.navigate("Image")
    }

    changePassword = () => {
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
                    onPress: password => this.setState({userPassword: password}
                    )
                }
            ],
            "secure-text"
        );
        console.log("Passward changed")
    }
}


export default SettingPage; 