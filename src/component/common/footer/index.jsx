import classNames from "classnames";
import {Link} from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {
    MdPhoneIphone,
    MdOutlineEmail,
    MdOutlineLocationOn,
} from "react-icons/md";
import styles from "./footer.module.css";
const Footer = () => {
    return (
        <div className={classNames(styles.container, "container-fluid")}>
            <div className="row">
                <div
                    className={classNames(
                        styles.contentHolder,
                        "col-lg-3 col-md-12"
                    )}
                >
                    <h3>Hotel Reservation</h3>
                </div>
                <div
                    className={classNames(
                        styles.contentHolder,
                        "col-lg-3 col-md-12"
                    )}
                >
                    <h5>Learn More</h5>
                    <section>
                        <Link href="#">
                            <small className={classNames(styles.LearnMorelink)}>
                                About Us
                            </small>
                        </Link>
                        <Link href="#">
                            <small className={classNames(styles.LearnMorelink)}>
                                Career
                            </small>
                        </Link>
                    </section>
                </div>
                <div
                    className={classNames(
                        styles.contentHolder,
                        "col-lg-3 col-md-12"
                    )}
                >
                    <h5>Join Us</h5>
                    <section>
                        <Link href="#">
                            <div className={classNames(styles.infoHolder)}>
                                <FaInstagram
                                    className={classNames(styles.icon)}
                                />
                                <span>Instagram</span>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className={classNames(styles.infoHolder)}>
                                <FaFacebook
                                    className={classNames(styles.icon)}
                                />
                                <span>Facebook</span>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className={classNames(styles.infoHolder)}>
                                <FaTwitter
                                    className={classNames(styles.icon)}
                                />
                                <span>Twitter</span>
                            </div>
                        </Link>
                    </section>
                </div>

                <div
                    id="contactus"
                    className={classNames(
                        styles.contentHolder,
                        "col-lg-3 col-md-12"
                    )}
                >
                    <h5>Contact Us</h5>
                    <section>
                        <Link href="#">
                            <div className={classNames(styles.infoHolder)}>
                                <MdPhoneIphone
                                    className={classNames(styles.icon)}
                                />
                                <span>+250787612837</span>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className={classNames(styles.infoHolder)}>
                                <MdOutlineEmail
                                    className={classNames(styles.icon)}
                                />
                                <span>contact@Hreservation.com</span>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className={classNames(styles.infoHolder)}>
                                <MdOutlineLocationOn
                                    className={classNames(styles.icon)}
                                />
                                <span>Kigali,Town</span>
                            </div>
                        </Link>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className={classNames(styles.copyright, "col-lg-12")}>
                    <small>Copyright &copy; Hotel Reservation 2021</small>
                </div>
            </div>
        </div>
    );
};
export default Footer;
