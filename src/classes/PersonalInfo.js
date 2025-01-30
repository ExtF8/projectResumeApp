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
        console.log(phone)
        const isValid = this.#validatePhone(phone);

        if (!isValid) {
            console.log(isValid)
            return false;
        }

        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

    getFullName() {
        return this.fullName;
    }

    #validatePhone(phone) {
        const phoneRegex =
            /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

        return phoneRegex.test(phone);
    }

    #validateEmail(email) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

        return emailRegex.test(email);
    }
}
