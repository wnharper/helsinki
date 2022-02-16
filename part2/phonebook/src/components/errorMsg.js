const ErrorMsg = ({message}) => {
    const style = {
        padding:10,
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 5,
        marginBottom: 15
    }

    if (message === null) {
        return (null)
    }

    return (
        <div style={style}>{message}</div>
    )
}

export default ErrorMsg