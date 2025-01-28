import PersonalInfo from '../src/classes/PersonalInfo';

test('should update full name', () => {
    const personalInfo = new PersonalInfo();
    const fullName = 'Test User';
    personalInfo.updateFullName(fullName);

    expect(personalInfo.fullName).toBe('Test User');
});
