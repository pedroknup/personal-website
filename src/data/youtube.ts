interface IMedia {
  title: string;
  date: string;
  link: string;
  content: string;
  description: string;
}

export const youtubeVideos: IMedia[] = [
  {
    title: 'Self Portrait',
    date: 'Mar/2021',
    description: `Self portrait. Oil on canvas.`,
    content:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d397e3-81ed-4bcc-85cb-ac124314ba7d/deucxil-af52410a-6909-4467-82a8-b8c7b86f0218.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZDM5N2UzLTgxZWQtNGJjYy04NWNiLWFjMTI0MzE0YmE3ZFwvZGV1Y3hpbC1hZjUyNDEwYS02OTA5LTQ0NjctODJhOC1iOGM3Yjg2ZjAyMTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gah4xYfRg-v5UK2D4OLBRR7cRnOWu6kqK2JHNgWehQ4"/>',
    link: 'https://www.deviantart.com/pedroknup/art/Self-Portrait-897518253'
  },
  {
    title: 'Cabrobró - Tia Nastácia (multi-instrumental cover)',
    date: 'Feb/2020',
    description: `My multi-track cover of Cabrobró by Tia Nastácia 🇧🇷. Enjoy!`,
    content:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/pHK80FSWltw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    link: 'https://www.youtube.com/watch?v=pHK80FSWltw'
  },
  {
    title: 'Equalize - Pitty (multi-instrumental cover)',
    date: 'Nov/2020',
    description: `My multi-track cover of Equalize by Pitty 🇧🇷. Enjoy!`,
    content:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/KGD4gVhp3CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    link: 'https://www.youtube.com/watch?v=KGD4gVhp3CM'
  },
  {
    title: 'Mixed Media Portrait',
    date: 'Oct/2020',
    description: `For this one, I used Posca markers, charcoal and graphite. I really like this one`,
    content:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d397e3-81ed-4bcc-85cb-ac124314ba7d/deucxjs-14886e56-6872-45cd-92cc-d83b52623361.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZDM5N2UzLTgxZWQtNGJjYy04NWNiLWFjMTI0MzE0YmE3ZFwvZGV1Y3hqcy0xNDg4NmU1Ni02ODcyLTQ1Y2QtOTJjYy1kODNiNTI2MjMzNjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.okoT_GIrCD7THdUr5slsCw3ii2D_YMo2VUxX80tOazU"/>',
    link: 'https://www.deviantart.com/pedroknup/art/Graphite-Portrait-897518296'
  },
  {
    title: 'Portrait study',
    date: 'Jul/2020',
    description: `A quick digital portrait study`,
    content:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d397e3-81ed-4bcc-85cb-ac124314ba7d/de1ork3-2afeff2c-910a-4a6a-b409-161bee45e4a9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZDM5N2UzLTgxZWQtNGJjYy04NWNiLWFjMTI0MzE0YmE3ZFwvZGUxb3JrMy0yYWZlZmYyYy05MTBhLTRhNmEtYjQwOS0xNjFiZWU0NWU0YTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hlj4vRSB_D4UafnK-sLJfgy5LJTtBCsDwDMRC6WZBUQ"/>',
    link: 'https://www.deviantart.com/pedroknup/art/Ketosaurr-Portrait-849361539'
  },
  {
    title: 'Portrait study',
    date: 'Jul/2020',
    description: `Another digital portrait study`,
    content:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d397e3-81ed-4bcc-85cb-ac124314ba7d/de1osns-2f41db8b-49c2-4cbb-90b9-4bda16180c0b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZDM5N2UzLTgxZWQtNGJjYy04NWNiLWFjMTI0MzE0YmE3ZFwvZGUxb3Nucy0yZjQxZGI4Yi00OWMyLTRjYmItOTBiOS00YmRhMTYxODBjMGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jMo_Fq8rRUS6Mb5Fm8i0wYug-qPvym94rdM7K8-1i8U"/>',
    link: 'https://www.deviantart.com/pedroknup/art/Quick-study-849362968'
  },
  {
    title: 'Portrait study',
    date: 'Jul/2020',
    description: `Another digital portrait study`,
    content:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d397e3-81ed-4bcc-85cb-ac124314ba7d/de1osq0-39e759f8-cc20-4241-8067-26e53dc43141.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZDM5N2UzLTgxZWQtNGJjYy04NWNiLWFjMTI0MzE0YmE3ZFwvZGUxb3NxMC0zOWU3NTlmOC1jYzIwLTQyNDEtODA2Ny0yNmU1M2RjNDMxNDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SeyAv-bb72Ve5XskMDL__9uKtbn3Y8gLdGhPcOg0Zq8"/>',
    link: 'https://www.deviantart.com/pedroknup/art/Another-Portrait-study-P-849363048'
  },
  {
    title: 'Holding Rivers - Oh Hiroshima (multi-instrumental cover)',
    date: 'May/2020',
    description: `My multi-track cover of Holding Rivers by Oh Hiroshima. Enjoy! \n\n Sorry for the video glitches. `,
    content:
      '<iframe style="max-width: 100%" width="560" height="315" src="https://www.youtube.com/embed/oNX4l3-6OVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    link: 'https://www.youtube.com/watch?v=oNX4l3-6OVg'
  },
  {
    title: 'Digital Portrait',
    date: 'Dec/2017',
    description: `This is probably the portrait that took the longest for me to do. The funny thing is that the model I used for this portrait is quite famous in Brazil and somehow it reached her fan base, getting over a thousand likes on my social media.`,
    content:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d397e3-81ed-4bcc-85cb-ac124314ba7d/deucyw5-afa2cd38-43b6-462d-b7cf-2377532c6e27.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZDM5N2UzLTgxZWQtNGJjYy04NWNiLWFjMTI0MzE0YmE3ZFwvZGV1Y3l3NS1hZmEyY2QzOC00M2I2LTQ2MmQtYjdjZi0yMzc3NTMyYzZlMjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nI6N4aRtMiAB5XFOT7znzCZst9S3kXQcift_gu4PVPw"/>',
    link:
      'https://www.deviantart.com/pedroknup/art/Mariana-Nolasco-Portrait-897520037?ga_submit_new=10%3A1636552551'
  },
  {
    title: 'DIY e-drum with Arduino',
    date: 'Jul/2016',
    description: `My homemade electronic drum kit made with Arduino that I contributed to the open source project MicroDrum that eventually turned out into an official parallel MicroDrum project: TeensyDrum! This project has been widely used by the DIY e-drum community.`,
    content: `<div><iframe style="max-width: 100%" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpedroknup%2Fvideos%2F1029683350454301%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></div>`,
    link: 'https://www.facebook.com/pedroknup/videos/1029683350454301/'
  },
  {
    title: 'DIY Brooder with Arduino',
    date: 'Nov/2016',
    description: `Video of a homemade brooder that I did with my friend Guilherme Pontello. We used an Arduino Uno
  Dimmer, Lamp 60w, Sensor DHT1, 2 small pc coolers, LCD Nokia 5110, Styrofoam box 21L `,
    content:
      '<iframe style="max-width: 100%" width="560" height="315" src="https://www.youtube.com/embed/6KZX-v6N1KI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    link: 'https://www.youtube.com/watch?v=6KZX-v6N1KI'
  },
  {
    title: 'Solar System Builder',
    date: 'Nov/2015',
    description: `Developed in C# with OpenGL. Project for Algorithm and data structures, Computer Engineer - UNIFEI `,
    content:
      '<iframe style="max-width: 100%" width="560" height="315" src="https://www.youtube.com/embed/OyM2KwMogv0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    link: 'https://www.youtube.com/watch?v=OyM2KwMogv0'
  }
];
