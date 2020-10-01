import React from "react";
import { Text, View } from "react-native";

class InfoPage extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Information page</Text>
            </View>
        );
    }
}

export default InfoPage; 