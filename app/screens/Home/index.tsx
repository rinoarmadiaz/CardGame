import { View, FlatList, LayoutChangeEvent } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import Header from '@components/Header';
import useGame from '@hooks/useGame';
import Card from '@components/Card';
import { CardModel } from '@model/CardModel';

const Home = () => {
  const { cardList, isCardSelected, steps, initializeGame, onCardSelected } =
    useGame();
  const [flatListHeight, setFlatListHeight] = useState(0);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const onLayoutFlatList = useCallback((e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    setFlatListHeight(height);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: CardModel }) => {
      return (
        <Card
          isCardSelected={isCardSelected}
          state={item.state}
          style={[styles.item, { height: flatListHeight / 4 - 20 }]}
          number={item.number}
          onPress={() => onCardSelected(item.id, item.number)}
        />
      );
    },
    [flatListHeight, isCardSelected, onCardSelected],
  );

  return (
    <View style={styles.container}>
      <Header steps={steps} onRestartPress={initializeGame} />
      <FlatList
        bounces={false}
        numColumns={3}
        data={cardList}
        renderItem={renderItem}
        onLayout={onLayoutFlatList}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Home;
