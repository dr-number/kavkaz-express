import React from "react";
import '../index.css'

export class Table extends React.Component{
  render() {
    return <table>
      <thead>
        <tr height="56px">
          <th width="105px">Company</th>
          <th width="273px">Broker</th>
          <th width="273px">Route</th>
          <th width="273px"></th>
          <th width="145px">Miles</th>
          <th width="145px">Rate</th>
          <th width="209px">Email</th>
          <th width="181px">Received at</th>
        </tr>
      </thead>
      <tbody>
      {
        this.props.data.map(item => (
          <tr height="56px" key={item.id}>
            <td>{item.company}</td>
            <td>{item.broker}</td>
            <td>
              <div className="route-date">{item.fromDate}</div>
              <div>{item.from}</div>
            </td>
            <td className="arrow-left">
              <div className="route-date">{item.toDate}</div>
              <div>{item.to}{item.routeCount !== 0 && <span>+{item.routeCount}</span>}</div>
            </td>
            <td>{item.milies}</td>
            <td>{item.rate}</td>
            <td>{item.email}</td>
            <td>{item.receivedAt}</td>
          </tr>
        ))
      }
      </tbody>
    </table>;
  }
}
