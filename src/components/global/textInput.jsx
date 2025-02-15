import { useState } from 'react';
import classNames from 'classnames';
import styles from '../../styles/textInput.module.css';

const TextInput = ({ className, label, errorText, id, ...rest }) => {
    const [validationMessage, setValidationMessage] = useState('');

    const onInvalid = event => {
        const target = event.target;
        setValidationMessage(target.validationMessage);
    };

    const onBlur = event => {
        const target = event.target;

        if (!!validationMessage) {
            setValidationMessage(target.validationMessage);
        }
    };

    const wrapperClassName = classNames(className, styles.wrapper);

    return (
        <div className={wrapperClassName}>
            <div>
                {label && (
                    <div className={styles.label}>
                        <label htmlFor={id}>{label}</label>
                    </div>
                )}
            </div>
            <div className='relative'>
                <input
                    id={id}
                    className={styles.input}
                    onInvalid={onInvalid}
                    onBlur={onBlur}
                    {...rest}
                />
            </div>

            {!!validationMessage && (
                <div className={styles.validationMessage}>{errorText || validationMessage}</div>
            )}
        </div>
    );
};

TextInput.displayName = 'TextInput';

export default TextInput;
