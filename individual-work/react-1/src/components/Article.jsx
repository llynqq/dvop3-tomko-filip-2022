const Article = (props) => {
    return (
        <div className="grid-item">
            <img src={props.image}/>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
        </div>
    )
}
export default Article;