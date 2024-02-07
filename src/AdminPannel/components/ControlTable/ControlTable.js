import React, { useEffect, useState } from "react";
import "./ControlTable.scss";
import { useGetUsersQuery } from "../../../features/users/userApi";

const ControlTable = () => {
  const { data: findUser, isLoading: findLoading } = useGetUsersQuery();

  const [controlUser, setControlUser] = useState([]);


  // Find user with role property
  useEffect(() => {
    if (findUser?.length > 0) {
      setControlUser(findUser.filter((user) => user?.role));
    }
  }, [findUser]);

  return (
    <div className="ControlTable">
      {findLoading && "Loading"}
      {!findLoading && findUser && controlUser?.length === 0 && (
        <h3>No user found</h3>
      )}
      {!findLoading && findUser && controlUser?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {
              controlUser.map(user=><tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>)
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ControlTable;
