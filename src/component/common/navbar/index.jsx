import classNames from "classnames";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMenu, MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import NavSideBar from "./subComponent/navSidebar";

const Navbar = () => {
    let [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={classNames(styles.container, "container-fluid")}>
                <div className="row">
                    <div
                        className={classNames(
                            styles.logoSection,
                            "col-lg-2 col-md-12"
                        )}
                    >
                        <MdOutlineMenu
                            className={classNames(styles.toggleIcon)}
                            onClick={() => setToggle(!toggle)}
                        />
                        <Link href="/">
                            <span>Hotel Reservation</span>
                        </Link>
                    </div>
                    <div
                        className={classNames(styles.menuSection, "col-lg-10")}
                    >
                        <Link href="/products/list">
                            <section
                                className={classNames(styles.contentSection)}
                            >
                                <MdOutlineSearch
                                    className={classNames(styles.icons)}
                                />
                                <span>Search</span>
                            </section>
                        </Link>

                        <Link href="/user/account">
                            <section
                                className={classNames(styles.contentSection)}
                            >
                                <FaUserCircle
                                    className={classNames(styles.icons)}
                                />
                                <span>Account</span>
                            </section>
                        </Link>
                    </div>
                </div>
            </div>
            <NavSideBar toggle={toggle} />
        </>
    );
};
export default Navbar;
