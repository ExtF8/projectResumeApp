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
    };

    const handleSubmit = event => {
        event.preventDefault();

        const updatedInfo = new PersonalInfo();

        updatedInfo.updateFullName(personalInfo.fullName);
        updatedInfo.updateEmail(personalInfo.email);
        updatedInfo.updatePhone(personalInfo.phone);
        updatedInfo.updateAddress(personalInfo.address);
        updatedInfo.updateSummary(personalInfo.profileSummary);

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
                <label>
                    <h4>Full Name</h4>
                    <input
                        type='text'
                        name='fullName'
                        value={personalInfo.fullName}
                        onChange={handleChange}
                        placeholder='Full Name'
                    />
                </label>

                <label>
                    <h4>Email</h4>
                    <input
                        type='email'
                        name='email'
                        value={personalInfo.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </label>

                <label>
                    <h4>Phone</h4>
                    <input
                        type='tel'
                        name='phone'
                        value={personalInfo.phone}
                        onChange={handleChange}
                        placeholder='Phone Number'
                    />
                </label>

                <label>
                    <h4>Address</h4>
                    <input
                        type='text'
                        name='address'
                        value={personalInfo.address}
                        onChange={handleChange}
                        placeholder='City, Country'
                    />
                </label>

                <label>
                    <h4>Profile Summary</h4>
                    <textarea
                        name='profileSummary'
                        value={personalInfo.profileSummary}
                        onChange={handleChange}
                        placeholder='Brief summary about yourself'
                    />
                </label>

                <button type='submit'>Save</button>
            </form>
            <button onClick={test}>test</button>
        </>
    );
};

export default PersonalInfoComponent;
