import { Formik, Form } from "formik";
import Input from "../inputs/input";
import Navbar from "../navbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import classNames from "classnames";
import styles from "./header.module.css";
const Header = () => {
    const initialValues = {
        checkInDate: "",
        checkoutDate: "",
    };
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.container}`}>
                <div className={`row ${styles.headerContainer}`}>
                    <div className={`col-lg-12 col-sm-12 ${styles.headerText}`}>
                        <h1>HOTELS IN RWANDA</h1>
                    </div>
                </div>
                <div className="col-lg-12">
                        <Formik
                            onSubmit={() => {}}
                            initialValues={initialValues}
                        >
                            <Form  className={`row ${styles.form}`}>
                                <section className="col-lg-4">
                                    <label>Check In</label>
                                    <Input type="date" name="checkInDate" />
                                </section>
                                <section className="col-lg-4">
                                    <label>Check Out</label>
                                    <Input type="date" name="checkoutDate" />
                                </section>
                                <section className={`col-lg-12 ${styles.buttonHolder}`}>
                                <button
                                type="button"
                                className={classNames(styles.submitButton)}
                            >
                                <BsFillArrowRightCircleFill size={17} />
                                <span>Processed</span>
                            </button></section>
                            </Form>
                        </Formik>
                </div>
            </div>
        </>
    );
};
export default Header;
