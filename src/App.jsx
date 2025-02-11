// import { useState } from 'react';

import './styles/App.css';
import  PersonalInfo  from './classes/PersonalInfo';

function App() {
    // const [count, setCount] = useState(0);

    const personalInfo = new PersonalInfo();

    personalInfo.updateEmail('.test@test.com');

    console.log(personalInfo.getEmail());

    return <></>;
}

export default App;
