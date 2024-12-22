import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../global/CustomText";
import { FONTS } from "../../constents/Fonts";
import { Colors } from "../../constents/Colors";

interface ISocialLoginButtonProps {
  icon?: React.ReactNode;
  text: string;
  onPress: () => void;
}

const SocialLoginButton: React.FC<ISocialLoginButtonProps> = ({
  icon,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container]} activeOpacity={0.8} onPress={onPress}>
      {icon}
      <CustomText variant="h8" fontFamily={FONTS.Medium} style={styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    backgroundColor: Colors.light_background,
    borderWidth: 1,
    borderColor: "#DFDFDF",
  },
  text: {
    marginLeft: 10,
    color: "black",
  },
});

export default SocialLoginButton;
