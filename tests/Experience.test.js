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

    describe('Managing Experience Entries', () => {
        test('should add multiple Experience entries', () => {
            const entryOne = {
                role: 'Employee',
                company: 'Employer',
                startDate: '2010',
                endDate: '2020',
                description: 'Did some important work',
            };
            const entryTwo = {
                role: 'Worker',
                company: 'Some Employer',
                startDate: '2020',
                endDate: '2025',
                description: 'Did some not so important work',
            };

            experience.addExperienceEntry(entryOne);
            experience.addExperienceEntry(entryTwo);

            expect(experience.getExperienceEntries()).toEqual([entryOne, entryTwo]);
            expect(experience.getExperienceEntries().length).toBe(2);
        });

        test('should update an existing experience entry', () => {
            const entry = {
                role: 'Worker',
                company: 'Some Employer',
                startDate: '2020',
                endDate: '2025',
                description: 'Did some not so important work',
            };

            experience.addExperienceEntry(entry);
            const update = experience.updateExperienceEntry(0, { role: 'Manager' });

            expect(update).toBe(true);
            expect(experience.getExperienceEntries()[0].role)
        });
    });
});
