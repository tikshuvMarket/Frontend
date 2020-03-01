import React, {} from "react";
import {Image,List, Message} from "semantic-ui-react";

function MessageComp (props) {
    const items = props.items;
    let list_i=[];
    let list=[];
    let msg=[];
    for (let i=1;i<items.length;i++){
        list_i.push(<List.Item><Image avatar src={items[i].picture} /><List.Content><List.Header>{items[i].name}</List.Header>{items[i].description}</List.Content></List.Item>)
    }
    list.push(<List horizontal>{list_i}</List> )
    msg.push(<Message>{items[0].text}{<br/>}{list}</Message>);

    return msg;
}

export default MessageComp;

/*<Message>
    developed by :
    <List horizontal>
        <List.Item>
            <Image avatar src='./avatar_dor.png' />
            <List.Content>
                <List.Header>Dor Zion</List.Header>
                (description)
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/avatar/small/christian.jpg' />
            <List.Content>
                <List.Header>Omer Hindi</List.Header>
                (description)
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/avatar/small/matt.jpg' />
            <List.Content>
                <List.Header>Roy Goldenberg</List.Header>
                (description)
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/avatar/small/matt.jpg' />
            <List.Content>
                <List.Header>Shimon Elfassy</List.Header>
                (description)
            </List.Content>
        </List.Item>
    </List>
</Message>
*/
