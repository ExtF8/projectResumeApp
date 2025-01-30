export default class PersonalInfo {
    constructor(fullName = '', email = '', phone = '', address = '', profileSummary = '') {
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
            return false;
        }

        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    getFullName() {
        return this.fullName;
    }

    #validateEmail(email) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
        return emailRegex.test(email);
    }
}
