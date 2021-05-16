import {Link} from 'react-router-dom';

export default function Character(props) {

    let {item, url} = props;

    let first;
    let middle;
    let last;

    if (item.name) {
        first = item.name.first;
        middle = item.name.middle;
        last = item.name.last;


    } else {
        first = 'Noname';
        middle = '';
        last = '';
    }

    return (
        <div>
            <div>
                {item.id}. {first} {middle} {last}
            </div>

            <Link to={url + '/' + item.id}> Show details</Link>
            <br/>
            <br/>
        </div>
    )
};