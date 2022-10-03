import classNames from "classnames";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineAccountCircle, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./navSidebar.module.css";
const NavSideBar = ({ toggle = false }) => {
    
    return (
        <>
            <div
                className={classNames(styles.container, {
                    [`${styles.show}`]: toggle,
                })}
            >
                <Link href="/">
                    <section className={classNames(styles.linkSection)}>
                        <AiFillHome className={classNames(styles.icon)} />
                        <span>Home</span>
                    </section>
                </Link>
                <Link href="/#guide">
                    <section className={classNames(styles.linkSection)}>
                        <AiOutlineInfoCircle
                            className={classNames(styles.icon)}
                        />
                        <span>How It Works</span>
                    </section>
                </Link>
                <Link href="/#products">
                    <section className={classNames(styles.linkSection)}>
                        <MdShoppingCart className={classNames(styles.icon)} />
                        <span>Menu</span>
                    </section>
                </Link>
                <Link href="/#aboutus">
                    <section className={classNames(styles.linkSection)}>
                        <AiOutlineInfoCircle
                            className={classNames(styles.icon)}
                        />
                        <span>About Us</span>
                    </section>
                </Link>
                <Link href="/#contactus">
                    <section className={classNames(styles.linkSection)}>
                        <MdOutlineAccountCircle
                            className={classNames(styles.icon)}
                        />
                        <span>Contact us</span>
                    </section>
                </Link>
                <Link href="/user/account">
                    <section className={classNames(styles.linkSection)}>
                        <MdOutlineAccountCircle
                            className={classNames(styles.icon)}
                        />
                        <span>Account</span>
                    </section>
                </Link>
            </div>
            {toggle && <div className={classNames(styles.navSidebarShadow)} />}
        </>
    );
};
export default NavSideBar;
