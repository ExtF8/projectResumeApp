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

test('should return false if email fails regex', () => {
    const personalInfo = new PersonalInfo();

    const wrongEmail = personalInfo.updateEmail('some!some.com');

    expect(wrongEmail).toBe(false);
});

test('should update phone', () => {
    const personalInfo = new PersonalInfo();

    personalInfo.updatePhone('1234567');

    expect(personalInfo.getPhone()).toBe('1234567');
});

test('should update phone with country code', () => {
    const personalInfo = new PersonalInfo();

    personalInfo.updatePhone('+1234567');

    expect(personalInfo.getPhone()).toBe('+1234567');
});

test('should return false if phone fails regex', () => {
    const personalInfo = new PersonalInfo();

    const wrongPhone = personalInfo.updatePhone('+213123df');

    expect(wrongPhone).toBe(false);
});

test('should return address, city and country', () => {
    const personalInfo = new PersonalInfo();

    personalInfo.updateAddress('City', 'Country');

    expect(personalInfo.getAddress()).toBe('City, Country');
});

test('should return profile summary', () => {
    const personalInfo = new PersonalInfo();

    personalInfo.updateSummary('Lorem ipsum');

    expect(personalInfo.getSummary()).toBe('Lorem ipsum');
});
