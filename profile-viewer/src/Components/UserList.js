import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Image, List, Checkbox, Icon } from 'semantic-ui-react'
import { setSelectedPeople, checkAllPeople, checkPeople } from "../Store/action";
export class UserList extends Component {
    render() {
        const { peoples, setSelectedPeople, checkAllPeople, checkPeople, isAllSelected } = this.props;
        console.log(peoples)
        return (
            <>
                <div className='flex-container space-between'>
                    <Checkbox checked={isAllSelected} onChange={checkAllPeople} />&nbsp;
                <Icon name='trash alternate' circular onClick={() => console.log('handle Delete')} />

                </div>
                <List selection verticalAlign='middle'>
                    {peoples.map((people, i) => (
                        <List.Item key={i} onClick={() => setSelectedPeople(people)}>
                            <Checkbox checked={people.isSelected} onChange={() => checkPeople(people.id)}/>&nbsp;
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

const mapStateToProps = ({ peoples, isAllSelected }) => ({
    peoples, isAllSelected
})

const mapDispatchToProps = dispatch => bindActionCreators({ setSelectedPeople, checkAllPeople, checkPeople }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
