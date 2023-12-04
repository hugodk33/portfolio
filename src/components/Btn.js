export const Btn = (props) => {
    return (
        <a id={props.id} className={"flex p-2 bg-opacity-75 bg-purple-900 rounded-full"} href={props.link}>
            {props.children}
        </a>
    )
}