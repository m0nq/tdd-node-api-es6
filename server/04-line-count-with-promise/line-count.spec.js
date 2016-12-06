import {lineCount} from './line-count';

describe('the line-count-with-promise canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  describe('line count can be checked', () => {
    const filespec = 'server/03-line-count-with-callback/line-count.js';

    it('with the done parameter like with callback', done => {
      const receiveCount = count => {
        count.should.equal(13);
      };

      lineCount(filespec).then(receiveCount);
    });

    it('by returning the promise after .then');

    it('by using eventually or fulfilledWith');
  });
});