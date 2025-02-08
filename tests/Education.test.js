import Education from '../src/classes/Education';

describe('Education Class', () => {
    let education;

    beforeEach(() => {
        education = new Education();
    });

    test('should initialize an Education instance', () => {
        expect(education).toBeInstanceOf(Education);
    });

    test('should initialize with undefined values and an empty educationEntries array', () => {
        const userEducation = {
            degree: undefined,
            institution: undefined,
            startDate: undefined,
            endDate: undefined,
            location: undefined,
            educationEntries: [],
        };

        expect(education).toMatchObject(userEducation);
    });

    describe('Updating Properties', () => {
        test.each([
            ['degree', 'Masters'],
            ['institution', 'Some Fancy University'],
            ['startDate', 'Month 2000'],
            ['endDate', 'Month 2004'],
            ['location', 'Europe'],
        ])('should update %s', (property, value) => {
            education[`update${property.charAt(0).toUpperCase() + property.slice(1)}`](value);
            expect(education[`get${property.charAt(0).toUpperCase() + property.slice(1)}`]()).toBe(
                value
            );
        });
    });

    describe('Managing Education Entries', () => {
        test('should add multiple education entries', () => {
            const entryOne = {
                degree: 'Masters',
                institution: 'Fancy University',
                startDate: '2000',
                endDate: '2004',
                location: 'Europe',
            };
            const entryTwo = {
                degree: 'Bachelors',
                institution: 'Simple University',
                startDate: '1997',
                endDate: '2000',
                location: 'Europe',
            };

            education.addEducationEntry(entryOne);
            education.addEducationEntry(entryTwo);

            expect(education.getEducationEntries()).toEqual([entryOne, entryTwo]);
            expect(education.getEducationEntries().length).toBe(2);
        });

        test('should update an existing education entry', () => {
            const entry = {
                degree: 'Bachelors',
                institution: 'Simple University',
                startDate: '1997',
                endDate: '2000',
                location: 'Europe',
            };

            education.addEducationEntry(entry);
            const update = education.updateEducationEntry(0, { degree: 'Masters' });

            expect(update).toBe(true);
            expect(education.getEducationEntries()[0].degree).toBe('Masters');
        });

        test('should return false and log an error when updating an invalid index', () => {
            console.error = jest.fn();

            const update = education.updateEducationEntry(3, { degree: 'Masters' });

            expect(update).toBe(false);

            expect(console.error).toHaveBeenCalledWith('Invalid index for update education entry');
        });

        test('should delete an education entry by index', () => {
            const entryOne = {
                degree: 'Masters',
                institution: 'Fancy University',
                startDate: '2000',
                endDate: '2004',
                location: 'Europe',
            };
            const entryTwo = {
                degree: 'Bachelors',
                institution: 'Simple University',
                startDate: '1997',
                endDate: '2000',
                location: 'Europe',
            };

            education.addEducationEntry(entryOne);
            education.addEducationEntry(entryTwo);

            const result = education.deleteEducationEntry(0);

            expect(result).toBe(true);
            expect(education.getEducationEntries().length).toBe(1);
            expect(education.getEducationEntries()[0]).toEqual(entryTwo);
        });

        test('should return false and log an error when deleting an invalid index', () => {
            console.error = jest.fn();

            const result = education.deleteEducationEntry(3);

            expect(result).toBe(false);
            expect(console.error).toHaveBeenCalledWith(
                'Invalid index for deleting education entry'
            );
        });

        test('should clear all education entries', () => {
            const entryOne = {
                degree: 'Masters',
                institution: 'Fancy University',
                startDate: '2000',
                endDate: '2004',
                location: 'Europe',
            };
            const entryTwo = {
                degree: 'Bachelors',
                institution: 'Simple University',
                startDate: '1997',
                endDate: '2000',
                location: 'Europe',
            };

            education.addEducationEntry(entryOne);
            education.addEducationEntry(entryTwo);

            education.clearEducationEntries();

            const result = education.getEducationEntries();

            expect(result.length).toBe(0);
        });
    });
});
