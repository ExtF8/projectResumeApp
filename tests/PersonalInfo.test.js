import PersonalInfo from '../src/classes/PersonalInfo';

// TODO: refactor tests for better readability

test('should initialize PersonalInfo class', () => {
    const personalInfo = new PersonalInfo();

    expect(personalInfo).toBeInstanceOf(PersonalInfo);
});

test('should return PersonalInfo class with undefined values', () => {
    const personalInfo = new PersonalInfo();

    const userInfo = {
        fullName: undefined,
        email: undefined,
        phone: undefined,
        address: undefined,
        profileSummary: undefined,
    };

    expect(personalInfo).toMatchObject(userInfo);
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

test('should return complete personal personalInfo', () => {
    const person = new PersonalInfo();
    person.updateFullName('First', 'Last');
    person.updateEmail('firstLast@mail.com');
    person.updatePhone('12345678');
    person.updateAddress('City', 'Country');
    person.updateSummary('Lorem ipsum');

    const personInfo = person.getInfo();

    const personalInfo = {
        fullName: 'First Last',
        email: 'firstLast@mail.com',
        phone: '12345678',
        address: 'City, Country',
        profileSummary: 'Lorem ipsum',
    };

    expect(personInfo).toMatchObject(personalInfo);
});
