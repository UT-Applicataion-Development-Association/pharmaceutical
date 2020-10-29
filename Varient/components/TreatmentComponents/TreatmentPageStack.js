import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import TreatmentPage from "./TreatmentPage";
import TreatmentGene1 from "./TreatmentGene1";
import TreatmentGene2 from "./TreatmentGene2";

const TreatmentStack = createStackNavigator();

export default function TreatmentPageStack (){
    return(

            <TreatmentStack.Navigator initialRouteName="SelectPage">
                <TreatmentStack.Screen options={{ title: 'Variant' }} name="SelectPage" component={TreatmentPage}/>
                <TreatmentStack.Screen options={{ title:"Tried Treatments" }} name="Gene1" component={TreatmentGene1}/>
                <TreatmentStack.Screen options={{ title:"Tried Treatments" }} name="Gene2" component={TreatmentGene2}/>
            </TreatmentStack.Navigator>
    )
}

