import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Button } from 'semantic-ui-react'
import AddUserModal from './AddUserModal'
import { handleAddUserModal } from "../Store/action";
export class Navbar extends Component {
    render() {
        const { addUserModal, handleAddUserModal } = this.props;
        return (
            <div className='navbar'>
                <Button primary icon='add' onClick={() => handleAddUserModal(true)} />
                <AddUserModal
                    addUserModal={addUserModal}
                    handleAddUserModal={handleAddUserModal} />
            </div>
        )
    }
}

const mapStateToProps = ({ initialState }) => ({
    addUserModal: initialState.addUserModal,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    handleAddUserModal
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
