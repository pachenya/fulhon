window.onload = function(){var mainbutton =document.getElementById('btnofstars').addEventListener('click', clicked)};

function Msg(s) {
  target = document.getElementById("topbox");
  target.innerHTML = target.innerHTML + "</br>" + s;
  let elm = document.documentElement;
  let bottom = elm.scrollHeight - elm.clientHeight;

  window.scroll(0, bottom);
}

document.addEventListener('keypress', keypress_ivent);
function keypress_ivent(e) {
  if (e.code=="Space") {
    clicked();
  }
}
//PDSE
let flg = [0,0,0,0,0,0];
var count = 0;
const xyzzy = "よく来たな。まあ座れ。//もう座ってるって？　それはすまない。//いや立ってる可能性もあるな。//まあ、座ってるかどうかなんてどうでもいいんだ。わかってるだろうけどね。そんなことは。//大した意味はないんだ。この世の全てにはね。//でも、ぼくも「この世に短編小説ほど意味のあるものはない」なんてうそぶいてたこともあるんだ。//いやそれこそどうでもいい。//生命、宇宙、全ての答えが42なんてのは常識だと思ってるかもしれないね、きみは。//だけどあれは「問い」が間違っていたというオチなんだ。//6に9をかけるとなんになる？　てのが究極の問いでね。//グッド・ワイフは70の雑事をこなす。//料理と、それ以外だ。//つまり、愛のカタチだ。一種のね。//オールユーニドイズラヴ。//前置きが長い？//そうかもしれない。//ところできみはこれがなにかのゲームだと思っていないか？//半分正解だ。//すべてのものには意味がある。//そうでもないよ。//どっちでもいい。//味方だ、正義の。//正義の味方。//悪の味方。//どちらでもないの味方。//とりあえず正義の味方がいいんじゃないかな。//そういえば//「聖書に興味ありますか」の人が来たことがあって。//なんか神がこの世の悪を現在進行系で滅ぼそうとしているらしいんだ。//こわいね。//神は絶対に善だからこの世に悪がある理由はまだこの世を作ってる最中//つまりバグとり中ってことになるのかな。//信じるものはデバッガなんだろうか。//マザーメアリー！//マンマミーア！//レリビー！//テケリーリ！//……とまあ色々あるけどこれはどうもゲームではないらしいんだ。//ゲームを作ろうとしてたんだが技術的問題とそれをなんとかする時間が足りなかった。//らしい。//なさけない。//じゃあ本題ってやつに入るか//本題が何なのかが本題って気はするね。//さて、//このへんでだいたい３分経ったんじゃないかな？//１分も経ってない？//いいんだよ細かいことは。//ほれ。".split("//");

b01_count = -1;
book01 = "//きみは本を開いた。//『//ある日。//あなたは自分が神の子の生まれ変わりだと気づいた。//足をザクザクと五寸釘で打たれた記憶がたしかにあった。//神の子に五寸釘という日本語の言葉は似つかわしくないが、ともかく様々なことが似ているのだった。//死んだと思ったら生きていた。//XX無し生XXXイイよぉー♡//盲目の人を治療したこともあった。//悪魔と対決し、石をパンに変えたこともある。そういう記憶が確かにあるのだった。//ユダを赦しなさいという気持ちも本物だった。//そんなところだ。//qawsedrftgyhujikolp//』//…//……//きみはその奇妙な本を閉じた。".split("//");

b02_count = -1;
const book02 = "二冊目は少年マンガのようだ。//<b>第１話　ポ コ ー チ ン ？</b>    //女主人公「古城山柊（こしろやま・ひいらぎ）」が朝目覚めると……まだ眠かった。//なので二度寝することにした。//三度寝からの起床で遅刻寸前になりネオバターロールパンをくわえて「うーちこくちこく！」と校門を求めて全力疾走する柊。    //しかし急ぎすぎていて曲がり角でギャングにぶつかってしまう。    //「ご、ごめんなさい！　遅刻寸前で……」柊の謝罪も虚しく、ギャングは無言でスープレックスを繰り出した。//アスファルトに頭部を叩きつけられた柊は即死して異世界へと転生。//柊<b>「まただよ……」</b>    //しかしいきなりデザートイーグルを持った幼馴染の梓がやってきて、とにかくすごい攻撃で二人一緒に元の世界へと戻り、遅刻の言い訳をした。    //平和な日常――//かと思いきや柊の下半身がデザートイーグルと一体化していた！    //柊と梓の日常はどうなってしまうのか！？//』 //……きみはその奇妙な本を閉じた。".split("//");

b03_count = -1;
b05_count = -1;

