import { CardModel } from '@model/CardModel';
import { CARD_PAIRS_VALUE } from '@utils/constants';
import { shuffleArray } from '@utils/helpers';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

const useGame = () => {
  const [cardList, setCardList] = useState<CardModel[]>([]);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [steps, setSteps] = useState(0);
  const firstSelectedCard = useRef<number>();

  const initializeGame = useCallback(() => {
    let items: CardModel[] = [];
    let randomNumbers: number[] = [];
    for (let index = 0; index < 6; index++) {
      randomNumbers.push(CARD_PAIRS_VALUE());
    }
    for (let index = 0; index < 12; index++) {
      const number =
        randomNumbers[index > 5 ? index - randomNumbers.length : index];
      items.push({
        id: index + 1,
        number: number,
        state: 'CLOSED',
      });
    }
    setCardList(shuffleArray(items));
    setIsCardSelected(false);
    setSteps(0);
    firstSelectedCard.current = undefined;
  }, []);

  const onCardSelected = useCallback(
    (id: number, number: number) => {
      let newList = cardList.map(item => ({
        ...item,
        state:
          item.id === id
            ? item.state === 'CLOSED'
              ? 'OPENED'
              : 'CLOSED'
            : item.state,
      }));
      if (
        firstSelectedCard.current !== undefined &&
        firstSelectedCard.current !== number
      ) {
        console.log('selected number', number);
        setCardList(newList);
        console.log('newlist not mathced', newList);
        setTimeout(() => {
          console.log('reset card!!');
          const listlist = newList.map(item => ({
            ...item,
            state:
              item.number === number ||
              item.number === firstSelectedCard.current
                ? 'CLOSED'
                : item.state,
          }));
          setCardList(listlist);
          setIsCardSelected(false);
          firstSelectedCard.current = undefined;
        }, 2000);
        setIsCardSelected(true);
      } else {
        console.log('first', firstSelectedCard.current);
        console.log('number', number);
        if (firstSelectedCard.current === number) {
          // MATCHED!
          console.log('matche!');
          firstSelectedCard.current = undefined;
        } else {
          firstSelectedCard.current = number;
        }
        setCardList(newList);
      }
      setSteps(prev => prev + 1);
    },
    [cardList, firstSelectedCard],
  );

  useEffect(() => {
    if (cardList.length > 0) {
      const isAllCardOpened =
        cardList.findIndex(item => item.state === 'CLOSED') === -1;
      if (isAllCardOpened) {
        setTimeout(() => {
          Alert.alert(
            'Whohoo you got it!',
            `You finished the game with ${steps} steps`,
            [{ text: 'Play Again', onPress: initializeGame }],
          );
        }, 300);
      }
    }
  }, [cardList, initializeGame, steps]);

  return { cardList, steps, isCardSelected, initializeGame, onCardSelected };
};

export default useGame;
