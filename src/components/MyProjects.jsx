import React, { useEffect } from 'react'

function MyProjects() {
  useEffect(()=>{
    window.scrollTo({top:0});
  })
  const pj = [
    {
      id: 1,
      title: "zenflavor",
      image:
        "https://i.pinimg.com/originals/21/fe/88/21fe88004c7ff667509290cfd61e65df.jpg",
      link1: "https://skehargit.github.io/ZenFlavor_Reastaurant/",
      link2: "https://github.com/skehargit/ZenFlavor_Reastaurant",
      type: "featured",
      description:
        "🍽️ ZenFlavor a cool frontend design created by me🎨. It's not just a pretty face; it's responsive and comes with some cool animations! 📱",
    },
    {
      id: 2,
      title: "sudoku",
      image:
        "https://i.pinimg.com/originals/14/ac/91/14ac910cddd7da90f6e5259d14ae0614.jpg",
      link1: "https://skehargit.github.io/sudoku/",
      link2: "https://github.com/skehargit/sudoku",
      type: "featured",
      description:
        "Developed a Sudoku game using JavaScript. with simple design there are easy question of sudoku so try it once.📱",
    },
    {
      id: 3,
      title: "Music Player",
      image:
        "https://i.pinimg.com/originals/08/7d/1d/087d1ddd95dae0a3547d2b1e5a2ad47d.jpg",
      link1: "https://skehargit.github.io/music-player/",
      link2: "https://github.com/skehargit/music-player",
      type: "normal",
      description: "A small music player project with responsive design.📱",
    },
    {
      id: 4,
      title: "CatPhotos",
      image: 'https://i.pinimg.com/originals/ee/c5/be/eec5bed12807e1d385d3c695c04f5db8.jpg',
      link1:'https://skehargit.github.io/catphotos/',
      link2:'https://github.com/skehargit/catphotos',
      type: 'normal',
      description: "created a web page using HTML and CSS, following lessons from FreeCodeCamp.",
    },
    {
      id: 5,
      title: "TicTacToe",
      image: 'https://i.pinimg.com/originals/5d/7b/e7/5d7be733edc94efbf5aa43e95ce5decc.jpg',
      link1:'https://skehargit.github.io/tictactoe/',
      link2:'https://github.com/skehargit/tictactoe',
      type: 'normal',
      description: "tic tac toe game project, created with HTML, CSS, and JavaScript! With a simple and intuitive interface.",
    },
    {
      id: 6,
      title: "valentine",
      image: 'https://i.pinimg.com/originals/04/97/06/0497067e57f97f9bb66434a6ae5b5362.jpg',
      link1:'https://skehargit.github.io/valentine/',
      link2:'https://github.com/skehargit/valentine',
      type: 'normal',
      description: "Celebrate love with my Valentine project! 💖 Built using HTML, CSS, and JavaScript, it's a responsive creation that adapts to any screen size.",
    },
    {
      id: 7,
      title: "portfolio",
      image: 'https://i.pinimg.com/originals/ac/21/a3/ac21a3abaaac0120f3cd03c87f9ad899.jpg',
      link1:'https://skehargit.github.io/sudhansu-sekhar-behera-fullStack-developer/',
      link2:'https://github.com/skehargit/sudhansu-sekhar-behera-fullStack-developer',
      type: 'normal',
      description: "",
    },
    {
      id: 8,
      title: "portfolio",
      image: 'https://i.pinimg.com/originals/f6/ac/ba/f6acbac53c7d3a20a3d96ab777aed309.jpg',
      link1:'https://skehargit.github.io/sudhansu-portfolio/',
      link2:'https://github.com/skehargit/sudhansu-portfolio',
      type: 'normal',
      description: "I've created a platform to showcase my skills and projects.",
    },
    {
      id: 9,
      title: "QrGenerator & TextToSpeech",
      image: 'https://i.pinimg.com/originals/75/1d/19/751d198b24a3ab815508ca3b1db9d88d.jpg',
      link1:'https://skehargit.github.io/QR_Generator_Text_to_Speech/',
      link2:'https://github.com/skehargit/QR_Generator_Text_to_Speech',
      type: 'normal',
      description: "🌐 Created a QR Code Generator: Make QR codes for any text or URL! 🤖-🔊 Text-to-Voice Converter: Turn text into speech! 🗣️",
    },
    {
      id: 10,
      title: "PixelFind",
      image: 'https://i.pinimg.com/originals/ee/8f/17/ee8f1750a79a9a5795fac7be8f32384f.jpg',
      link1:'https://skehargit.github.io/PixelFind/',
      link2:'https://github.com/skehargit/PixelFind',
      type: 'normal',
      description: "Just created a new project called Pixelfind! 🖼️🔍 Pixelfind is an awesome image search web page using @pexels API. 🌐Responsive design and small animations make it a delight to use.",
    },
    {
      id: 11,
      title: "Dice Game",
      image: 'https://i.pinimg.com/originals/f5/c1/d0/f5c1d08915cb2cc3f861964dee4d0094.jpg',
      link1:'https://skehargit.github.io/Roll_Dice/',
      link2:'https://github.com/skehargit/Roll_Dice',
      type: 'normal',
      description: "A simple dice🎲 game I crafted during my @udemy journey using HTML, CSS, and JavaScript.🖥️✨",
    },
    {
      id: 12,
      title: "StarBackground",
      image: 'https://i.pinimg.com/originals/47/2c/d3/472cd371c73c09db9ad58729040ea9bf.jpg',
      link1:'https://skehargit.github.io/star-background/',
      link2:'https://github.com/skehargit/star-background',
      type: 'normal',
      description: "🌟 I created a cool design using HTML, CSS, and JavaScript! 🎨 The background looks awesome, and I spiced things up by changing the cursor design when you hover over the text. 🚀 You can even customize the cursor to your liking! ✨",
    },
    {
      id: 13,
      title: "Care race",
      image: 'https://i.pinimg.com/originals/f0/9d/98/f09d98f6503687a7977360eb963ab30c.jpg',
      link1:'https://skehargit.github.io/Car-Game/',
      link2:'https://github.com/skehargit/Car-Game',
      type: 'normal',
      description: "I tried to recreate my childhood favorite game; it's not perfect, but I'm proud of it! 🎮 Despite bugs, the joy of making and playing it is priceless. 🐛😊 Reliving memories through code is magical.",
    },
    {
      id: 14,
      title: "Infinite Scrolling Animation",
      image: 'https://i.pinimg.com/originals/e1/76/07/e176072505d771a62f3268183da02ae0.jpg',
      link1:'https://skehargit.github.io/infinite-scrolling-animation/',
      link2:'https://github.com/skehargit/infinite-scrolling-animation',
      type: 'normal',
      description: "HTML/CSS infinite scroller, a small project, combines smooth animation and minimalist design.",
    },
    {
      id: 15,
      title: "Text to Emoji",
      image: 'https://i.pinimg.com/originals/de/67/c8/de67c8633652ebf70f832d0a238a01eb.jpg',
      link1:'https://skehargit.github.io/text-to-emoji/',
      link2:'https://github.com/skehargit/text-to-emoji',
      type: 'featured',
      description: "It is a text to emoji converter with responsive design.",
    },
    {
      id: 16,
      title: "Survey Page",
      image: 'https://i.pinimg.com/originals/45/69/68/4569683851ad8e6a965d87ff249f535a.jpg',
      link1:'https://skehargit.github.io/survey-form/',
      link2:'https://github.com/skehargit/survey-form',
      type: 'normal',
      description: "completed a survey page project from @freeCodeCamp, enhancing my skills .",
    },
    {
      id: 17,
      title: "Cartoon Art",
      image: 'https://i.pinimg.com/originals/b1/c4/f5/b1c4f5f6336687ff0b40dcde8bb6c676.jpg',
      link1:'https://skehargit.github.io/cartoon-art/',
      link2:'https://github.com/skehargit/cartoon-art',
      type: 'normal',
      description: "Check out my cute cartoon girl art, created entirely with HTML and CSS! With a bit of creativity and some CSS magic I create this Art.",
    },
    {
      id: 18,
      title: "Random Password generator",
      image: 'https://i.pinimg.com/originals/83/68/e9/8368e9ce5a4642a865bd3e96a7bb0d31.jpg',
      link1:'https://skehargit.github.io/randomPasswordGenerator/',
      link2:'https://github.com/skehargit/randomPasswordGenerator',
      type: 'featured',
      description: "Random-Password-Generator is a simple yet effective project . With this tool, you can create strong, unique passwords with just one click. Try it out and see for yourself!",
    },
  ];
  return (
    <div className='min-h-screen h-fit bg-black w-full  relative py-10'>
      <div className="h-fit overflow-hidden columns-4 max-[1024px]:columns-2 max-[500px]:columns-1 gap-2">
          {pj.map((item, idx) => (
            <div
              key={`${idx}projectsSection${item.title}`}
              className="w-full h-full break-inside-avoid-column text-white border border-zinc-700 rounded-sm p-2 mb-2"
            >
              <div className="img">
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className="title font-semibold text-green-600">
                {item.title}
              </h1>
              <div className="flex flex-col justify-between h-fit">
                <p className="disc text-sm text-zinc-400 py-3">
                  {item.description}
                </p>
                <div className="btns flex item-center gap-2 ">
                  <a
                    href={item.link2}
                    target="_blank"
                    className="border rounded-lg  border-zinc-700 overflow-hidden"
                  >
                    <button className="h-[35px] w-[100px] flex flex-col">
                      <div
                        className="w-full h-full"
                      >
                        <div className=" w-full h-full flex items-center justify-center">
                          Git Repo
                        </div>
                        <div className=" w-full h-full">Git Repo</div>
                      </div>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    className="border rounded-lg  border-zinc-700 overflow-hidden"
                  >
                    <button className=" h-[35px] w-[100px] flex flex-col">
                      <div
                        className="w-full h-full"
                      >
                        <div className=" w-full h-full flex items-center justify-center">
                          Live link
                        </div>
                        <div className=" w-full h-full">Live link</div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyProjects