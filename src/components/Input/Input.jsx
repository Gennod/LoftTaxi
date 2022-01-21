
export const Input = ({
    className,
    id,
    type,
    name,
    placeholder,
    labelText,
    labelClassName,
    onChange,
    values
}) => {
    return (
        <>
            <label className={labelClassName} htmlFor={id}>
                {labelText}
            </label>
            <input
                className={className}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={values[name]}
            />
        </>
    );
};
