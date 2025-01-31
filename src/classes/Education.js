export default class Education {
    constructor(degree, institution, startDate, endDate, location) {
        this.degree = degree;
        this.institution = institution;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }

    updateDegree(degree) {
        this.degree = degree;
    }

    getDegree() {
        return this.degree;
    }
}
