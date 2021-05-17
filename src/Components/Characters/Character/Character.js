import {Link} from 'react-router-dom';

export default function Character({item, url}) {
    return (
        <div>
            <div>
                {item.id}.
                {item?.name?.first}
                {item?.name?.middle}
                {item?.name?.last}
            </div>

            <Link to={url + '/' + item.id}> Show details</Link>
            <br/>
            <br/>
        </div>
    )
};
