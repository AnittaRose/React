const withUpperCase = (WrappedComponent) =>{
    return function ({text, ...restProps}) {
        const upperCaseText = text.toUpperCase();

        return <WrappedComponent {...restProps} text={upperCaseText} />

    }
}

const MyComponent = ({text}) => <div>{text}</div>

const MyComponentwithUppercase = withUpperCase(MyComponent);


export default MyComponentwithUppercase;