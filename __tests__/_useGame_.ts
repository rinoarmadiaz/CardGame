import useGame from '@hooks/useGame';
import { act, renderHook } from '@testing-library/react-hooks';
import expect from 'expect';
describe('Testing useGame hooks', () => {
  it('check if cardList state is exist when game is initialized', () => {
    const { result } = renderHook(useGame);

    // Initializing game
    act(() => {
      result.current.initializeGame();
    });

    expect(result.current.cardList.length).toBeGreaterThan(0);
  });

  it('check if cardlist state changed when user select any card', () => {
    const { result } = renderHook(useGame);

    // Initializing game
    act(() => {
      result.current.initializeGame();
    });

    // User select the card
    act(() => {
      result.current.onCardSelected(1, 1);
    });

    expect(result.current.cardList[0].state).toBe('CLOSED');
  });

  it('check if steps are increasing whenever user select any card', () => {
    const { result } = renderHook(useGame);

    // Initializing game
    act(() => {
      result.current.initializeGame();
    });

    // User select the card
    act(() => {
      result.current.onCardSelected(1, 1);
    });

    expect(result.current.steps).toBeGreaterThan(0);
  });
});
