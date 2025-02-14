import { useState } from 'react';
import PersonalInfo from '../classes/PersonalInfo';

const PersonalInfoComponent = () => {
    const [personalInfo, setPersonalInfo] = useState(new PersonalInfo());

    const handleChange = event => {
        const { name, value } = event.target;

        setPersonalInfo(previous => {
            // Create a copy of the previous class instance
            const updatedInfo = new PersonalInfo();
            // Copy all previous properties
            Object.assign(updatedInfo, previous);
            // Update the specific field dynamically
            const methodName = `update${name.charAt(0).toUpperCase() + name.slice(1)}`;
            if (typeof updatedInfo[methodName] === 'function') {
                const success = updatedInfo[methodName](value);
                if (success === false) {
                    return previous;
                }
            } else {
                updatedInfo[name] = value;
            }

            return updatedInfo;
        });
        console.log(event.target.value);
    };

    function test() {
        const testName = personalInfo.getFullName();
        const testEmail = personalInfo.getEmail();

        console.log('getName: ', testName);
        console.log('getEmail: ', testEmail);
    }

    return (
        <>
            <h2>Personal Information</h2>
            <input
                id='fullName'
                type='text'
                name='fullName'
                value={personalInfo.fullName}
                onChange={handleChange}
                placeholder='Full Name'
            />
            <input
                id='email'
                type='email'
                name='email'
                value={personalInfo.email}
                onChange={handleChange}
                placeholder='someone@mail.com'
            />
            <button onClick={test}>test</button>
        </>
    );
};

export default PersonalInfoComponent;
