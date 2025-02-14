import { useState } from 'react';
import PersonalInfo from '../classes/PersonalInfo';

const PersonalInfoComponent = () => {
    const [personalInfo, setPersonalInfo] = useState(new PersonalInfo());

    const handleChange = event => {
        const { name, value } = event.target;

        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        });
    }

    const handleSubmit = event => {
        event.preventDefault();

        const updatedInfo = new PersonalInfo();

        updatedInfo.updateFullName(personalInfo.fullName);
        updatedInfo.updateEmail(personalInfo.email);

        setPersonalInfo(updatedInfo);

        console.log(updatedInfo);
    };

    function test() {
        const testName = personalInfo.getFullName();
        const testEmail = personalInfo.getEmail();

        console.log('getName: ', testName);
        console.log('getEmail: ', testEmail);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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

                <button type='submit'>Save</button>
            </form>
            <button onClick={test}>test</button>
        </>
    );
};

export default PersonalInfoComponent;
