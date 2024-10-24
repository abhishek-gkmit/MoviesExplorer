import { ReactNode, RefObject } from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  View,
} from 'react-native/types';

declare global {
  interface Icon {
    name: string;
    size?: number;
    color?: string;
  }

  interface InputComponentProps extends TextInputProps {
    setValue: (value: string) => void;
    errorMsg?: string;
    label?: string;
    icon?: Icon;
  }

  interface ButtonComponentProps extends TouchableOpacityProps {
    title: string;
    btnTextStyle?: StyleProp<TextStyle>;
    color?: string;
    btnStyle?: StyleProp<ViewStyle>;
  }

  interface IconButtonComponentProps extends TouchableOpacityProps {
    icon: Icon;
    btnStyle?: StyleProp<ViewStyle>;
  }

  interface DropdownItem {
    name: string;
    value: string;
  }

  interface DropdownProps {
    name: string;
    items: DropdownItem[];
    value: string;
    setValue: (value: string) => void;
    errorMsg?: string;
    label?: string;
  }

  interface DropdownBoxModalProps {
    dropdownVisible: boolean;
    name: string;
    setDropdownVisible: (dropdownVisible: boolean) => void;
    children: ReactNode[];
  }

  interface TextWithIconProps {
    icon: Icon;
    text: string;
    textStyle?: StyleProp<Text>;
    containerStyle?: StyleProp<View>;
    children?: ReactNode[];
  }
}
