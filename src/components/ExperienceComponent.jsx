import { useState } from 'react';
import Experience from '../classes/Experience';
import Form from './global/form';
import TextInput from './global/textInput';

const ExperienceComponent = () => {
    const [experience, setExperience] = useState(new Experience());

    const handleSubmit = data => {
        const extractedData = Object.fromEntries(data.entries());

        experience.updateRole(extractedData.role);
        experience.updateCompany(extractedData.company);
        experience.updateStartDate(extractedData.startDate);
        experience.updateEndDate(extractedData.endDate);
        experience.updateDescription(extractedData.description);

        experience.addExperienceEntry(extractedData);

        setExperience(experience);

        console.log('experience info: ', experience);
        console.log('experience entries: ', experience.getExperienceEntries());
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Experience</h2>
                <TextInput label='Role:' id='role' name='role' placeholder='Employee' required />
                <TextInput
                    label='Company:'
                    id='company'
                    type='company'
                    name='company'
                    placeholder='Employer'
                    required
                />
                <TextInput
                    label='Start Date:'
                    id='startDate'
                    name='startDate'
                    placeholder='Month 2004'
                />
                <TextInput label='End Date:' id='endDate' name='endDate' placeholder='Month 2025' />
                <TextInput
                    label='description:'
                    id='description'
                    name='description'
                    placeholder='Did some important stuff'
                />

                <button type='submit'>Add</button>
            </Form>
        </>
    );
};

export default ExperienceComponent;
