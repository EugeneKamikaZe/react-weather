import * as Yup from 'yup';
import { ObjectShape } from 'yup';

// TODO сделать передачу required
export function useValidation(...rest: string[]) {
    const FIRSTNAME = Yup.string()
        .matches(/^[A-Za-z ]*$/, 'invalid_firstname')
        .max(40, 'max_length');
    const LASTNAME = Yup.string()
        .matches(/^[A-Za-z ]*$/, 'invalid_firstname')
        .max(40, 'max_length');
    const EMAIL = Yup.string().email('invalid_email').required('required');
    const COUNTRY = Yup.string().required('required');
    const PASSWORD = Yup.string()
        .min(4, 'min_length')
        .max(50, 'max_length')
        .required('required');
    const PASSWORD_CONFIRM = Yup.string()
        // .min(4, 'min_length')
        // .max(50, 'max_length')
        .oneOf([Yup.ref('password')], 'invalid_password_match')
        .required('required');

    if (rest.length) {
        const config: ObjectShape = {};

        rest.forEach((parameter) => {
            // eslint-disable-next-line default-case
            switch (parameter) {
                case 'firstname':
                    config.firstname = FIRSTNAME;
                    break;
                case 'lastname':
                    config.lastname = LASTNAME;
                    break;
                case 'country':
                    config.country = COUNTRY;
                    break;
                case 'email':
                    config.email = EMAIL;
                    break;
                case 'password':
                    config.password = PASSWORD;
                    break;
                case 'confirm_password':
                    config.confirm_password = PASSWORD_CONFIRM;
                    break;
            }
        });

        return Yup.object().shape(config);
    }

    return Yup.object().shape({
        firstname: FIRSTNAME,
        lastname: LASTNAME,
        email: EMAIL,
        country: COUNTRY,
        password: PASSWORD,
        confirm_password: PASSWORD_CONFIRM,
    });
}
