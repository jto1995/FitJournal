export default function FeedCard (props){
    <div className="feed-card">
        <div className="feed-card__left">
            <img src={props.img} alt="friend img" />
        </div>
        <div className="feed-card__top">
            <p>{props.name}</p>
            <p>{props.time}</p>
        </div>
        <div className="feed-card__main">
            <p>{props.post}</p>
        </div>
    </div>
}