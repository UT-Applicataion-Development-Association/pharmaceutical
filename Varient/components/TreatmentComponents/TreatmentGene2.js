import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Accordion,
  Text,
} from "native-base";
import { color, greaterThan } from "react-native-reanimated";
import { FlatList, ScrollView } from "react-native-gesture-handler";

class TreatmentGene1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gene: this.props.route.params?.gene2 ?? "not found",
      variant:this.props.route.params?.variant ?? "not found"
    };
  }

  //Hardcoded this function for now

  treatmentList = () => {
    return ["1. Lamotrigine", "2. Topiramate", "3. Memantine"];
  };

  generateTreatmentList = () => (
    <FlatList
      renderItem={(obj) => <Text style={{padding: 10, marginLeft: 35, textDecorationLine: "underline"}}>{obj.item}</Text>}
      data={this.treatmentList()}
    />
  );

  generateDataArray = () => {
    return [
      { title: "Epilepsy", content: this.generateTreatmentList() },
      { title: "Hypotonia", content: this.generateTreatmentList() },
      { title: "Spasticity", content: this.generateTreatmentList() },
    ];
  };

  _renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#A9DAD6",
        }}
      >
        <Text style={{ fontWeight: "600" }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  };

  _renderContent = (item) => {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  };

  render() {
    return (
        <ScrollView>
      <Container>

        <Content padder style={{ backgroundColor: "white" }}>

          {/*       <Content padder style={{ backgroundColor: "white" }}>*/}

          <Text style = {{padding: 20, justifyContent: "center", fontSize: 30}}>
          <Icon type="MaterialCommunityIcons" name="dna" />
            Your <Text style = {{color: "green", fontWeight: "bold", fontSize: 30}}>{this.state.gene}</Text> variant is <Text style = {{color: "green", fontWeight: "bold", fontSize: 30}}>{this.state.variant}</Text>
          </Text>
          <Text style = {{padding: 20, justifyContent: "center", fontSize: 20}}>
            
    Patients with <Text style = {{fontSize: 20, color: "green", fontWeight: "bold"}}>{this.state.gene} {this.state.variant}</Text> variants have these
            symptoms, and have tried these generic medications:
          </Text>

          <Accordion
            dataArray={this.generateDataArray()}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
          {/*        </Content>   */}
 
        </Content>
      </Container>
      </ScrollView>
    );
  }
}

export default TreatmentGene1;
