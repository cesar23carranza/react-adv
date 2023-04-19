import { Form, Formik} from "formik";
import * as Yup from "yup";

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    

return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}
            onSubmit={ (values) => {
                console.log( values );
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .min(2, 'Debe de tener 2 caraceres minimo')
                                    .required('Requerido'),
                email: Yup.string()
                                .email('el formato de correo no valido')
                                .required('Requerido'),
                password1: Yup.string()
                                .min(6, 'Debe de tener 6 caracteres minimo')
                                .required('Requerido'),
                password2: Yup.string()
                                .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                .required('Requerido'),
            })
            }
        >


            { ({ handleReset }) => (
                <Form>
                    <MyTextInput 
                        label="Nombre" 
                        name="name"
                        placeholder=""
                    />

                    <MyTextInput 
                        label="Correo Electronico" 
                        name="email"
                        placeholder=""
                        type="email"
                    />

                    <MyTextInput 
                        label="Password" 
                        name="password1"
                        placeholder=""
                        type="password"
                    />

                    <MyTextInput 
                        label="Repetir Password" 
                        name="password2"
                        placeholder=""
                        type="password"
                    />

                    <button type="submit">Create</button>

                    <button type="button" onClick={ handleReset }>Reset Form</button>
                </Form>
            )}

        </Formik>


    </div>

  )
}
