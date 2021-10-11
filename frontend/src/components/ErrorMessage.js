export default function ErrorMessage(props) {

    return (
        <div className="errorContainingDiv">
        <div className="errorMessage center">
            {props.eMsg}
        </div>
        </div>
    )
}
