//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    //ボタンをクリックしたら、2秒後にテキストを「ボタンをクリックしました」に置き換える
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました';
    }, 2000);
});