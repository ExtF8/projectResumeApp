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

    updateLocation(location) {
        this.location = location;
    }

    addEducationEntry(entry) {
        this.educationEntries.push(entry);
    }

    updateEducationEntry(index, updatedData) {
        if (index < 0 || index >= this.educationEntries.length) {
            console.error('Invalid index for update education entry');
            return false;
        }

        // Merge existing entry with new values
        this.educationEntries[index] = {
            ...this.educationEntries[index],
            ...updatedData,
        };

        return true;
    }

    deleteEducationEntry(index) {
        if (index < 0 || index >= this.educationEntries.length) {
            console.error('Invalid index for deleting education entry');
            return false;
        }

        this.educationEntries.splice(index, 1);
        return true;
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

    getLocation() {
        return this.location;
    }

    getEducationEntries() {
        return this.educationEntries;
    }
}
