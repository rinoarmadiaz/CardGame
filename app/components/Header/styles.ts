import colors from '@utils/colors';
import sizes from '@utils/sizes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes[16],
  },
  stepsTitle: {
    color: colors.white,
    flex: 1,
    textAlign: 'right',
    fontSize: sizes[16],
  },
  stepsValue: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: sizes[32],
  },
});
