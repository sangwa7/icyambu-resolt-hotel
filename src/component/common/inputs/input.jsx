import style from "./input.module.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { useField } from "formik";
import classNames from "classnames";
const Input = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classNames(style.wrapper)}>
            <div className={classNames(style.inputHolder)}>
                <section className={`${style.prefixHolder}`}>
                    {icon != null ? icon : <AiFillInfoCircle />}
                </section>
                <input {...field} {...props} />
            </div>
            {meta.touched && meta.error ? <span>{meta.error}</span> : null}
        </div>
    );
};
export default Input;

export const InputSelector = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`${style.wrapper}`}>
            <div className={style.inputHolder}>
                <section className={`${style.prefixHolder}`}>
                    {icon != null ? icon : <AiFillInfoCircle />}
                </section>
                <select {...field} {...props}>
                    {props.children}
                </select>
            </div>
            {meta.touched && meta.error ? <span>{meta.error}</span> : null}
        </div>
    );
};
export const InputRadio = ({ label, icon, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`${style.wrapper}`}>
            <div className={style.inputHolder}>
                <label className={style.InputRadioHolder}>
                    <input
                        {...field}
                        {...props}
                        type="radio"
                        className="rad-input"
                    />
                    <div className={style.radDesign}></div>
                    <div className={style.radText}>{label}</div>
                </label>
            </div>
            {meta.touched && meta.error ? <span>{meta.error}</span> : null}
        </div>
    );
};
