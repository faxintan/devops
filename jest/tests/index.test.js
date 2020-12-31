import { greet, answer } from '../src/index';

describe('Project intergrate jest', () => {
    it('greet', () => {
        expect(greet('Louis')).toBe('hello Louis');
    });

    it('answer', () => {
        expect(answer('Bunny')).toBe('you too, Bunny');
    });
});
