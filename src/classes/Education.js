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

    getDegree() {
        return this.degree;
    }

    getInstitution() {
        return this.institution;
    }
}
