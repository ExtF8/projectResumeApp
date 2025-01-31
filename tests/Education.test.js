import Education from '../src/classes/Education';

test('should initialize Education class', () => {
    const education = new Education();

    expect(education).toBeInstanceOf(Education);
});
