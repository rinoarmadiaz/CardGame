import { View, Text, Button } from 'react-native';
import React, { memo } from 'react';
import styles from './styles';

type HeaderProps = {
  steps: number;
  onRestartPress: () => void;
};

const Header = ({ steps, onRestartPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Button title="Restart" onPress={onRestartPress} />
      <Text style={styles.stepsTitle}>
        {'STEPS: '}
        <Text style={styles.stepsValue}>{steps}</Text>
      </Text>
    </View>
  );
};

export default memo(Header);
