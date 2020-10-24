import React from "react";
// import { View, Image, Text, Button, Alert} from 'react-native'
import { View, Image, StyleSheet, Text, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        textAlign: "center",
        position:'absolute',
        top: 2
    },
    userImage: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "white"
    }
});

class SettingPage extends React.Component {

    changeUserName(oldUserName) {
        Alert.alert("{oldUserName} changed ")
        console.log("UserName changed")
    }

    changeUserAge(){
        console.log("age changed")
    }

    changeUserImage(){
        console.log("image changed")
    }

    render() {
        // const userImage = this.props.userImage
        // const userName = this.props.userName
        const userImage = "https://i.pinimg.com/originals/ce/5d/03/ce5d0338d3cb37c097e49e40ca458a49.jpg"
        const userName = "Alice"
        const userAge = 19
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
                    source={{ uri: 'https://i.pinimg.com/originals/ce/5d/03/ce5d0338d3cb37c097e49e40ca458a49.jpg', }} />
                <br/>
                <Text>User Name: {userName}</Text>
                <Text>User Age: {userAge}</Text>
                <br/>
                <View>
                    <Button
                        title="Change Name"
                        onPress={() => this.changeUserName(userName)} />
                    <br/>
                    <Button
                        title="Change Age"
                        onPress={() => this.changeUserAge()} />
                </View>
            </View>
            //         <View style={styles.container}>
            //   <Image
            //     style={styles.logo}
            //     source={{
            //       uri:
            //       "https://i.pinimg.com/originals/ce/5d/03/ce5d0338d3cb37c097e49e40ca458a49.jpg",
            //     }}
            //   />
            // </View>

        );
    }


}

export default SettingPage; 