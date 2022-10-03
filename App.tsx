import Home from '@screens/Home';
import colors from '@utils/colors';
import sizes from '@utils/sizes';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.grey, paddingTop: sizes[16] },
});

export default App;
