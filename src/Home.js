import "./styling.css";
import { useState } from "react";

export default function Users(props) {
  //getting the data from parent (fetchdata)
  return (
    <div className="userDetailsTable">
      <table>
        <thead>
          <tr>
            <th>Premium</th>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>gender</th>
            <th>ip_address</th>
            <th>Delete</th>
          </tr>
        </thead>

        {props.usersdata.map((item, index) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>
              <span onClick={() => props.onStar(item.id)}>
                    &#9734;
                  </span>
                </td>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
                <td onClick={() => props.onDelete(item.id)}>Delete</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
