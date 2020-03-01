import React, {Component} from "react";

import { List,Menu, Icon, Grid, Header, Image, Segment  } from 'semantic-ui-react'
import MessageComp from "./Message_com";

class ContactUs extends Component{
    state = { activeItem: "" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column style={{minWidth:350, maxWidth: 350, aligned:"left" }}>
                    <MessageComp items= {[{text: "developed by:"},{name:"Dor Zion",description: "desc",picture:"./avatar_dor.png"},{name:"Roy Goldenberg",description: "desc",picture:"./avatar_roy.png"},{name:"Omer Hindy",description: "desc",picture:"./avatar_omer.png"}]}/>
                </Grid.Column>
                <Grid.Column style={{minWidth:450, maxWidth: 450, aligned: "center" }}>
                    <Header as='h1' color='teal' textAlign='center'>
                        צרו קשר  <Image key="contact_header1_img" src='./logo1.png'  />
                    </Header>

                    <Segment stacked>
                        <List>
                            <List.Item>
                                <List.Icon name='users' />
                                <List.Content>Semantic UI</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>New York, NY</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='mail' />
                                <List.Content>
                                    <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='phone' />
                                <List.Content>
                                    <a href='http://www.semantic-ui.com'>0X-XXXXXXXX</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                    <MessageComp items= {[{text: "developed by:"},{name:"Dor Zion",description: "desc",picture:"./avatar_dor.png"},{name:"Roy Goldenberg",description: "desc",picture:"./avatar_roy.png"},{name:"Omer Hindy",description: "desc",picture:"./avatar_omer.png"}]}/>

                </Grid.Column>
                <Grid.Column style={{minWidth:350, maxWidth: 350, aligned: "right" }}>
                    <MessageComp items= {[{text: "developed by:"},{name:"Dor Zion",description: "desc",picture:"./avatar_dor.png"},{name:"Roy Goldenberg",description: "desc",picture:"./avatar_roy.png"},{name:"Omer Hindy",description: "desc",picture:"./avatar_omer.png"}]}/>
                </Grid.Column>
                <Menu icon vertical fixed={"right"} style={{maxHeight:50,minHeight:120,marginTop:175 }}>
                    <Menu.Item
                        name='facebook_bot'
                        active={activeItem === 'facebook_bot'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='facebook messenger' />
                    </Menu.Item>

                    <Menu.Item
                        name='telegram_bot'
                        active={activeItem === 'telegram_bot'}
                        onClick={this.handleItemClick}
                        href='https://t.me/Tikshuv1bot'
                        target="_blank"
                    >

                        <Icon name='telegram' />
                    </Menu.Item>

                    <Menu.Item
                        name='whatsapp_bot'
                        active={activeItem === 'whatsapp_bot'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='whatsapp' />
                    </Menu.Item>
                </Menu>
            </Grid.Row>
        </Grid>
            ;
    }
}




export default ContactUs;

