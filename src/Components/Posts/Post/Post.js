import {Link} from "react-router-dom";

export default function Post(props) {

    let {item, url} = props;

    return (
        <div>
            {item.id}. {item.title}
            <Link to={url + '/' + item.id}> Open post details</Link>
        </div>
    );
}