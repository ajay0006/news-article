import {useFormik} from "formik";
import * as yup from 'yup';
import {Alert} from "react-bootstrap";
import {useDispatch} from "react-redux";
import { saveContactForm} from "../reducers/thunk";
import { displayToast} from "./toats";

const Contact = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: ''
        },
        validationSchema: yup.object({
            firstname: yup.string().required("Your First name is required"),
            lastname: yup.string().required("Your Last name is required"),
            email: yup.string().required("Your E-mail is required").email("You have entered an invalid email"),
            message: yup.string().max(500, 'The message is too long')
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            dispatch(saveContactForm(values))
                .unwrap()
                .then((response) => {
                    if (response)
                    {
                        resetForm();
                        displayToast('SUCCESS', "Thank you for your message, we will contact you as soon as possible")
                    }
                })
                .catch(error =>
                {
                    displayToast('ERROR',"Sorry try again later")
                })
        },
    })

    return (
        <>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <form onSubmit={formik.handleSubmit}>
                        <h4 className="mb-3">Contact Us</h4>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">First name</label>
                                <input type="text"
                                       className="form-control"
                                       id="firstname"
                                       name="firstname"
                                       {...formik.getFieldProps('firstname')}
                                />

                                {formik.errors.firstname && formik.touched.firstname ?
                                    <Alert variant='danger'>
                                        <span>{formik.errors.firstname}</span>
                                    </Alert> : null}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastname">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    name="lastname"
                                    {...formik.getFieldProps('lastname')}

                                />
                                {formik.errors.lastname && formik.touched.lastname ?
                                    <Alert variant='danger'>
                                        <span>{formik.errors.lastname}</span>
                                    </Alert>
                                    : null}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   name="email"
                                   {...formik.getFieldProps('email')}

                            />
                            {formik.errors.email && formik.touched.email ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.email}</span>
                                </Alert>
                                : null}

                        </div>


                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className='form-control'
                                          id='message'
                                          name='message'
                                          rows='4'
                                          {...formik.getFieldProps('message')}/>
                            </div>
                        </div>

                        <hr className="mb-4"/>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact