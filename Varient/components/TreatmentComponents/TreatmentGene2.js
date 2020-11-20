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

  treatmentList = () => {
    return ["1. Lamotrigine", "2. Topiramate", "3. Memantine"];
  };
/*
  Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
*/

getImprovedNumber = (symptom) =>{
  //Hardcoded this part for demonstration
  switch (symptom){
    case "1. Lamotrigine": return 2
    case "2. Topiramate": return 9
    case "3. Memantine": return 5
  }
}

getTotalNumber = (symptom) =>{
  switch (symptom){
    case "1. Lamotrigine": return 5
    case "2. Topiramate": return 10
    case "3. Memantine": return 15
  }
}

getPercentage = (symptom) =>{
  return this.getImprovedNumber(symptom)/this.getTotalNumber(symptom);
};

getComment = (symptom) =>{
  // Check this more!!!!!
  if (this.getPercentage(symptom)<0.5){
    return "red";
  }
  return "green";
}

 getGreenWidth = (percentage) =>{
    return 100*percentage;
 };

 getRedWidth = (percentage) =>{
   return 100 - this.getGreenWidth(percentage);
 };
   

  generateTreatmentList = () => (
    <FlatList
      renderItem={(obj) => (<View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text 
        style={{padding: 10,  marginLeft: 35, textDecorationLine: "underline", fontWeight: "bold" }}>
          {obj.item}
          </Text>
          <View style={{ flex:1, flexDirection:"row", marginTop:15 }}>
        <View style={{width: this.getGreenWidth(this.getPercentage(obj.item)), height: 15, backgroundColor: "lime", borderColor:"gray", borderWidth:0.5 }}>
        </View>
        <View style={{width: this.getRedWidth(this.getPercentage(obj.item)), height: 15, backgroundColor: "red", borderColor:"gray", borderWidth:0.5 }}>
          </View>
          </View>
          </View>

          <View style={{}}>
  <Text style = {{padding: 10, marginLeft: 25}}>{this.getImprovedNumber(obj.item)}/{this.getTotalNumber(obj.item)} patients' symptoms has improved </Text>
  <Text style={{padding: 10, color: this.getComment(obj.item)}}>({String(this.getPercentage(obj.item).toFixed(2)*100)+"%"})</Text>
  </View>

          </View>)}
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
            //justifyContent: "space-between",
            margin: 5,
            alignItems: "center",
            backgroundColor: "#A9DAD6",
          }}
        >
          <Text style={{ fontWeight: "bold", paddingRight: 3 }}> {item.title}</Text>
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
            margin: 5,
          }}
        >
          {item.content}
        </Text>
      );
    };
  
  render() {
    return (

      <Container>
        <ScrollView>
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
            style = {{borderColor: "white"}}
          />
          {/*        </Content>   */}
 
        </Content>
        </ScrollView>
      </Container>

    );
  }
}

export default TreatmentGene1;
