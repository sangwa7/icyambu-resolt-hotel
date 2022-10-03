import classNames from "classnames";
import styles from "./products.module.css";
import ProductCard from "./subComponent/productCard";
import {Link} from "react-router-dom";
import hotOne from '../../../assets/images/hot-1.jpg';
const Products = () => {
    const data = [
    {
        product_id:1,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:2,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:3,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:4,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:5,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:6,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:7,
        product_name:"Hotel MM",
        product_img_name:hotOne
    },
    {
        product_id:8,
        product_name:"Hotel MM",
        product_img_name:hotOne
    }
];
    return (
        <div
            className={classNames(styles.container, "container-fluid")}
            id="products"
        >
            <div className="row">
                <div className={classNames(styles.contentHeader, "col-lg-12")}>
                    <h2>What's On Your Menu</h2>
                    <small>I'm craving ...</small>
                </div>
            </div>
            <div className="row">
                <div className={classNames(styles.productContainer)}>
                    {data.map((item) => (
                        <ProductCard data={item} key={item.product_id} />
                    ))}
                </div>
            </div>
            <div className="row">
                <div className={classNames(styles.viewMoreHolder, "col-lg-12")}>
                    <Link href="/products/list">
                        <button className={classNames(styles.viewMore)}>
                            See Full Menu
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Products;
