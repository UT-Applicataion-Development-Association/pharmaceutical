import React from "react";
import { Text, View } from "react-native";

class NewsPage extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>News Page</Text>
            </View>
        );
    }
}

export default NewsPage; 