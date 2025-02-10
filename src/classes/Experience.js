export default class Experience {
    constructor(role, company, startDate, endDate, description, experienceEntries = []) {
        this.role = role;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.experienceEntries = experienceEntries;
    }

    updateRole(role) {
        this.role = role;
    }

    updateCompany(company) {
        this.company = company;
    }

    updateStartDate(startDate) {
        this.startDate = startDate;
    }

    updateEndDate(endDate) {
        this.endDate = endDate;
    }

    updateDescription(description) {
        this.description = description;
    }

    getRole() {
        return this.role;
    }

    getCompany() {
        return this.company;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getDescription() {
        return this.description;
    }
}
