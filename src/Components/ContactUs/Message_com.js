import React from "react";
import { Image, List, Message } from "semantic-ui-react";

function MessageComp(props) {
  const items = props.items;
  let list_i = [];
  let list = [];
  let msg = [];
  for (let i = 1; i < items.length; i++) {
    list_i.push(
      <List.Item>
        <Image avatar src={items[i].picture} />
        <List.Content>
          <List.Header>{items[i].name}</List.Header>
          {items[i].description}
        </List.Content>
      </List.Item>
    );
  }
  list.push(<List horizontal>{list_i}</List>);
  msg.push(
    <Message>
      {items[0].text}
      {<br />}
      {list}
    </Message>
  );

  return msg;
}

export default MessageComp;
