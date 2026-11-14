import {Text, View, Image, StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React from "react";

//Create custom component QuizComponent for a picture question with 4 answers
const QuizComponent = ({question, image, opt1, opt2, opt3, opt4, selectedValue, onValueChange}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.question}>{question}</Text>
            <Image source={image} style={styles.image}/>
            <Picker selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    style={styles.picker}>
                <Picker.Item  label={opt1} value={opt1}/>
                <Picker.Item label={opt2} value={opt2}/>
                <Picker.Item label={opt3} value={opt3}/>
                <Picker.Item label={opt4} value={opt4}/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'midnightblue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'royalblue',
        borderRadius: 6,
        padding: 6,
        marginBottom: 8,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 12,
        marginBottom: 8,
    },
    picker: {
        backgroundColor: 'moccasin',
        color: 'black',
    },
});

export default QuizComponent;
