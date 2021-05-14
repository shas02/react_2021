import {Link} from "react-router-dom";

export default function Comment(props) {
    let {item, url} = props;

    return (
        <div>
            {item.id}. {item.name}
            <Link to={url + '/' + item.id}> Show comment details</Link>
        </div>
    );
}