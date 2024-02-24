const up_row = `<div class="row">
<div class="row-out-wrapper">
  <div class="card card_small flex justify-center items-center">
    <div class="inner" onclick="play_specific('afterdark')">
      <div class="heading">
        <img src="database/afterdark/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">After Dark</h1>
          <p class="song_author">Mr. Kitty</p>
        </div>
      </div>
      <div class="small_lyrics">
        <p class="font-sans factor_text">
          As the hours pass I will let you know That I need to ask
          Before I'm alone How it feels to rest On your patient lips
        </p>
      </div>
    </div>
  </div>
  <div class="card card_medium flex justify-center items-center">
    <div class="inner" onclick="play_specific('lethergo')">
      <div class="heading">
        <img src="database/lethergo/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Let Her Go</h1>
          <p class="song_author">Passenger</p>
        </div>
      </div>
      <div class="midium_lyrics">
        <p class="font-sans factor_text">
          Well, you only need the light when it's burning low Only
          miss the sun when it starts to snow Only know you love her
          when you let her go Only know you've been
        </p>
      </div>
    </div>
  </div>
  <div class="card card_large flex justify-center items-center">
    <div class="inner" onclick="play_specific('skyfall')">
      <div class="heading">
        <img src="database/skyfall/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Skyfall</h1>
          <p class="song_author">Adele</p>
        </div>
      </div>
      <div class="large_lyrics">
        <p class="font-sans factor_text">
          This is the end Hold your breath and count to ten Feel the
          Earth move and then Hear my heart burst again For this is
          the end I've drowned and dreamt this moment So overdue, I
          owe them Swept away
        </p>
      </div>
    </div>
  </div>
  <div class="card card_small flex justify-center items-center">
    <div class="inner" onclick="play_specific('afterdark')">
      <div class="heading">
        <img src="database/afterdark/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">After Dark</h1>
          <p class="song_author">Mr. Kitty</p>
        </div>
      </div>
      <div class="small_lyrics">
        <p class="font-sans factor_text">
          As the hours pass I will let you know That I need to ask
          Before I'm alone How it feels to rest On your patient lips
        </p>
      </div>
    </div>
  </div>
  <div class="card card_medium flex justify-center items-center">
    <div class="inner" onclick="play_specific('lethergo')">
      <div class="heading">
        <img src="database/lethergo/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Let Her Go</h1>
          <p class="song_author">Passenger</p>
        </div>
      </div>
      <div class="midium_lyrics">
        <p class="font-sans factor_text">
          Well, you only need the light when it's burning low Only
          miss the sun when it starts to snow Only know you love her
          when you let her go Only know you've been
        </p>
      </div>
    </div>
  </div>
  <div class="card card_large flex justify-center items-center">
    <div class="inner" onclick="play_specific('skyfall')">
      <div class="heading">
        <img src="database/skyfall/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Skyfall</h1>
          <p class="song_author">Adele</p>
        </div>
      </div>
      <div class="large_lyrics">
        <p class="font-sans factor_text">
          This is the end Hold your breath and count to ten Feel the
          Earth move and then Hear my heart burst again For this is
          the end I've drowned and dreamt this moment So overdue, I
          owe them Swept away
        </p>
      </div>
    </div>
  </div>
</div>
</div>`;

