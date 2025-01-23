import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not found"}} />
            <View style ={styles.container}>
                <Link href='/' style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        fontSize: 20,
        color: "#fff",
        textDecorationLine: "underline",
    }
});