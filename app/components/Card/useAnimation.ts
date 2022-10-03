import { Animated } from 'react-native';
import { useCallback, useEffect, useRef } from 'react';

const useAnimation = ({ state }: { state: 'OPENED' | 'CLOSED' }) => {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [animatedOpacity]);

  const fadeOut = useCallback(() => {
    animatedOpacity.setValue(0);
  }, [animatedOpacity]);

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const flipToFront = useCallback(() => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [flipAnimation]);

  const flipToBack = useCallback(() => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [flipAnimation]);

  useEffect(() => {
    switch (state) {
      case 'OPENED':
        flipToFront();
        fadeOut();
        setTimeout(() => {
          fadeIn();
        }, 150);
        break;
      case 'CLOSED':
        flipToBack();
        break;
    }
  }, [fadeIn, fadeOut, flipToBack, flipToFront, state]);

  const animatedStyle = state === 'CLOSED' ? flipToFrontStyle : flipToBackStyle;
  return {
    animatedStyle,
    animatedOpacity,
  };
};

export default useAnimation;
