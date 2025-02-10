import Experience from '../src/classes/Experience';

describe('Experience Class', () => {
    let experience;

    beforeEach(() => {
        experience = new Experience();
    });

    test('should initialize an Experience instance ', () => {
        expect(experience).toBeInstanceOf(Experience);
    });

    test('should initialize with undefined values and an empty experienceEntries array', () => {
        const userExperience = {
            role: undefined,
            company: undefined,
            startDate: undefined,
            endDate: undefined,
            description: undefined,
            experienceEntries: [],
        };

        expect(experience).toMatchObject(userExperience);
    });

    describe('Updating Properties', () => {
        test.each([
            ['role', 'Employee'],
            ['company', 'Employer'],
            ['startDate', 'Month 2020'],
            ['endDate', 'Month 2025'],
            ['description', 'Did some important stuff'],
        ])('should update %s', (property, value) => {
            experience[`update${property.charAt(0).toUpperCase() + property.slice(1)}`](value);
            expect(experience[`get${property.charAt(0).toUpperCase() + property.slice(1)}`]()).toBe(
                value
            );
        });
    });
});
