//実行する日付を今日で定義する
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

//実行する日付を西暦●●●●年●●月●●日と表示する
console.log(year + '年' + month + '月' + date + '日');
