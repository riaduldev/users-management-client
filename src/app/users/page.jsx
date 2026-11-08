import { Suspense } from "react";
import Users from "../components/Users";

const usersPromise = async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
}
const UsersPage = () => {
    return (
        <div>
            <h1>Users data show</h1>
           <Suspense fallback={<div>Loading...</div>}>
           <Users usersPromise={usersPromise}/>
           </Suspense>
        </div>
    );
};

export default UsersPage;