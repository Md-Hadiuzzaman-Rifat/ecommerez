import React from 'react';
import "./ControlTable.scss"

const ControlTable = () => {
    return (
        <div className='ControlTable'>
            <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Md Hadi</td>
                <td>hadi@gmail.com</td>
                <td>Moderator</td>
            </tr>
            <tr>
                <td>Md Hadi</td>
                <td>hadi@gmail.com</td>
                <td>Admin</td>
            </tr>
          </tbody>
            </table>
        </div>
    );
};

export default ControlTable;