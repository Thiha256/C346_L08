import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, ScrollView, StyleSheet} from 'react-native';
import QuizComponent from './components/Quiz';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, {padding: 8}]} onChangeText={onChangeText}/>
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    const [name, setName] = useState('');
    const [q1, setQ1] = useState('Alucard');
    const [q2, setQ2] = useState('Miya');
    const [q3, setQ3] = useState('Balmond');
    const [result, setResult] = useState('');
    const [icon, setIcon] = useState('circle-question');
    const [iconColor, setIconColor] = useState('grey');
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Mobile Legends Heroes Quiz</Text>

            <InputBox label="Player Name:" onChangeText={(text) => setName(text)}/>

            <QuizComponent question="Q1. Who is this hero?"
                           image={{uri: 'https://en.esportsku.com/wp-content/uploads/2021/04/Untitled-692.jpg'}}
                           opt1='Alucard' opt2='Layla' opt3='Eudora' opt4='Estes'
                           selectedValue={q1}
                           onValueChange={(value) => setQ1(value)}/>

            <QuizComponent question="Q2. Who is this hero?"
                           image={{uri: 'https://tse3.mm.bing.net/th/id/OIP.ukJEODP20c21JEgPROKPXAHaKe?r=0&pid=Api&h=220&P=0'}}
                           opt1='Miya' opt2='Tigreal' opt3='Saber' opt4='Eudora'
                           selectedValue={q2}
                           onValueChange={(value) => setQ2(value)}/>

            <QuizComponent question="Q3. Who is this hero?"
                           image={{uri: 'https://news.codashop.com/ph/wp-content/uploads/sites/5/2021/09/MLBB-Layla-Blue-Specter.jpg'}}
                           opt1='Balmond' opt2='Estes' opt3='Layla' opt4='Tigreal'
                           selectedValue={q3}
                           onValueChange={(value) => setQ3(value)}/>

            <View style={styles.resultRow}>
            <View style={styles.buttonBox}>
            <Button onPress={()=>{
                let score = 0;
                if (q1 == 'Alucard') {
                    score = score + 1;
                    setIcon('face-sad-tear');
                    setIconColor('firebrick');
                }
                if (q2 == 'Eudora') {
                    score = score + 1;

                }
                if (q3 == 'Layla') {
                    score = score + 1;
                }
                if (score==0){
                    Alert.alert(name + " "+' scored ' + score + ' / 3' +'Try again.😒😒') ;
                    setIcon('face-sad-tear');
                    setIconColor('firebrick');
                }
                else if(score==3){
                    Alert.alert(name+" "+'scored'+score + ' / 3' +'Perfect.😍😍') ;
                    setIcon('trophy');
                    setIconColor('gold');

                }
                else {
                    Alert.alert(name+"  "+'scored'+score + ' / 3' +'Good Try.😁😁');
                    setIcon('thumbs-up');
                    setIconColor('blue');
                }

            }} title='SUBMIT' color='orange'/>
            </View>
            <FontAwesome6 name={icon} size={40} color={iconColor} style={styles.icon} />
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'midnightblue',
        borderRadius: 10,
        padding: 12,
        margin: 10,
        marginTop: 50,
    },
    inputContainer: {
        margin: 10,
    },
    label: {
        fontWeight: 'bold',
        color: 'midnightblue',
        marginBottom: 5,
    },
    input: {
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 8,
        backgroundColor: 'white',
        color: 'black',
    },
    resultRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 80,
    },
    buttonBox: {
        flex: 1,
        maxWidth: 200,
    },
    icon: {
        backgroundColor: 'orange',
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 10,
        padding: 10,
    },
});

export default MyApp;

// ./components/Quiz'