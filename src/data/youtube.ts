interface IVideo {
  title: string;
  date: string;
  link: string;
  embedded: string;
  description: string;
}

export const youtubeVideos: IVideo[] = [
  { 
    title: 'Holding Rivers - Oh Hiroshima (Multi-Instrumental Cover)', 
    date: '25/05/2020', 
    description: `My multi-track cover of Holding Rivers by Oh Hiroshima. Enjoy! \n\n Sorry for the video glitches. `, 
    embedded: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oNX4l3-6OVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
    link: 'https://www.youtube.com/watch?v=oNX4l3-6OVg' 
  },
  { 
    title: 'DIY e-drum with Arduino', 
    date: '07/06/2016', 
    description: `My homemade electronic drum kit made with Arduino which I contributed to the open source project MicroDrum (eventually it turned out into an official parallel MicroDrum project: TeensyDrum!) `, 
    embedded: `<div><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpedroknup%2Fvideos%2F1029683350454301%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></div>`, 
    link: 'https://www.youtube.com/watch?v=6KZX-v6N1KI' 
  },
  { 
    title: 'DIY Brooder with Arduino', 
    date: '18/11/2016', 
    description: `Video of a homemade brooder that I did with my friend Guilherme Pontello. We used Arduino Uno
  Dimmer, Lamp 60w, Sensor DHT1, 2 small pc coolers, LCD Nokia 5110, Styrofoam box 21L `, 
    embedded: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6KZX-v6N1KI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
    link: 'https://www.youtube.com/watch?v=6KZX-v6N1KI' 
  },
  { 
    title: 'Solar System Builder', 
    date: '23/11/2015', 
    description: `Developed in C# with OpenGL. Project for Algorithm and data structures, Computer Engineer - UNIFEI `, 
    embedded: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OyM2KwMogv0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
    link: 'https://www.youtube.com/watch?v=OyM2KwMogv0' 
  },

];
