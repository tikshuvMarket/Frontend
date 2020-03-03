import React from "react";
import { Card, Grid, Button, Icon, Segment } from "semantic-ui-react";
function Assortment(props) {
  const extra = (
    <Button basic color="green">
      הוסף לסל המיונים
    </Button>
  );

  const ProgrammingCourse = () => (
    <Card
      style={{ direction: "rtl" }}
      image="./programmingCourse.jpg"
      header="קורס תכנות"
      description="קורס תכנות בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה "
      extra={extra}
    />
  );

  const MagenCyberCourse = () => (
    <Card
      style={{ direction: "rtl" }}
      image="./programmingCourse.jpg"
      header="קורס מגן סייבר"
      description="קורס מגן סייבר בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה "
      extra={extra}
    />
  );

  const QaCourse = () => (
    <Card
      style={{ direction: "rtl" }}
      image="./programmingCourse.jpg"
      header="קורס בודק תוכנה"
      description="קורס בודק תוכנה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה "
      extra={extra}
    />
  );

  const DevOpsCourse = () => (
    <Card
      style={{ direction: "rtl" }}
      image="./programmingCourse.jpg"
      header="קורס DevOps"
      description="קורס DevOps בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה "
      extra={extra}
    />
  );

  return (
    <Grid padded>
      <Grid.Row columns={1} style={{ color: "white", direction: "rtl" }}>
        <Grid.Column>
          <h1>סל המיונים</h1>
          <p>
            ברוכים הבאים לסל המיונים! כאן תוכלו לקרוא על התפקידים השונים באגף
            התקשוב ותוכלו לבקש מיונים עבורם. על כל תפקיד שמעניין אותך, תוסיף
            אותו לסל המיונים שלך וכשסיימת לחץ על "הגשת בקשות למיונים".
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column>
          <MagenCyberCourse />
        </Grid.Column>
        <Grid.Column>
          <ProgrammingCourse />
        </Grid.Column>
        <Grid.Column>
          <QaCourse />
        </Grid.Column>
        <Grid.Column>
          <DevOpsCourse />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="right">
          <Button
            content="!הגש בקשות למיונים"
            icon="shopping cart"
            labelPosition="right"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Assortment;
