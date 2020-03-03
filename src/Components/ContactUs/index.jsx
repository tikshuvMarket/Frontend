import React, { Component } from "react";

import { Menu, Icon, Grid, Header, Image } from "semantic-ui-react";
import MessageComp from "./Message_com";

class ContactUs extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Row style={{ height: "50px" }}></Grid.Row>
        <Grid.Row>
          <Grid.Column
            style={{ minWidth: 350, maxWidth: 350, aligned: "left" }}
          >
            <MessageComp
              items={[
                { text: "developed by:" },
                {
                  name: "Yonatan Edelshtain",
                  description: "desc",
                  picture: "./avatar_dor.png"
                },
                {
                  name: "Idan Tal-Or",
                  description: "desc",
                  picture: "./avatar_roy.png"
                },
                {
                  name: "Dan Godtanshtat",
                  description: "desc",
                  picture: "./avatar_omer.png"
                },
                {
                  name: "Yarden Ben-Simon",
                  description: "desc",
                  picture: "./avatar_omer.png"
                }
              ]}
            />
          </Grid.Column>
          <Grid.Column
            style={{ minWidth: 450, maxWidth: 450, aligned: "center" }}
          >
            <Header as="h1" color="teal" textAlign="center">
              צרו קשר <Image key="contact_header1_img" src="./logo1.png" />
            </Header>

            <MessageComp
              items={[
                { text: "developed by:" },
                {
                  name: "Dor Zion",
                  description: "desc",
                  picture: "./avatar_dor.png"
                },
                {
                  name: "Roy Goldenberg",
                  description: "desc",
                  picture: "./avatar_roy.png"
                },
                {
                  name: "Omer Hindy",
                  description: "desc",
                  picture: "./avatar_omer.png"
                }
              ]}
            />
          </Grid.Column>
          <Grid.Column
            style={{ minWidth: 350, maxWidth: 350, aligned: "right" }}
          >
            <MessageComp
              items={[
                { text: "developed by:" },
                {
                  name: "Yarin Shaked",
                  description: "desc",
                  picture: "./avatar_dor.png"
                },
                {
                  name: "Ofir Kedem",
                  description: "desc",
                  picture: "./avatar_roy.png"
                }
              ]}
            />
            <MessageComp
              items={[
                { text: "developed by:" },
                {
                  name: "Elia Amar",
                  description: "desc",
                  picture: "./avatar_dor.png"
                },
                {
                  name: "Yonatan Harmatz",
                  description: "desc",
                  picture: "./avatar_roy.png"
                }
              ]}
            />
          </Grid.Column>
          <Menu
            icon
            vertical
            fixed={"right"}
            style={{ maxHeight: 240, minHeight: 120, marginTop: 175 }}
          >
            <Menu.Item
              name="facebook_bot"
              active={activeItem === "facebook_bot"}
              onClick={this.handleItemClick}
            >
              <Icon name="facebook messenger" />
            </Menu.Item>

            <Menu.Item
              name="telegram_bot"
              active={activeItem === "telegram_bot"}
              onClick={this.handleItemClick}
              href="https://t.me/Tikshuv1bot"
              target="_blank"
            >
              <Icon name="telegram" />
            </Menu.Item>

            <Menu.Item
              name="whatsapp_bot"
              active={activeItem === "whatsapp_bot"}
              onClick={this.handleItemClick}
            >
              <Icon name="whatsapp" />
            </Menu.Item>
            <Menu.Item
              name="facebook"
              active={activeItem === "facebook"}
              onClick={this.handleItemClick}
              href="https://www.facebook.com/TikshuvIDF"
              target="_blank"
            >
              <Icon name="facebook" />
            </Menu.Item>
            <Menu.Item
              name="website"
              active={activeItem === "website"}
              onClick={this.handleItemClick}
              href="https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99%D7%9D/%D7%90%D7%92%D7%A3-%D7%94%D7%AA%D7%A7%D7%A9%D7%95%D7%91-%D7%95%D7%94%D7%94%D7%92%D7%A0%D7%94-%D7%91%D7%A1%D7%91%D7%A8/"
              target="_blank"
            >
              <Icon name="globe" />
            </Menu.Item>
            <Menu.Item
              name="email"
              active={activeItem === "email"}
              onClick={this.handleItemClick}
              href="mailto: iturik@idf.gov.il"
            >
              <Icon name="envelope outline" />
            </Menu.Item>
          </Menu>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ContactUs;
