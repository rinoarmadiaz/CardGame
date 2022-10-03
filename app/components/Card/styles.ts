import colors from '@utils/colors';
import sizes from '@utils/sizes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  closedStateContainer: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes[8],
    borderColor: colors.white,
    borderWidth: sizes[4],
  },
  openedStateContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes[8],
    borderWidth: sizes[4],
    borderColor: colors.white,
  },
  closedStateText: {
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: sizes[32],
  },
  openedStateText: {
    textAlignVertical: 'center',
    color: colors.black,
    fontSize: sizes[32],
    // transform: [
    //   {
    //     rotateY: '180deg',
    //   },
    // ],
  },
});
