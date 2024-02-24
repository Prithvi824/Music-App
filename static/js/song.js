const song_title = document.querySelector(".playing-title");
const song_author = document.querySelector(".playing-author");
const song_thumbnail = document.querySelector(".playing-thumbnail");
const song = document.getElementById("myaudio");

const play_btn = document.querySelector(".play-pause-btn");
const song_timeline = document.querySelector(".song-timeline");
const timeline = document.getElementById("timeline");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

var songs_list = [];

const play_pause = function () {
  if (song.paused) {
    play_btn.classList.replace("bx-play", "bx-pause");
    song.play();
    console.log("played");
  } else {
    play_btn.classList.replace("bx-pause", "bx-play");
    song.pause();
    console.log("paused");
  }
};

const duration_change = function () {
  if (song.currentTime >= timeline.max) {
    next.click();
  }
  song.currentTime = timeline.value;
  let percent = Math.round(
    (timeline.value * 100) / timeline.getAttribute("max")
  );
  timeline.style.setProperty("--timeline_val", `${percent.toString()}%`);
};

const timeupdate = function () {
  if (song.currentTime >= timeline.max) {
    next.click();
  }

  if (timeline.max != song.duration && song.duration >= 1) {
    timeline.max = song.duration;
  }
  timeline.value = song.currentTime;
  let percent = Math.round((timeline.value * 100) / timeline.max);
  timeline.style.setProperty("--timeline_val", `${percent.toString()}%`);
};

const attach_thumbnail = async function (thumbnail) {
  let response = await fetch(thumbnail, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      some_token: true,
    },
  });

  if (!response.ok) return;

  let blob = await response.blob();
  song_thumbnail.style.background = `url(${URL.createObjectURL(blob)})`
};

const attach_media = async function (song_url, element) {
  if (!Hls.isSupported()) return;

  var hls_id = null;
  hls_id = new Hls();
  await hls_id.loadSource(song_url);
  await hls_id.attachMedia(element);
};

const fetch_data = async function (link) {
  let response = await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ some_token: true }),
  });

  if (!response.ok) return;

  let result = await response.json();

  return result;
};

const fetch_links = async function (song_id) {
  let response = await fetch(`/database/${song_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ some_token: true }),
  });

  if (!response.ok) {
    return "An error happened";
  }

  let links = await response.json();
  return links;
};

const handle_media = async function (
  links,
  audio_element,
  song_element,
  author_element
) {
  attach_thumbnail(links.thumbnail);
  attach_media(links.master, audio_element);
  fetch_data(links.meta).then((res) => {
    song_element.innerHTML = res.song;
    author_element.innerHTML = res.author;
  });
};

const next_song = function () {
  let temp = songs_list.shift();
  if (!temp) return;
  songs_list.push(temp);
  fetch_links(songs_list[0]).then((link) =>
    handle_media(link, song, song_title, song_author)
  );

  song.addEventListener("loadedmetadata", play_pause);
  song.removeEventListener("loadedmetadata");
};

const previous_song = function () {
  if (!songs_list.length > 1) return;

  let temp = songs_list.pop();
  songs_list.unshift(temp);
  fetch_links(songs_list[0]).then((link) =>
    handle_media(link, song, song_title, song_author)
  );

  song.addEventListener("loadedmetadata", play_pause);
  song.removeEventListener("loadedmetadata");
  return;
};

play_btn.addEventListener("click", play_pause);
next.addEventListener("click", next_song);
previous.addEventListener("click", previous_song);
song.addEventListener("timeupdate", timeupdate);
song_timeline.addEventListener("input", duration_change);

const build_client = async function () {
  response = await fetch("/initial", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ some_token: true }),
  });

  if (!response.ok) {
    console.log("An Error Happened");
    return;
  }

  let result = await response.json();
  console.log("songs fetched:", result.song, result.song[0]);
  songs_list = result.song;
  return result.song;
};

build_client()
  .then((res) => {
    return fetch_links(res[0]);
  })
  .then((link) => {
    console.log("fetchinf res:", link);
    handle_media(link, song, song_title, song_author);
  });

const play_specific = function(id){
  fetch_links(id).then(link => handle_media(link, song, song_title, song_author));
  song.addEventListener("loadedmetadata", play_pause);
  song.removeEventListener("loadedmetadata");
}