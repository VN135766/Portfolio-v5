import { useState } from 'react'
import classes from './Form.module.css'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleInputChange = (e) => {

        let { target } = e;
        let inputType = target.name;
        let inputValue = target.value;
        
        if (inputType === 'name') {
            setName(inputValue)
            return
        } else if (inputType === 'email') {
            setEmail(inputValue)
            return
        } else {
            setMessage(inputValue)
            return
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {isValid==false && <h3 className={classes.error}>Please enter a valid email</h3>}
            <div>
                <label htmlFor='nameInput'>Your Name</label>
                <input type="text" placeholder='Enter your Name' id='nameInput' name="name" onChange={handleInputChange} value={name} />
            </div>
            <div>
                <label htmlFor='emailInput'>Your Email</label>
                <input type="email" placeholder='Enter your Email' id='emailInput' name="email" onChange={handleInputChange} value={email} />
            </div>
            <div>
                <label htmlFor='messageInput'>Your Message</label>
                <textarea type="text" rows='5' placeholder='Enter message...' id='nameInput' name="message" onChange={handleInputChange} value={message} />
            </div>
            <button type='submit'>Send Message</button>
        </form>
    )
}
export default Form