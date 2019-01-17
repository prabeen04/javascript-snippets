import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Image, List, Checkbox } from 'semantic-ui-react'
import { setSelectedPeople } from "../Store/action";
export class UserList extends Component {
    render() {
        const { peoples, setSelectedPeople } = this.props;
        console.log(peoples)
        return (
            <>
                <h1>User list</h1>
                <List selection verticalAlign='middle'>
                    {peoples.map((people, i) => (
                        <List.Item key={i} onClick={() => setSelectedPeople(people)}>
                        <Checkbox checked/>&nbsp;
                            <Image avatar src={people.img} />
                            <List.Content>
                                <List.Header>{people.name}</List.Header>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            </>
        )
    }
}

const mapStateToProps = ({ peoples }) => ({
    peoples: peoples
})

const mapDispatchToProps = dispatch => bindActionCreators({ setSelectedPeople }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
