import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import CustomText from '../../components/global/CustomText'

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <CustomText variant='h3'>HomeScreen</CustomText>
    </CustomSafeAreaView>
  )
}

export default HomeScreen