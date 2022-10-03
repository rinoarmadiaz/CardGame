import { CARD_PAIRS_VALUE } from '@utils/constants';
import expect from 'expect';

describe('Testing constants', () => {
  it('check if randomized card value is in correct 100 - 1 range', () => {
    for (let index = 0; index < 10000; index++) {
      const value = CARD_PAIRS_VALUE();
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(100);
    }
  });
});
