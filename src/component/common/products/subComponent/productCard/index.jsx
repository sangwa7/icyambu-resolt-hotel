import classNames from "classnames";
import styles from "./productCard.module.css";
const ProductCard = ({ data }) => {
    const redirect = () => {
        // route.push(`/products/${data.product_id}`);
    };
    return (
        <div className={classNames(styles.card)} onClick={redirect}>
            <div
                className={classNames(styles.imageHolder)}
                style={{ backgroundImage: `url(${data.product_img_name})` }}
            ></div>
            <section className={classNames(styles.textHolder)}>
                <h4>{data.product_name}</h4>
            </section>
            <div className={classNames(styles.priceContainer)}>$4000 RWF</div>
        </div>
    );
};
export default ProductCard;
