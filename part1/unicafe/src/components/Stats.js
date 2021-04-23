import Display from "./Display"

const Stats = (props) => {
    console.log(props)
    if (props.total === 0) {
        return(
            <div></div>
        )
    }

    return (
        <>
            <tr>
            <td>{props.text}:</td> <td>{props.calc}</td>
            </tr>
        </>
    )
}

export default Stats