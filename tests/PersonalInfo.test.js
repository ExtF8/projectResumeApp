import PersonalInfo from '../src/classes/PersonalInfo';

test('should initialize PersonalInfo class', () => {
    const personalInfo = new PersonalInfo();

    expect(personalInfo).toBeInstanceOf(PersonalInfo);
});

test('should return default values in PersonalInfo', () => {
    const personalInfo = new PersonalInfo();

    expect(personalInfo.fullName).toBe('John Doe');
    expect(personalInfo.email).toBe('johndoe@mail.com');
    expect(personalInfo.phone).toBe('1234567');
    expect(personalInfo.address).toBe('Random City, Random Country');
    expect(personalInfo.profileSummary).toBe('Lorem ipsum');
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

test('should return error if email test fails regex', () => {
    const personalInfo = new PersonalInfo();
    const wrongEmail = personalInfo.updateEmail('some!some.com');
    expect(wrongEmail).toThrow('invalid email');
});
