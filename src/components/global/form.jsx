import style from '../../styles/form.module.css';

const Form = ({ action, children, className, onSubmit }) => {
    const handleSubmit = event => {
        event.preventDefault();

        const formElement = event.target;
        formElement.checkValidity();

        formElement.classList.add(style.submitted);

        // focusing the first invalid field
        const firstInvalidField = formElement.querySelector(':invalid');

        firstInvalidField?.focus();

        // submit the dataObject if isValid === true
        if (isValid) {
            const dataObject = new FormData(formElement);
            console.log(dataObject);
            onSubmit(dataObject);
        }
    };

    return (
        <form
            action={action}
            onSubmit={handleSubmit}
            noValidate
            className={style.form}
        >
            <div className={style.wrapper}>{children}</div>
        </form>
    );
};

export default Form;
