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
        educationEntries: [],
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

test('should update start date', () => {
    const education = new Education();

    education.updateStartDate('Month 2000');

    expect(education.getStartDate()).toBe('Month 2000');
});

test('should update end date', () => {
    const education = new Education();

    education.updateEndDate('Month 2004');

    expect(education.getEndDate()).toBe('Month 2004');
});

test('should update location', () => {
    const education = new Education();
    education.updateLocation('Europe');

    expect(education.getLocation()).toBe('Europe');
});

test('should add education entries', () => {
    const education = new Education();

    education.updateDegree('Masters');
    education.updateInstitution('Some Fancy University');
    education.updateStartDate('Month 2000');
    education.updateEndDate('Month 2004');
    education.updateLocation('Europe');

    const educationEntry = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };
    education.addEducationEntry(educationEntry);
    education.addEducationEntry('2');
    education.addEducationEntry('3');

    expect(education.educationEntries.length).toBe(3);
});

test('should update education entry', () => {
    const education = new Education();

    education.updateDegree('Masters');
    education.updateInstitution('Some Fancy University');
    education.updateStartDate('Month 2000');
    education.updateEndDate('Month 2004');
    education.updateLocation('Europe');

    const educationEntryOne = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.addEducationEntry(educationEntryOne);

    education.updateDegree('Bachelors');
    education.updateInstitution('Some Simple University');
    education.updateStartDate('Month 1997');
    education.updateEndDate('Month 2000');
    education.updateLocation('Europe');

    const educationEntryTwo = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.addEducationEntry(educationEntryTwo);

    const update = education.updateEducationEntry(1, { degree: 'Masters' });

    expect(update).toBe(true);
    expect(education.getEducationEntries()[1].degree).toBe('Masters');
});

test('should return false and console error if education entry update is provided with wrong index', () => {
    const education = new Education();

    education.updateDegree('Masters');
    education.updateInstitution('Some Fancy University');
    education.updateStartDate('Month 2000');
    education.updateEndDate('Month 2004');
    education.updateLocation('Europe');

    const educationEntryOne = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.updateDegree('Bachelors');
    education.updateInstitution('Some Simple University');
    education.updateStartDate('Month 1997');
    education.updateEndDate('Month 2000');
    education.updateLocation('Europe');

    const educationEntryTwo = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.addEducationEntry(educationEntryOne);
    education.addEducationEntry(educationEntryTwo);

    console.error = jest.fn();

    const update = education.updateEducationEntry(3, { degree: 'Masters' });

    expect(update).toBe(false);

    expect(console.error).toHaveBeenCalledWith('Invalid index for update education entry');
});

test('should delete education entry from educationEntries array ', () => {
    const education = new Education();

    education.updateDegree('Masters');
    education.updateInstitution('Some Fancy University');
    education.updateStartDate('Month 2000');
    education.updateEndDate('Month 2004');
    education.updateLocation('Europe');

    const educationEntryOne = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.updateDegree('Bachelors');
    education.updateInstitution('Some Simple University');
    education.updateStartDate('Month 1997');
    education.updateEndDate('Month 2000');
    education.updateLocation('Europe');

    const educationEntryTwo = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.addEducationEntry(educationEntryOne);
    education.addEducationEntry(educationEntryTwo);

    const result = education.deleteEducationEntry(0);

    expect(result).toBe(true);
    expect(education.educationEntries.length).toBe(1);
});

test('should return console error when invalid index for deleting entries', () => {
    const education = new Education();

    education.updateDegree('Masters');
    education.updateInstitution('Some Fancy University');
    education.updateStartDate('Month 2000');
    education.updateEndDate('Month 2004');
    education.updateLocation('Europe');

    const educationEntryOne = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.updateDegree('Bachelors');
    education.updateInstitution('Some Simple University');
    education.updateStartDate('Month 1997');
    education.updateEndDate('Month 2000');
    education.updateLocation('Europe');

    const educationEntryTwo = {
        degree: education.getDegree(),
        institution: education.getInstitution(),
        startDate: education.getStartDate(),
        endDate: education.getEndDate(),
        location: education.getLocation(),
    };

    education.addEducationEntry(educationEntryOne);
    education.addEducationEntry(educationEntryTwo);

    console.error = jest.fn();

    const result = education.deleteEducationEntry(3);

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith('Invalid index for deleting education entry');
});
