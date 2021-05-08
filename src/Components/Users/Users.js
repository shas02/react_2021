import './Users.css';
import axiosInstance from '../Sources/Source'
import {useEffect, useState} from "react";
import User from "./User/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]))
    }, [])

    return (
<div>
    <div>
        {users.map((value => <User key={value.id} item={value}/>))}
    </div>
</div>
    )
}