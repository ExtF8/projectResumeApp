import { useState } from 'react';
import PersonalInfo from '../classes/PersonalInfo';
import Form from './global/form';
import TextInput from './global/textInput';

const PersonalInfoComponent = () => {
    const [personalInfo, setPersonalInfo] = useState(new PersonalInfo());

    const handleSubmit = data => {
        const extractedData = Object.fromEntries(data.entries());

        personalInfo.updateFullName(extractedData.fullName);
        personalInfo.updateEmail(extractedData.email);
        personalInfo.updatePhone(extractedData.phone);
        personalInfo.updateAddress(extractedData.address);
        personalInfo.updateSummary(extractedData.profileSummary);

        setPersonalInfo(personalInfo);

        console.log('updated data: ', personalInfo);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <TextInput label='Full Name:' id='name' name='fullName' required />
                <TextInput label='Email:' id='email' type='email' name='email' required />
                <TextInput label='Address:' id='address' name='address' />
                <TextInput label='Phone:' id='phone' name='phone' type='tel' />
                <TextInput
                    label='Profile Summary'
                    name='profileSummary'
                    placeholder='Brief summary about yourself'
                />

                <button type='submit'>Save</button>
            </Form>
            {/* <form onSubmit={handleSubmit}>
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
                        className=''
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
            </form> */}
        </>
    );
};

export default PersonalInfoComponent;
