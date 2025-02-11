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
            expect(experience.getExperienceEntries()[0].role);
        });

        test('should return false and log an error when updating an invalid index', () => {
            console.error = jest.fn();

            const update = experience.updateExperienceEntry(3, { role: 'Employee' });

            expect(update).toBe(false);

            expect(console.error).toHaveBeenCalledWith('Invalid index for update experience entry');
        });

        test('should delete experience entry by index', () => {
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

            const result = experience.deleteExperienceEntry(0);

            expect(result).toBe(true);
            expect(experience.getExperienceEntries().length).toBe(1);
            expect(experience.getExperienceEntries()[0]).toEqual(entryTwo);
        });

        test('should return false and log an error when deleting an invalid index', () => {
            console.error = jest.fn();

            const result = experience.deleteExperienceEntry(3);

            expect(result).toBe(false);
            expect(console.error).toHaveBeenCalledWith(
                'Invalid index for deleting experience entry'
            );
        });

        test('should clear all experience entries', () => {
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

            experience.clearExperienceEntries();

            const result = experience.getExperienceEntries();

            expect(result.length).toBe(0);
        });
    });
});
