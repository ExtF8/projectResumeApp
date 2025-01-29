export default class PersonalInfo {
    constructor(
        fullName = '',
        email = '',
        phone = '',
        address = '',
        profileSummary = ''
    ) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.profileSummary = profileSummary;
    }

    updateFullName(firstName, lastName) {
        const fullName = firstName + ' ' + lastName;
        this.fullName = fullName;
    }

    updateEmail(email) {
        const isValid = this.#validateEmail(email);

        if (!isValid) {
            throw new Error('invalid email');
        }

        this.email = email;
    }

    #validateEmail(email) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
        return emailRegex.test(email);
    }

    getEmail() {
        return this.email;
    }

    getFullName() {
        return this.fullName;
    }
}
