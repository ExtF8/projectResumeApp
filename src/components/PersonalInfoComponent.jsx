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

        console.log('personal info: ', personalInfo);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <TextInput
                    label='Full Name:'
                    id='name'
                    name='fullName'
                    placeholder='Full Name'
                    required
                />
                <TextInput
                    label='Email:'
                    id='email'
                    type='email'
                    name='email'
                    placeholder='fullname@mail.eu'
                    required
                />
                <TextInput
                    label='Address:'
                    id='address'
                    name='address'
                    placeholder='City, Country'
                />
                <TextInput
                    label='Phone:'
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='123456789'
                />
                <TextInput
                    label='Profile Summary'
                    name='profileSummary'
                    placeholder='Brief summary about yourself'
                    multiline
                />

                <button type='submit'>Save</button>
            </Form>
        </>
    );
};

export default PersonalInfoComponent;
