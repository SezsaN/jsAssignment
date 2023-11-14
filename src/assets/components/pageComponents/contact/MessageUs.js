import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const MessageUs = () => {
    const [nameErrorMessage, setNameErrorMessage] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [messageErrorMessage, setMessageErrorMessage] = useState('')

    const form = useFormik ({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object ({ 
            name: Yup.string()
                .required('Please fill in a name with atleast 2 characters')
                .min(2, 'Name must be at least 2 characters long'),
            email: Yup.string()
                .required('Please fill in a valid email example: abc@domain.com')
                .email('Please fill in a valid email')
                .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,),
            message: Yup.string()
                .required('Please fill in a message with atleast 10 characters')
                .min(10, 'Message must be at least 10 characters long')
        }),

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        
            switch(result.status) {
                case 200:
                    alert('Your message has been sent!')
                    break;
                case 400:
                    setNameErrorMessage('Please fill in a name with atleast 2 characters');
                    setEmailErrorMessage('Please fill in a valid email');
                    setMessageErrorMessage('Please fill in a message with atleast 10 characters');
                    break;
            }        
        }
    })
                
    
    return (
        <section className="message-us">
            <div className="container">
                <div className="box"></div>
                <div className="title">
                    <h2>Leave us a message</h2>
                    <h2>for any information.</h2>
                </div>
                <div className="user-information">
                    <form onSubmit={form.handleSubmit} noValidate>
                        <span className="error">{nameErrorMessage}</span>
                        <input className={form.errors.name && form.touched.name ? 'error' : ''} type="text" name="name" placeholder={form.errors.name ? form.errors.name : 'Name*'} value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}></input>
                        <span className="error">{emailErrorMessage}</span>
                        <input className={form.errors.email && form.touched.email ? 'error' : ''} type="email" name="email" placeholder={form.errors.email ? form.errors.email : 'Email*'} value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}></input>
                        <span className="error">{messageErrorMessage}</span>
                        <textarea className={form.errors.message && form.touched.message ? 'error' : ''} type="text" name="message" placeholder={form.errors.message ? form.errors.message : 'Your message*'} value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>
                        <button type="Submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MessageUs
                    
                        
                            
                       

                        