const down_row = `<div class="row">
<div class="row-in-wrapper">
  <div class="card card_large flex justify-center items-center">
    <div class="inner" onclick="play_specific('skyfall')">
      <div class="heading">
        <img src="database/skyfall/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Skyfall</h1>
          <p class="song_author">Adele</p>
        </div>
      </div>
      <div class="large_lyrics">
        <p class="font-sans factor_text">
          This is the end Hold your breath and count to ten Feel the
          Earth move and then Hear my heart burst again For this is
          the end I've drowned and dreamt this moment So overdue, I
          owe them Swept away
        </p>
      </div>
    </div>
  </div>
  <div class="card card_medium flex justify-center items-center">
    <div class="inner" onclick="play_specific('lethergo')">
      <div class="heading">
        <img src="database/lethergo/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Let Her Go</h1>
          <p class="song_author">Passenger</p>
        </div>
      </div>
      <div class="midium_lyrics">
        <p class="font-sans factor_text">
          Well, you only need the light when it's burning low Only
          miss the sun when it starts to snow Only know you love her
          when you let her go Only know you've been
        </p>
      </div>
    </div>
  </div>
  <div class="card card_small flex justify-center items-center">
    <div class="inner" onclick="play_specific('afterdark')">
      <div class="heading">
        <img src="database/afterdark/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">After Dark</h1>
          <p class="song_author">Mr. Kitty</p>
        </div>
      </div>
      <div class="small_lyrics">
        <p class="font-sans factor_text">
          As the hours pass I will let you know That I need to ask
          Before I'm alone How it feels to rest On your patient lips
        </p>
      </div>
    </div>
  </div>
  <div class="card card_large flex justify-center items-center">
    <div class="inner" onclick="play_specific('skyfall')">
      <div class="heading">
        <img src="database/skyfall/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Skyfall</h1>
          <p class="song_author">Adele</p>
        </div>
      </div>
      <div class="large_lyrics">
        <p class="font-sans factor_text">
          This is the end Hold your breath and count to ten Feel the
          Earth move and then Hear my heart burst again For this is
          the end I've drowned and dreamt this moment So overdue, I
          owe them Swept away
        </p>
      </div>
    </div>
  </div>
  <div class="card card_medium flex justify-center items-center">
    <div class="inner" onclick="play_specific('lethergo')">
      <div class="heading">
        <img src="database/lethergo/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">Let Her Go</h1>
          <p class="song_author">Passenger</p>
        </div>
      </div>
      <div class="midium_lyrics">
        <p class="font-sans factor_text">
          Well, you only need the light when it's burning low Only
          miss the sun when it starts to snow Only know you love her
          when you let her go Only know you've been
        </p>
      </div>
    </div>
  </div>
  <div class="check card card_small flex justify-center items-center">
    <div class="inner" onclick="play_specific('afterdark')">
      <div class="heading">
        <img src="database/afterdark/thumbnail.jpg" alt="" class="thumbnail" />
        <div class="details">
          <h1 class="song_name">After Dark</h1>
          <p class="song_author">Mr. Kitty</p>
        </div>
      </div>
      <div class="small_lyrics">
        <p class="font-sans factor_text">
          As the hours pass I will let you know That I need to ask
          Before I'm alone How it feels to rest On your patient lips
        </p>
      </div>
    </div>
  </div>
</div>
</div>`;

const parent_wrapper = document.querySelector(".parent-wrapper");

const screenchange = function () {
  if (window.screen.availWidth <= 460) {
    console.log("2 rows");
    parent_wrapper.innerHTML = up_row + down_row;
  } else if (window.screen.availWidth < 651) {
    parent_wrapper.innerHTML = up_row + down_row + up_row;
    console.log("3 rows");
  } else if (window.screen.availWidth <= 768) {
    parent_wrapper.innerHTML = up_row + down_row + up_row + down_row;
    console.log("4 rows");
  } else if (window.screen.availWidth <= 1024) {
    parent_wrapper.innerHTML = up_row + down_row + up_row + down_row + up_row;
    console.log("5 rows");
  } else {
    parent_wrapper.innerHTML =
      up_row + down_row + up_row + down_row + up_row + down_row;
    console.log("6 rows");
  }
};

screenchange();
window.addEventListener("resize", screenchange);

const scroll_cont_out = document.querySelector(".row-out-wrapper");
const scroll_cont_in = document.querySelector(".row-in-wrapper");

const child_out = Array.from(scroll_cont_out.querySelectorAll(".card"));
const child_in = Array.from(scroll_cont_in.querySelectorAll(".card"));

child_out.forEach((item) => {
  scroll_cont_out.appendChild(item.cloneNode(true));
});

child_in.forEach((item) => {
  scroll_cont_in.appendChild(item.cloneNode(true));
});

const texts = document.querySelectorAll(".factor_text");

/**
 * @param {NodeListOf<Element>} element_arr
 */
const add_break_group = function (element_arr) {
  for (let i = 0; i < element_arr.length; i++) {
    element_arr[i].innerHTML = add_breaks(element_arr[i]);
  }
};

/**
 * @param {HTMLElement} element
 */
const add_breaks = function (element) {
  let text = element.innerHTML
    .split(" ")
    .filter((val) => val.length >= 1 && val != "\n");

  let result = "";
  let current = "";

  for (let word of text) {
    if (current.length + word.length >= 21) {
      result += current + "<br>";
      current = "";
    }
    current += " " + word;
  }

  result += current;
  return result;
};

add_break_group(texts);
