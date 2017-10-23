import React from 'react';
import Button from './button';
import UserItem from './useritem';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {data, fetchUsers} = this.props;
    return (
      <div className="container">
        <Button onClick={fetchUsers} text="Fetch Users" className="btn btn-blue"></Button>

        <div id={'users'}>
          {data.users.map((user, i) => {
            return ( <UserItem user={user} key={i}/> )
          })}
        </div>

      </div>
    )
  }
}

export default Users;
