//href属性の「#」で始まるリンクをすべて取得
const links = document.querySelectorAll('a[href^="#"]');
//取得したリンクを１つずつ処理を実行する。
links.forEach((link)=>{
  //リンクをクリックしたら処理を実行する
  link.addEventListener('click',(e)=>{
    //リンクイベントをキャンセルする
    e.preventDefault();
    //クリックしたリンクのhref属性を取得
    const href = link.getAttribute('href');
    //目的のセクションを取得
    const targetSection =document.querySelector(href);
    //画面の上からセクションのtop位置までの垂直方向の距離
    const sectionTop =targetSection.getBoundingClientRect().top;
    //現在位置を取得
    const currentPos=window.scrollY;
    //ヘッダーの高さ
    const gap = 50;
    //現在位置から目的のsectionまでのスクロール量
    const target = sectionTop + currentPos -gap;
    window.scrollTo({
      top:target,
      behavior:'smooth',
    });
  });
});

