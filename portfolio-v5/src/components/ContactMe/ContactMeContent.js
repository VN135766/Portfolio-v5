import classes from './ContactMeContent.module.css'

import Card from '../UI/Card'
import linkedInBlock from '../../assets/images/contact-blocks/linkedin-block.png'
import emailBlock from '../../assets/images/contact-blocks/email-block.png'
import githubBlock from '../../assets/images/contact-blocks/github-block.png'



const ContactMeContent = () => {
    return (
        <section className={classes.section}>
            <div className={classes.contactMeText}>
                <h2>Connect with me!</h2>
                <h3>Whether you are an employer or a fellow developer, I would love to hear from you!<br /><br />
                    Click <span>HERE</span> for my resume. <br /><br />
                    Phone: 734-366-6061</h3>
                <div>
                    <img src={linkedInBlock} alt="linkedIn Logo" />
                    <img src={emailBlock} alt="email Logo" />
                    <img src={githubBlock} alt="github Logo" />
                </div>
            </div>
            <Card className={classes.card}>
                <form className={classes.form}>
                    <div>
                        <label htmlFor='nameInput'>Your Name</label>
                        <input type="text" placeholder='Enter your Name' id='nameInput' />
                    </div>
                    <div>
                        <label htmlFor='emailInput'>Your Name</label>
                        <input type="text" placeholder='Enter your Email' id='emailInput' />
                    </div>
                    <div>
                        <label htmlFor='messageInput'>Your Message</label>
                        <textarea type="text" rows='5' placeholder='Hello Victor.  We are looking for a full stack developer to hire for company X.  I would love to connect with you.' id='nameInput' />
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </Card>
            <h2 className={classes.alternateText}>Connect with me!</h2>

        </section>
    )
}

export default ContactMeContent