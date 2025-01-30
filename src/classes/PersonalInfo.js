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

    updatePhone(phone) {
        const isValid = this.#validatePhone(phone);

        if (!isValid) {
            return false;
        }

        this.phone = phone;
    }

    updateAddress(city, country) {
        const address = city + ', ' + country
        this.address = address;
    }

    getFullName() {
        return this.fullName;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }

    getAddress() {
        return this.address
    }

    #validateEmail(email) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

        return emailRegex.test(email);
    }

    #validatePhone(phone) {
        const phoneRegex = /^(?:\+?[0-9]{7,15})$/;

        return phoneRegex.test(phone);
    }
}
