import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import TreatmentPage from "./TreatmentPage";
import TreatmentGene1 from "./TreatmentGene1";
import TreatmentGene2 from "./TreatmentGene2";

const TreatmentNavStack = createStackNavigator();

export default function TreatmentPageStack (){
    return(

            <TreatmentNavStack.Navigator initialRouteName="SelectPage">
                <TreatmentNavStack.Screen options={{ headerTitle: 'Variant' }} name="SelectPage" component={TreatmentPage}/>
                <TreatmentNavStack.Screen options={{ headerTitle:"Tried Treatments" }} name="Gene1" component={TreatmentGene1}/>
                <TreatmentNavStack.Screen options={{ headerTitle:"Tried Treatments" }} name="Gene2" component={TreatmentGene2}/>
            </TreatmentNavStack.Navigator>
    )
}

