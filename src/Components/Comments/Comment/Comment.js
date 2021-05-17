import {Link} from "react-router-dom";

export default function Comment(props) {
    let {item, url} = props;

    return (
        <div>
            {item.id}. {item.name}
            <Link to={{pathname: `${url}/${item.id}`, state: item}}> Show comment details</Link>
        </div>
    );
}