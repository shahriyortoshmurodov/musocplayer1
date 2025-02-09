let musics = [
    {
      id: 1,
      singer: 'SOMEone',
      img: './assets/img/2706009.png',
      music: './assets/music/adin.mp3',
      title: 'Adin',
    },
    {
      id: 2,
      singer: 'someone',
      img: './assets/img/2706009.png',
      music: './assets/music/antek.mp3',
      title: 'Antek',
    },
    {
      id: 3,
      singer: 'Abrobey',
      img: './assets/img/2706009.png',
      music: './assets/music/avrobey qimmat dunyo.mp3',
      title: 'Avrobey - Qimmat Dunyo',
    },
    {
      id: 4,
      singer: '',
      img: './assets/img/2706009.png',
      music: './assets/music/bas.mp3',
      title: 'Bas',
    },
    {
      id: 5,
      singer: 'unknown',
      img: './assets/img/2706009.png',
      music: './assets/music/boyna.mp3',
      title: 'Boyna',
    },
    {
      id: 6,
      singer: 'Unknown',
      img: './assets/img/2706009.png',
      music: './assets/music/dolya$.mp3',
      title: 'Dolya$',
    },
    {
      id: 7,
      singer: 'Jaloliddin',
      img: './assets/img/2706009.png',
      music: './assets/music/jaloliddin.mp3',
      title: "shunday o'tib ketmasmiz",
    },
    {
      id: 8,
      singer: 'Unknown',
      img: './assets/img/2706009.png',
      music: './assets/music/maladoy.mp3',
      title: 'Maladoy',
    },
    {
      id: 9,
      singer: 'Unknown',
      img: './assets/img/2706009.png',
      music: './assets/music/pulmolnda.mp3',
      title: 'Pulmolnda',
    },
  ];
  
  
  let count = 0;
  
  let pauseBtn = document.querySelector('.pause');
  let playBtn = document.querySelector('.play');
  let music_list = document.querySelector('.music-list');
  
  let singer = document.querySelector('.singer');
  let musicTitle = document.querySelector('.music-title');
  let heroImg = document.querySelector('.hero-img');
  let audio = document.querySelector('.audio');
  let forward = document.querySelector('.forward');
  let backward = document.querySelector('.backward');
  
  singer.textContent = musics[0].singer;
  musicTitle.textContent = musics[0].title;
  heroImg.src = musics[0].img;
  audio.src = musics[0].music;
  
  pauseBtn.addEventListener('click', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
    audio.pause();
  });
  
  playBtn.addEventListener('click', () => {
    pauseBtn.style.display = 'block';
    playBtn.style.display = 'none';
    audio.play();
  });
  
  musics.forEach((element) => {
    music_list.innerHTML += `
      <div onclick="musicIdPlay(${element.id})" class="flex items-center mb-2 music-item gap-3 rounded-xl p-2">
        <img class="rounded-xl" src="${element.img}" width="50px" alt="">
        <div class="flex-col gap-2">
          <h3>${element.title}</h3>
          <p>${element.singer}</p>
        </div>
      </div>
    `;
  });
  
  function musicIdPlay(id) {
    audio.src = musics[id - 1].music;
  
    singer.textContent = musics[id - 1].singer;
    musicTitle.textContent = musics[id - 1].title;
    heroImg.src = musics[id - 1].img;
  
    pauseBtn.style.display = 'block';
    playBtn.style.display = 'none';
    audio.play();
  }
  
  backward.addEventListener('click', () => {
    if (count > 0) {
      count--;
    } else {
      count = musics.length - 1;
    }
  
    musicIdPlay(count + 1);
  });
  
  forward.addEventListener('click', () => {
    if (count < musics.length - 1) {
      count++;
    } else {
      count = 0;
    }
  
    musicIdPlay(count + 1);
  });
  
  let progress = document.querySelector('.player');
  
  audio.addEventListener('timeupdate', () => {
    let currentTime = audio.currentTime;
    let duration = audio.duration;
  
    if (duration) {
      progress.value = (currentTime / duration) * 100;
    }
  });
  
  progress.addEventListener('input', () => {
    let duration = audio.duration;
    audio.currentTime = (progress.value / 100) * duration;
  });
  