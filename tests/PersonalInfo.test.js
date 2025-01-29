import PersonalInfo from '../src/classes/PersonalInfo';

test('should initialize PersonalInfo class', () => {
    const personalInfo = new PersonalInfo();

    expect(personalInfo).toBeInstanceOf(PersonalInfo);
});

test('should update full name', () => {
    const personalInfo = new PersonalInfo();

    const firstName = 'Test';
    const lastName = 'User';

    personalInfo.updateFullName(firstName, lastName);

    expect(personalInfo.fullName).toBe('Test User');
});

test('should update email', () => {
    const personalInfo = new PersonalInfo();
    personalInfo.updateEmail('some@some.com');

    expect(personalInfo.email).toBe('some@some.com');
});

test('should throw error if email fails regex', () => {
    const personalInfo = new PersonalInfo();

    expect(() => {personalInfo.updateEmail('some!some.com')}).toThrow(new Error('invalid email'));
});
