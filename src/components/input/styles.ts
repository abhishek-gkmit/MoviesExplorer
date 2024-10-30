import { StyleSheet } from 'react-native';

import colors from '@constants/colors';
import fontSize from '@constants/fonts';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.blackTransparent,
    alignItems: 'center',
    marginBottom: 10,
  },

  inputContainerFocus: {
    borderColor: colors.primary,
  },

  inputContainerError: {
    borderColor: colors.error,
  },

  inputLabel: {
    color: colors.black,
    marginBottom: 5,
  },

  textInput: {
    color: colors.black,
    fontSize: fontSize.fourteen,
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    textAlignVertical: 'center',
  },

  errorMsg: {
    color: colors.error,
    paddingHorizontal: 10,
    marginVertical: 5,
    textAlign: 'left',
    fontSize: fontSize.twelve,
  },
});

export default styles;
