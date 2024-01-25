
function PropsComponent (props){
    const StyleAttrs={
        backgroundColor:"yellow",
        color:"black"

    }
    return(
        <div style={StyleAttrs}>
        Hello,{props.name} <br/>This is {props.course} class
        </div>
    )
}
export default PropsComponent