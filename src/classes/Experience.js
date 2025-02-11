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

    addExperienceEntry(entry) {
        this.experienceEntries.push(entry);
    }

    updateExperienceEntry(index, updatedData) {
        if (index < 0 || index >= this.experienceEntries.length) {
            console.error('Invalid index for update experience entry');
            return false;
        }

        // Merge existing entry with new values
        this.experienceEntries[index] = {
            ...this.experienceEntries[index],
            ...updatedData,
        };

        return true;
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

    getExperienceEntries() {
        return this.experienceEntries;
    }
}
