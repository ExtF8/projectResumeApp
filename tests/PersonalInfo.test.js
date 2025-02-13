import PersonalInfo from '../src/classes/PersonalInfo';

// TODO: refactor tests for better readability

describe('Personal info class', () => {
    let personalInfo;

    beforeEach(() => {
        personalInfo = new PersonalInfo();
    });

    test('should initialize an PersonalInfo instance', () => {
        expect(personalInfo).toBeInstanceOf(PersonalInfo);
    });

    test('should return PersonalInfo class with empty strings as values', () => {
        const userInfo = {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            profileSummary: '',
        };

        expect(personalInfo).toMatchObject(userInfo);
    });

    describe('Updating Personal information', () => {
        test('should update full name', () => {
            personalInfo.updateFullName('Test User');

            expect(personalInfo.fullName).toBe('Test User');
        });

        test('should update email', () => {
            personalInfo.updateEmail('some@some.com');

            expect(personalInfo.email).toBe('some@some.com');
        });

        test('should return false for invalid email format', () => {
            const wrongEmail = personalInfo.updateEmail('some!some.com');

            expect(wrongEmail).toBe(false);
        });

        test('should update phone', () => {
            personalInfo.updatePhone('1234567');

            expect(personalInfo.getPhone()).toBe('1234567');
        });

        test('should update phone with country code', () => {
            personalInfo.updatePhone('+1234567');

            expect(personalInfo.getPhone()).toBe('+1234567');
        });

        test('should return false for invalid phone number', () => {
            const wrongPhone = personalInfo.updatePhone('+213123df');

            expect(wrongPhone).toBe(false);
        });

        test('should return address with city and country', () => {
            personalInfo.updateAddress('City', 'Country');

            expect(personalInfo.getAddress()).toBe('City, Country');
        });

        test('should return profile summary', () => {
            personalInfo.updateSummary('Lorem ipsum');

            expect(personalInfo.getSummary()).toBe('Lorem ipsum');
        });

        test('should return complete personal personalInfo', () => {
            personalInfo.updateFullName('First Last');
            personalInfo.updateEmail('firstLast@mail.com');
            personalInfo.updatePhone('12345678');
            personalInfo.updateAddress('City', 'Country');
            personalInfo.updateSummary('Lorem ipsum');

            const userInfo = {
                fullName: 'First Last',
                email: 'firstLast@mail.com',
                phone: '12345678',
                address: 'City, Country',
                profileSummary: 'Lorem ipsum',
            };

            expect(personalInfo.getInfo()).toMatchObject(userInfo);
        });
    });
});
