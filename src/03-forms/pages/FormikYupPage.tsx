import { useFormik } from "formik";
import * as Yup from "yup";

import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched,  getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(10, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            email: Yup.string()
                            .email('el formato de correo no valido')
                            .required('Requerido')
        })
    });

  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                title='firstName'
                { ...getFieldProps('firstName') }
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                title='lastName'
                { ...getFieldProps('lastName') }
            />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="emailAddress">Email Address</label>
            <input 
                type="email"
                title='email'
                { ...getFieldProps('email') }
            />
            { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
