export default class PersonalInfo {
    constructor(fullName = 'John Doe', email = 'johndoe@mail.com', phone = '1234567', address = 'Random City, Random Country', profileSummary = 'Lorem ipsum') {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.profileSummary = profileSummary;
    }

    updateFullName(firstName, lastName) {
        const fullName = firstName + ' ' + lastName
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
