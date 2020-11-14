import React from "react";
import { Container, Content, List, ListItem, Separator, Text, View } from "native-base";

class InfoPage extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <Separator bordered>
                            <Text>About</Text>
                        </Separator>
                        <ListItem onPress={this._onPressListItem}>
                            <Text>Terms and Conditions</Text>
                        </ListItem>
                        <ListItem onPress={this._onPressListItem}>
                            <Text>Privacy Policy</Text>
                        </ListItem>
                        <Separator bordered>
                            <Text>Support</Text>
                        </Separator>
                        <ListItem onPress={this._onPressListItem}>
                            <Text>Contact Varient</Text>
                        </ListItem>
                    </List>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ alignSelf: "center" }}>Version 0.1.0</Text>
                        <Text style={{ alignSelf: "center" }}>Copyright &copy; 2020</Text>
                    </View>
                </Content>
            </Container>
        );
    }

    _onPressListItem() {

    }
}

export default InfoPage;