import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Home = () => {
  return (
    <Grid centered columns={3}>
      <Grid.Row>
        <h1 style={{ color: "white", fontFamily: "Arimo", fontSize: "80px" }}>
          <strong>הכירו את אגף התקשוב</strong>
        </h1>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>
          <Image
            size="small"
            src="https://upload.wikimedia.org/wikipedia/he/thumb/6/68/Computer_Service_Directorate.svg/1200px-Computer_Service_Directorate.svg.png"
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <p
            style={{
              color: "white",
              textAlign: "right",
              fontSize: "20px",
              background: "black",
              direction: "rtl",
              fontFamily: "Arimo",
              boxShadow: "0px 0px 46px 48px rgba(0,0,0,0.95)"
            }}
          >
            <strong>
              חיל הקשר והתקשוב (חי"ק) החל את פעילותו עוד בימי ההגנה, טרם הקמת
              המדינה. עיקר עיסוק החיל בשעת לחימה - תכלול ומתן כלים נרחבים למפקד
              לנהל את הקרב בצורה הטובה ביותר.
            </strong>
            <br />
            <br />
            בשני העשורים האחרונים, לאור התקדמות הטכנולוגיה, הפך החיל למרכזי
            ומוביל. החיל אחראי על כל הפעלת הקשר, המחשבים והתקשורת של כוחות צה"ל
            בשדה הקרב בזרועות השונות.
            <br />
            <br />
            המשרתים בחיל אמונים על פיתוח תוכנה לכלל יחידות הצבא, אחריות כוללת על
            ההצפנה בצה"ל, הגנת הרשת (סייבר), תקשורת לוויינים והקשר בשדה הקרב.
            <br />
            <br />
            בשנת 2003, עם הקמת אגף התקשוב הוכפף אליו החיל, אך בשנת 2005, כחלק
            משינוי ארגוני נרחב במפקדת זרוע היבשה, הוכפפה אליה מפקדת החיל יחד עם
            חיל החימוש, חיל הלוגיסטיקה וחיל השלישות. במהלך שנת 2007 הוחלט להחזיר
            את החיל לאגף התקשוב, ומאז שיושמה ההחלטה שנה לאחר מכן, מהווה החיל חלק
            בלתי נפרד ומרכזי בחיל הקשר ואגף התקשוב.
            <br />
            <br />
            כיום מהווה החיל סמן ימני לטכנולוגיה בצה"ל ואנשיו, גברים ונשים כאחר,
            שייכם לקבוצה נבחרת העוסקת בתקשורת, תוכנה, מחשוב, לווייניות והגנה
            במרחב הסייבר.
            <br />
            <br />
            בראש החיל עומד "קצין הקשר והתקשוב הראשי" (קשר"ר) בדרגת תת-אלוף.
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Image
            size="small"
            style={{ float: "right" }}
            src="https://upload.wikimedia.org/wikipedia/he/thumb/6/68/Computer_Service_Directorate.svg/1200px-Computer_Service_Directorate.svg.png"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
