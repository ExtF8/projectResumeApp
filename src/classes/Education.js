export default class Education {
    constructor(degree, institution, startDate, endDate, location, educationEntries = []) {
        this.degree = degree;
        this.institution = institution;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.educationEntries = educationEntries;
    }

    updateDegree(degree) {
        this.degree = degree;
    }

    updateInstitution(institution) {
        this.institution = institution;
    }

    updateStartDate(startDate) {
        this.startDate = startDate;
    }

    updateEndDate(endDate) {
        this.endDate = endDate;
    }

    getDegree() {
        return this.degree;
    }

    getInstitution() {
        return this.institution;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }
}
