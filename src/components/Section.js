export const Sessao = (props) => {
    return (
        <div id={props.id} className={"Sessao flex flex-col p-2"} dir="ltr">
            {props.children}
        </div>
    )
}