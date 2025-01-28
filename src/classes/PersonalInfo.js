export default class PersonalInfo {
    constructor(fullName = '', email = '', phone = '', address = '', profileSummary = '') {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.profileSummary = profileSummary;
    }

    updateFullName(fullName) {
        this.fullName = fullName;
    }

    updateEmail(email) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

        if (emailRegex.test(email)) {
            this.email = email;
        } else {
            // later need to implement return to frontend
            console.error('invalid email');
        }
    }

    getEmail() {
        return this.email;
    }

    getFullName() {
        return this.fullName;
    }
}
