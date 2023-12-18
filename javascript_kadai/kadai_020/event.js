//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    //「ボタンをクリックしてください」を「ボタンをクリックしました」に置き換える
    document.getElementById('text').innerHTML = 'ボタンをクリックしました';
});