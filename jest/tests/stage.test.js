import { stageTest } from '../src/stage';

describe('Test how the jest work in staged', () => {
    it('test one', () => {
        expect(stageTest()).toBe('test');
    });
});
