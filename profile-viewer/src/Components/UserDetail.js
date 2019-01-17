import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Card, Icon, Image } from 'semantic-ui-react';

export class UserDetail extends Component {
    render() {
        const { selectedPeople } = this.props;
        console.log(selectedPeople)
        return (
            <>
                {selectedPeople.name && <Card>
                    <Image src={selectedPeople.img} />
                    <Card.Content>
                        <Card.Header>{selectedPeople.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>{selectedPeople.Description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a><Icon name='user' />22 Friends</a>
                    </Card.Content>
                </Card>}
            </>
        )
    }
}

const mapStateToProps = ({ selectedPeople }) => ({
    selectedPeople
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)
