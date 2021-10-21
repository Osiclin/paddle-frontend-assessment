export default function Button(props) {
    return(
        <button
            style={{
                fontSize: '1rem',
                width: props.width,
                padding: props.padding,
                border: props.border,
                color: props.color,
                borderRadius: props.borderRadius,
                backgroundColor: props.backgroundColor
            }
        }>
            {props.name}
        </button>
    )
}