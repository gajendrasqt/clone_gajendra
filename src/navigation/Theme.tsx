import {useColorScheme} from 'react-native';
import {Colors} from '../constents/Colors';

interface IThemeColors {
  background: string;
  border: string;
  card: string;
  notification: string;
  text: string;
  primary: string;
}

interface ITheme {
  dark: boolean;
  colors: IThemeColors;
}

export const lightTheme: ITheme = {
  dark: false,
  colors: {
    background: Colors.light_background,
    border: Colors.light_border,
    card: Colors.light_card,
    notification: Colors.noti_card_light,
    primary: Colors.themeColor,
    text: Colors.light_text,
  },
};

export const darkTheme: ITheme = {
  dark: true,
  colors: {
    background: Colors.dark_background,
    border: Colors.dark_border,
    card: Colors.dark_card,
    notification: Colors.noti_card_dark,
    primary: Colors.themeColor,
    text: Colors.dark_text,
  },
};
export const useCustomTheme = (): ITheme => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
};
