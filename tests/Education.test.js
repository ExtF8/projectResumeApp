import Education from '../src/classes/Education';

test('should initialize Education class', () => {
    const education = new Education();

    expect(education).toBeInstanceOf(Education);
});

test('should return Education class with undefined values', () => {
    const education = new Education();

    const userEducation = {
        degree: undefined,
        institution: undefined,
        startDate: undefined,
        endDate: undefined,
        location: undefined,
    };

    expect(education).toMatchObject(userEducation);
});

test('should update degree', () => {
    const education = new Education();

    education.updateDegree('Masters');

    expect(education.getDegree()).toBe('Masters');
});

test('should update institution', () => {
    const education = new Education();

    education.updateInstitution('Some Fancy University');

    expect(education.getInstitution()).toBe('Some Fancy University');
});
