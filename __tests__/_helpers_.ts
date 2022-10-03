import { shuffleArray } from '@utils/helpers';
import expect from 'expect';

describe('Testing helpers', () => {
  const array = [1, 2, 3];
  it('check if array is really shuffled, value should not be the same', () => {
    expect(
      JSON.stringify(shuffleArray(array)) !== JSON.stringify(array),
    ).toBeFalsy();
  });
});
