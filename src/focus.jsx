import React, { useEffect, useRef, forwardRef } from 'react'; // [cite: 74]

const Input = ({ forwardedRef, ...otherProps }) => {
    return <input {...otherProps} ref={forwardedRef} />; //[cite: 78]
};

const TextInput = forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />;// [cite: 81]
});

const FocusableInput = (props) => {
    const inputRef = useRef(null); //[cite: 84]

    useEffect(() => {
        if (props.focused && inputRef.current) {
            inputRef.current.focus(); //[cite: 71, 72]
        }
    }, [props.focused]); // [cite: 89]

    return <TextInput ref={inputRef} />; //[cite: 91]
};

export default FocusableInput; // [cite: 82]