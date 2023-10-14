export const Logo = (props) => {
    return (
        <button id={props.id} className={"flex p-2 bg-opacity-75 bg-purple-900 rounded-full"}>
            {props.children}
        </button>
    )
}