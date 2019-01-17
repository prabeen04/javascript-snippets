import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Button } from 'semantic-ui-react'
import AddUserModal from './AddUserModal'
import { handleAddUserModal, addPeople } from "../Store/action";
export class Navbar extends Component {
    render() {
        const { addUserModal, handleAddUserModal, noOfPeople, addPeople } = this.props;
        console.log(addUserModal)
        return (
            <div className='navbar'>
                <Button primary icon='add' onClick={() => handleAddUserModal(true)} />
                <AddUserModal
                    noOfPeople={noOfPeople}
                    addPeople={addPeople}
                    addUserModal={addUserModal}
                    handleAddUserModal={handleAddUserModal} />
            </div>
        )
    }
}

const mapStateToProps = ({ addUserModal, noOfPeople }) => ({
    addUserModal,
    noOfPeople
})

const mapDispatchToProps = dispatch => bindActionCreators({
    handleAddUserModal,
    addPeople
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
