import './Users.css';
import axiosInstance from '../Sources/Source'
import {useEffect, useState} from "react";
import User from "./User/User";

export default function Users() {

    let [users, setUsers] = useState([]);
let [singleUser, setSingleUser] = useState([])

    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]))
    }, [])

    const search = (id) => {
        let findedUser = users.find(value => value.id === id)
        console.log(findedUser);
        setSingleUser(findedUser)

    }

    return (
<div className={'wrap'}>
    <div className={'users_box'}>
        {users.map((value => <User key={value.id} item={value} search={search}/>))}
    </div>
    <div className={'single_user_box'}>
        {
            singleUser && (<h4>{singleUser.id} - {singleUser.name}</h4>)
        }
    </div>
</div>
    )
}