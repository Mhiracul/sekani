import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "./Admin/UserCard";
import { setUsers } from "../redux/userSlice";

function Users() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const myUsers = Array.isArray(usersData) ? usersData : [];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/allUsers");
        const data = await res.json();
        dispatch(setUsers(data.data));
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-center py-6 text-2xl">Users Page</h1>
      {myUsers.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="py-10 flex flex-col justify-center items-center border-2 border-gray-200 rounded-lg p-4 my-4">
          <table>
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Password</th>
                <th className="p-8">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myUsers.map((data) => (
                <UserCard
                  key={data._id}
                  id={data._id}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  email={data.email}
                  password={data.password}
                  onDelete={() => console.log("delete user")}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
