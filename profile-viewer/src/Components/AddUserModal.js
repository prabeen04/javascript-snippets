import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AddUserModal = ({ addUserModal, handleAddUserModal }) => (
    <Modal open={true} closeOnDimmerClick onClose={() => handleAddUserModal(false)}>
        <Modal.Header>Add User</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default AddUserModal