function bookopen(i) {
  switch(i) {
  case 1:
    flg[1] = 1;
    b01_count = 0;
    break;
  case 2:
    flg[2] = 1;
    b02_count = 0;
    break;
  case 3:
    flg[3] = 1;
    b03_count = 0;
    break;
  case 5:
    flg[5] = 1;
    b05_count = 0;
    break;
  }
  clicked();
}

exflg=0;
function clicked() {
  if (count < xyzzy.length) {
    Msg(xyzzy[count]);
    count++;
    return;
  } else if (count == xyzzy.length) {
    flg[0] = 1;
    Msg("<span style='color: gold;'>＜きみは３冊の本を手に入れた！　１冊目は<span class='modebut' onclick='bookopen(1)'>『風の薔薇の賜物』</span>だ！　読んでみようか！？＞</span>");
    count++;
  } else if (flg[1] && b01_count < book01.length) {
    Msg(book01[b01_count]);
    b01_count++;
    return;
  } else if (flg[1] && b01_count == book01.length) {
    Msg("<span style='color: gold;'>＜２冊目は<span class='modebut' onclick='bookopen(2)'>『ぬけ！ちまるんぽ！』</span>のようだ。読んでみようか！？＞</span>");
    b01_count++;
  } else if (flg[2] && b02_count < book02.length) {
    Msg(book02[b02_count]);
    b02_count++;
    return;
  } else if (flg[2] && b02_count == book02.length) {
    Msg("<span style='color: gold;'>＜３冊目は<span class='modebut' onclick='bookopen(3)'>『コカラゲ』</span>のようだ。読んでみようか！？＞</span>");
    b02_count++;
  } else if (flg[3] && b03_count < book03.length) {
    Msg(book03[b03_count]);
    b03_count++;
    return;
  }else if (exflg==1) {
    Msg("<span style='color: gold;'>＜よくわからない本がある。<span class='modebut' onclick='bookopen(5)'>『コカラゲ：第二部』</span>のようだ。読んでみようか！？＞</span>");
    exflg=2;
  } else if (flg[5] && b05_count < book05.length) {
    Msg(book05[b05_count]);
    b05_count++;
    return;
  } else {
    switch(count) {
      default:
      Msg(randText());
      break;
    }
  }
}

GorioIce = "霊長類アイスおごれやゴリ夫のスレはここでいいんですか？//唱えよう、進化の言葉『なますてまそ』//しますね秒殺//マリオンはっしーん！//牛久の便所で待つぜ……！？//やっぱ違います//やったぜ。//ああ＾ー//バイク押しカムヒア……//ラノベは村上春樹しか読みません！（ビシィ）//『マウントポジション』は寝なくてもできるんだよ！？//やっぱできません……//シバシマタレヨッ！！//どかーん！　どかーんどかーんどかーん！//最近は俺もｘｘじゃなくて古いジュニアアイドルのｏｏでｘｘてるぜ……！？//どこで売っているんだ？　たこしらたき！？//霊長類アイス！//そこを　がつん　だ！//メリークリスマス　だいとうりょうかっか！//悪のためにシロナガス男の友達の勇気に希望を見た情け無用の男を退治しに来た男を信じる男に咽び泣く男（咽び泣くだけで特に何もしません）//つきの　の　ふとももは？//いいももー！//人間凶器カツオ！//バッドネイチャー！//俺は304を信じるよ……！？//！？//よろしく頼（よろ）んだぜ！？//霊長類アイス！？//シャミ子が悪いんだよ……！？//なんか否定的な意見ばっかりだな……//まあ、キャラの書き分けができていないのは確かだな//阻止//うんこちんちんは高尚、お前らはロンブー、笑う犬で爆笑してろよ//ヒザは壊れてても（砕けてても）ヒザ蹴りになら使えるぜ！？//『アイス』おごれや……！？//ここは泣く場面です。//く　くそがあ　けんかは　ぷれすて　じゃ　ねーぞ！//へ……！？//な……！？//ば……！？//この出来損ないのへなば物置置き場が！//なんだそのくずれためしのかたまりは？　それこそできそこないのおにぎりだ？//ここはあなたのお探しのスレではございません。早々にお立ち去り下さい。//ルリドラゴン……（涙）".split("//");

function buildrndmsg() {
  for(i=0;i<GorioIce.length-1;i++) {
    tidx = Math.floor(Math.random()*GorioIce.length);
    // swap
    s = GorioIce[tidx];
    GorioIce[tidx] = GorioIce[i];
    GorioIce[i] = s;
  }
}

var msgs = 0;
var msgs2 = 0;
function randText() {
  rval = GorioIce[msgs];
  msgs++;
  if (msgs >= GorioIce.length) {
    msgs = 0;
  }
  
  if (flg[3] && b03_count == book03.length) {
    if (msgs2 == 69 && exflg == 0) {
      exflg = 1;
    }
    msgs2++;
  }
  return rval;
}

buildrndmsg();
