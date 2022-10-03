import { Animated, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import styles from './styles';
import useAnimation from './useAnimation';

type CardType = {
  number: number;
  state: 'OPENED' | 'CLOSED';
  style: StyleProp<ViewStyle>;
  isCardSelected: boolean;
  onPress: () => void;
};

const Card = (props: CardType) => {
  const { number, state, style, isCardSelected, onPress } = props;
  const { animatedStyle, animatedOpacity } = useAnimation({ state });

  const containerStyle =
    state === 'OPENED'
      ? styles.openedStateContainer
      : styles.closedStateContainer;

  const textStyle =
    state === 'OPENED' ? styles.openedStateText : styles.closedStateText;

  const onCardPress = () => {
    if (state === 'CLOSED' && !isCardSelected) {
      onPress();
    }
  };

  return (
    <Animated.View style={[styles.container, { ...animatedStyle }]}>
      <TouchableOpacity
        disabled={isCardSelected}
        onPress={onCardPress}
        style={[containerStyle, style]}>
        <Animated.Text style={[textStyle, { opacity: animatedOpacity }]}>
          {state === 'OPENED' ? number : '?'}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(Card);
