class PersonalInfo {
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

    getFullName() {
        return this.fullName;
    }
}
