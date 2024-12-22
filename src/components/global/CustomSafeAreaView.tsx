//import liraries
import React, { Component, FC, ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle, SafeAreaView } from 'react-native';

interface ICustomSafeAreaView{
    children: ReactNode
}

const CustomSafeAreaView:FC<ICustomSafeAreaView> = ({children}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
       padding:10
    } as ViewStyle,
});

export default CustomSafeAreaView;
