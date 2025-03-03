import { useState } from 'react';
import Education from '../classes/Education';
import Form from './global/form';
import TextInput from './global/textInput';

const EducationComponent = () => {
    const [education, setEducation] = useState(new Education());

    const handleSubmit = data => {
        const extractedData = Object.fromEntries(data.entries());

        education.updateDegree(extractedData.degree);
        education.updateInstitution(extractedData.institution);
        education.updateStartDate(extractedData.startDate);
        education.updateEndDate(extractedData.endDate);
        education.updateLocation(extractedData.location);

        education.addEducationEntry(extractedData);

        setEducation(education);

        console.log('education info: ', education);
        console.log('education entries: ', education.getEducationEntries());

    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Education</h2>
                <TextInput
                    label='Degree:'
                    id='Degree'
                    name='degree'
                    placeholder='Masters'
                    required
                />
                <TextInput
                    label='Institution:'
                    id='institution'
                    type='institution'
                    name='institution'
                    placeholder='Some Fancy University'
                    required
                />
                <TextInput
                    label='Start Date:'
                    id='startDate'
                    name='startDate'
                    placeholder='Month 2000'
                />
                <TextInput label='End Date:' id='endDate' name='endDate' placeholder='Month 2004' />
                <TextInput label='Location:' id='location' name='location' placeholder='Europe' />

                <button type='submit'>Add</button>
            </Form>
        </>
    );
};

export default EducationComponent;
