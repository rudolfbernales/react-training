import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
export default class ContactList extends React.Component {
  static defaultProps = {
    list: [],
    onUpdate: (Id) => { }
  };

  render() {
    const { list } = this.props;
    return (
      <React.Fragment>
         <Link to={"/new"}>
          <button>
            Register
          </button>
        </Link>
        <br/>
        <br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link to={"/view/" + item.id}>
                      <button>View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
       
      </React.Fragment>
    );
  }
}