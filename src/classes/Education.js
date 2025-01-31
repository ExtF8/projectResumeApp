export default class Education {
    constructor(degree, institution, startDate, endDate, description) {
        this.degree = degree;
        this.institution = institution;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }

    updateDegree(degree) {
        this.degree = degree;
    }

    getDegree() {
        return this.degree;
    }
}
