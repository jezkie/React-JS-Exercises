import {connect} from 'react-redux';
import Users from '../components/users'
import fetchUsers from '../actions/users'
const mapStateToPropes = (state) => ({data: state})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  }
}

const UsersContainer = connect(
  mapStateToPropes,
  mapDispatchToProps)(Users)

export default UsersContainer;
