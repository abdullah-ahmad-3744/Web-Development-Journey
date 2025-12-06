import "./FirstComponent.css"

function FirstComponent (props) {
    const title = props.title
    const description = props.description
    return (
        <div className="first-component">
            <h1>{title}</h1>
            <h3>Description</h3>
            <p>{description}</p>
        </div>
    )
}
export default FirstComponent