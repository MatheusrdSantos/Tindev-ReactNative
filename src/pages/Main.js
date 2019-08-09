import React from 'react';
import { View, Image, SafeAreaView, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';

export default function Main(){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={Logo}/>
            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <Image source={{uri: 'https://avatars3.githubusercontent.com/u/42742621?s=460&v=4'}} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});