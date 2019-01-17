import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
const people = {
    name: '',
    rating: 3,
    img: "http://www.fillmurray.com/200/200",
    Description: '',
    Likes: ["Dogs", "Long walks on the beach", "Chopin", "Tacos"],
    Dislikes: ["Birds", "Red things", "Danish food", "Dead Batteries"]
}
class AddUserModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people
        }
    }
    handleChange = ({ target: { value, name } }) => {
        this.setState({ people: { ...this.state.people, [name]: value, id: this.props.noOfPeople + 1, isSelected: false } })
    }
    handleSubmit = () => {
        console.log(this.state.people)
        this.props.addPeople(this.state.people)
        this.setState({ people })
    }
    render() {
        const { addUserModal, handleAddUserModal } = this.props;
        const { people: { name, Description } } = this.state
        return (
            <Modal open={addUserModal} closeOnDimmerClick closeIcon onClose={() => handleAddUserModal(false)} >
                <Modal.Header>Add User</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Name</label>
                                <input
                                    name='name'
                                    placeholder='Name'
                                    value={name}
                                    onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input
                                    name='Description'
                                    placeholder='Description'
                                    value={Description}
                                    onChange={this.handleChange} />
                            </Form.Field>
                            <Button primary type='submit' disabled={!name}>Submit</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default AddUserModal