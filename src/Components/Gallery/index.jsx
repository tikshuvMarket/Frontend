import React from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/88011804_2763715330371334_3004557467272085504_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQn4xjNfTvv7rWl9KBtsgI862vTXDDyYWf1Uuurdx-EXA91mK7kqZRhVZ94EQtXjwWg&_nc_ht=scontent.fhfa2-2.fna&oh=143bc5685256807548701c9b2e3d2caa&oe=5EB988E8",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/88011804_2763715330371334_3004557467272085504_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQn4xjNfTvv7rWl9KBtsgI862vTXDDyYWf1Uuurdx-EXA91mK7kqZRhVZ94EQtXjwWg&_nc_ht=scontent.fhfa2-2.fna&oh=143bc5685256807548701c9b2e3d2caa&oe=5EB988E8"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/87572197_2759002497509284_8191559779542368256_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQkYg250eyJ-aL-b0qpr7oQ8HswSOZuWrIJN0HlaTNGiKFxLYlRJNjNdjw6PLHOHuw8&_nc_ht=scontent.fhfa2-2.fna&oh=d1008a89f3989866554f80d5fbee7763&oe=5EE698C4",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/87572197_2759002497509284_8191559779542368256_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQkYg250eyJ-aL-b0qpr7oQ8HswSOZuWrIJN0HlaTNGiKFxLYlRJNjNdjw6PLHOHuw8&_nc_ht=scontent.fhfa2-2.fna&oh=d1008a89f3989866554f80d5fbee7763&oe=5EE698C4"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/84476257_2752458858163648_3919730619122188288_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQkt2GH6vKn2w69KFjXkpgVH0ZmhV9af8gMAuOoUqTwdniOSfok9t5Uf6whU9upA-4U&_nc_ht=scontent.fhfa2-2.fna&oh=ecb8ff63171a74fbc3ddbdefbe3c1177&oe=5EEC0B9E",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/84476257_2752458858163648_3919730619122188288_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQkt2GH6vKn2w69KFjXkpgVH0ZmhV9af8gMAuOoUqTwdniOSfok9t5Uf6whU9upA-4U&_nc_ht=scontent.fhfa2-2.fna&oh=ecb8ff63171a74fbc3ddbdefbe3c1177&oe=5EEC0B9E"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/87362255_2744326785643522_2300070431433949184_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQnp-RcjmXu3LlB71bmMQio3fHNGbJWbSCG0ewbxMkn8u9FeWiWjHuG2qFIz5O5EmUc&_nc_ht=scontent.fhfa2-2.fna&oh=b04a9d186072538ecd11465a29f24607&oe=5EFD50AE",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/87362255_2744326785643522_2300070431433949184_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQnp-RcjmXu3LlB71bmMQio3fHNGbJWbSCG0ewbxMkn8u9FeWiWjHuG2qFIz5O5EmUc&_nc_ht=scontent.fhfa2-2.fna&oh=b04a9d186072538ecd11465a29f24607&oe=5EFD50AE"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/85232251_2729986777077523_7395374779617771520_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_oc=AQlvILXi5Mz7hWUBrly-oNmd632KJjkk38so3ZniJnpzUw2YphLd73je93kBhLLxko4&_nc_ht=scontent.fhfa2-2.fna&oh=b5720c60e794f58ba3288ad6240a3428&oe=5EF74345",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/85232251_2729986777077523_7395374779617771520_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_oc=AQlvILXi5Mz7hWUBrly-oNmd632KJjkk38so3ZniJnpzUw2YphLd73je93kBhLLxko4&_nc_ht=scontent.fhfa2-2.fna&oh=b5720c60e794f58ba3288ad6240a3428&oe=5EF74345"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/85178951_2728520240557510_1011055638148546560_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQmbRy5uBSmMLkGoIWb9DAb9bBW6WuA05ZXJr2NEQbXG8pjKND3vxY4UiELdcm1TSz0&_nc_ht=scontent.fhfa2-2.fna&oh=62407b352e8c3f594e2c7298103d8d1a&oe=5F02AEE7",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/85178951_2728520240557510_1011055638148546560_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQmbRy5uBSmMLkGoIWb9DAb9bBW6WuA05ZXJr2NEQbXG8pjKND3vxY4UiELdcm1TSz0&_nc_ht=scontent.fhfa2-2.fna&oh=62407b352e8c3f594e2c7298103d8d1a&oe=5F02AEE7"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/84492547_2728520120557522_2910257573343002624_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQmkryNeQcOUmt1HB4XoJR5CED_y-cPCyiGf4dh6dH3K8SaT9STGPatn952GyezUn64&_nc_ht=scontent.fhfa2-2.fna&oh=96047457f872438764e11c221a51abf8&oe=5EFC4BFC",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/84492547_2728520120557522_2910257573343002624_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQmkryNeQcOUmt1HB4XoJR5CED_y-cPCyiGf4dh6dH3K8SaT9STGPatn952GyezUn64&_nc_ht=scontent.fhfa2-2.fna&oh=96047457f872438764e11c221a51abf8&oe=5EFC4BFC"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/86471432_2726172760792258_2527146048158171136_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQkipzx_6Dr4hYweBj8ZPbdidglyP0qZPA-MB0jRfQF2pqQ0xawt2Yox5q4KUNsC4CE&_nc_ht=scontent.fhfa2-2.fna&oh=14640f4aaf4397d269b50b00d2db64b5&oe=5EFA0F5C",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/86471432_2726172760792258_2527146048158171136_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQkipzx_6Dr4hYweBj8ZPbdidglyP0qZPA-MB0jRfQF2pqQ0xawt2Yox5q4KUNsC4CE&_nc_ht=scontent.fhfa2-2.fna&oh=14640f4aaf4397d269b50b00d2db64b5&oe=5EFA0F5C"
  },
  {
    original:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/86183466_2725909767485224_575004423382630400_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_oc=AQmz0q0r3ARij9ee9MczKG7a0ZhzWoK4xzH1zosyX_pFVErSLiqvGl66QNMlq1pDMlQ&_nc_ht=scontent.fhfa2-2.fna&oh=c9d6dce6de1795b08a766b02f60871ea&oe=5EE7BE7E",
    thumbnail:
      "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/86183466_2725909767485224_575004423382630400_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_oc=AQmz0q0r3ARij9ee9MczKG7a0ZhzWoK4xzH1zosyX_pFVErSLiqvGl66QNMlq1pDMlQ&_nc_ht=scontent.fhfa2-2.fna&oh=c9d6dce6de1795b08a766b02f60871ea&oe=5EE7BE7E"
  }
];

const Gallery = () => {
  return <ImageGallery items={images} />;
};

export default Gallery;
