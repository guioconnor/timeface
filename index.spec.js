const timeface = require('./index');

describe('timeface', () => {
  describe('00:00', () => {
    describe('with exact match', () => {
      it('shows the right clock', () => {
        const date = new Date('2017-04-25T00:00:00');
        expect(timeface(date)).toBe('🕛');
      });
    });
  });
});
