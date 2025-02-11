import { useState } from 'react';
import PersonalInfo from '../classes/PersonalInfo';

const PersonalInfoComponent = () => {
    const [personalInfo, setPersonalInfo] = useState(new PersonalInfo());

    const handleChange = event => {
        setPersonalInfo(perv => ({
            ...perv,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <>
            <h2>Personal Information</h2>
            <input
                type='text'
                name='name'
                value={personalInfo.fullName}
                onChange={handleChange}
                placeholder='Full Name'
            />
        </>
    );
};

export default PersonalInfoComponent;
