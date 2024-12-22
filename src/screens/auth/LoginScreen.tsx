import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import React from "react";
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView";
import CustomText from "../../components/global/CustomText";
import { FONTS } from "../../constents/Fonts";
import {
  normalizeModerately,
  screenHeight,
  screenWidth,
} from "../../utils/Scaling";
import LoginLightImg from "../../assets/images/login_animation_light.png";
import LoginDarkImg from "../../assets/images/login_dark_animation.png";
import GoogleIcon from "../../assets/images/google.png";
import SocialLoginButton from "../../components/auth/SocialLoginButton";
import Icon from "react-native-vector-icons/Ionicons";
import TouchableText from "../../components/auth/TouchableText";
import BottomText from "../../components/auth/BottomText";

const LoginScreen = () => {
  const thene = useColorScheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together We Groww
        </CustomText>
        <CustomText
          variant="h7"
          style={styles.subText}
          fontFamily={FONTS.Medium}
        >
          Invest ● Pay ● Loans
        </CustomText>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={thene == "dark" ? LoginDarkImg : LoginLightImg}
          />
        </View>
        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          text="Continue with Google"
          onPress={async () => {}}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={18} color="black" />}
          text="Continue with Apple"
          onPress={async () => {}}
        />
        <TouchableText
          firstText="Use other email ID"
          onPress={() => {}}
          style={styles.touchText}
        />
        <BottomText />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  gimg: {
    height: 20,
    width: 20,
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.46,
    marginVertical: normalizeModerately(30),
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
export default LoginScreen;
