import { useFormik} from "formik";
import * as yup from 'yup'

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            country: "",
            state: "",
            zip: ""
        },
        validationSchema: yup.object({
            firstname: yup.string().required("Your First name is required"),
            lastname: yup.string().required("Your Last name is required"),
            email: yup.string().required("Your E-mail is required").email("You have entered an invalid email"),
            country: yup.string().required("Your Country is required"),
            state: yup.string().required("Your State is required"),
            zip: yup.string().required("Your Postal code is required"),

        }),
        onSubmit: values => {console.log(values)},
    })

    return(
        <>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <form onSubmit={formik.handleSubmit}>
                        <h4 className="mb-3">Personal information</h4>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">First name</label>
                                <input type="text"
                                       className="form-control"
                                       id="firstname"
                                       name="firstname"
                                       {...formik.getFieldProps('firstname')}
                                />
                                {formik.errors.firstname && formik.touched.firstname? <span>{formik.errors.firstname}</span> : null}
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
                                {formik.errors.lastname && formik.touched.lastname ? <span>{formik.errors.lastname}</span> : null}

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
                            {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : null}

                        </div>


                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" name="country"
                                        {...formik.getFieldProps('country')}

                                >
                                    <option value="">Choose...</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="NL">Netherlands</option>
                                </select>

                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" name="state"
                                        {...formik.getFieldProps('state')}

                                >
                                    <option value="">Choose...</option>
                                    <option value="california">California</option>
                                    <option value="toronto">Toronto</option>
                                    <option value="utrech">Utrech</option>
                                </select>

                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text"
                                       className="form-control"
                                       id="zip"
                                       name="zip"
                                       {...formik.getFieldProps('zip')}

                                />
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