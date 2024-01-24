import "./style.css";
function Roadmap() {
  return (
    <>
      <h2>Roadmap</h2>
      <div class="timeline">
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">August 30, 2017</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Published First Video</h2>
    <p class="timeline__paragraph">
      My first YouTube video was a tutorial on how to build a client-server sockets app in Java.
    </p>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">5,000 Subscribers Q&A</h2>
    <p class="timeline__paragraph">
      To celebrate 5,000 subscribers, I published a video answering some of the most popular questions which
      my viewers had asked me since starting my YouTube channel.
    </p>
    <p class="timeline__paragraph">
      I didn't even remove the jumper in the background before recording that video 🤣
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">February 25, 2019</div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">June 3, 2020</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">First Live Stream</h2>
    <p class="timeline__paragraph">
      In my first ever live stream, I couldn't put my cup of coffee down.
    </p>
  </div>
  <div class="timeline__component timeline__component--bottom timeline__component--bg">
    <h2 class="timeline__title">Vertical Timeline</h2>
    <p class="timeline__paragraph">
      Published this video.
    </p>
    <p class="timeline__paragraph">
      Link to code in description 🔽
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
    <div class="timeline__point timeline__point--bottom"></div>
  </div>
  <div class="timeline__component timeline__component--bottom">
    <div class="timeline__date">June 28, 2021</div>
  </div>
</div>
    </>
  );
}
export default Roadmap;
