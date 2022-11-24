//
// in_b_b02.js
//
function Msg(s) {
  target = document.getElementById("topbox");
  target.innerHTML = target.innerHTML + "<p>" + s + "</p>";
  let elm = document.documentElement;
  let bottom = elm.scrollHeight - elm.clientHeight;

  window.scroll(0, bottom);
}

document.addEventListener('keypress', keypress_ivent);
document.addEventListener('onclick', clicked);
function keypress_ivent(e) {
  if (e.code=="Space") {
    clicked();
  }
}

const story = "<b>第１話　ポ コ ー チ ン ？</b>    //女主人公「古城山柊（こしろやま・ひいらぎ）」が朝目覚めると……まだ眠かった。なので二度寝することにした。三度寝からの起床で遅刻寸前になりネオバターロールパンをくわえて「うーちこくちこく！」と校門を求めて全力疾走する柊。    //しかし急ぎすぎていて曲がり角でギャングにぶつかってしまう。    //「ご、ごめんなさい！　遅刻寸前で……」柊の謝罪も虚しく、ギャングは無言でスープレックスを繰り出した。//アスファルトに頭部を叩きつけられた柊は即死して異世界へと転生。//柊<b>「まただよ……」</b>    //しかしいきなりデザートイーグルを持った幼馴染の梓がやってきて、とにかくすごい攻撃で二人一緒に元の世界へと戻り、遅刻の言い訳をした。    //平和な日常――かと思いきや柊の下半身がデザートイーグルと一体化していた！    //柊と梓の日常はどうなってしまうのか！？//』 //……きみはその奇妙な本を閉じた。".split("//")

var count = 0;

function clicked() {
  if (count < story.length) {
    Msg(story[count]);
    count++;
    return;
  } else if (count == story.length) {
    Msg("<span style='color: gold;'><a href=\"in_b_c03.html\">→＊＊＊NEXT＊＊＊</a></span>");
    count++;
  } else {
    // do nothing
    // switch(count) {
    //   default:
    //   Msg(randText());
    //   break;
    // }
  }
}
