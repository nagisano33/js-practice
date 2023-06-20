
//数値型の引数が偶数かどうかを調べ、偶数なら true、奇数なら false を返す関数
function tyohan(num){
    return num%2===0;
}


//数値型の変数が格納された配列を受け取り、偶数のみを取り出して返す関数
//配列の要素に該当するものがなかった場合は空の配列を返す。
//ただし、引数の配列が空だったり、そもそも配列ではなかった場合はエラーを返す。
//また、配列の各要素へのアクセスには添え字を用いず、for ... of 命令を使用すること。
function getEvennumber(array){
    const newarray=[];

    if(array.length===0 || Array.isArray(array)===false){
        throw new Error();
    } else {
        for(const item of array){
            if(item%2===0){
            newarray.push(item);
            }
        }
    }
    return newarray;
}


//3 桁の整数を引数で受け取り、各桁全てが同じ数字 (例: 444) なら文字列型の '当たり' を返し、そうで無い場合は数値を文字列型にして返す (例: '545' など) 関数。
//ただし、100未満または1000以上の場合はエラーを返す。
//また、当たりかつ奇数の場合は '大当たり' を返す。
//3 桁の整数を引数で受け取り、各桁全てが同じ数字 (例: 444) なら文字列型の '当たり' を返し、そうで無い場合は数値を文字列型にして返す (例: '545' など) 関数。
//ただし、100未満または1000以上の場合はエラーを返す。
//また、当たりかつ奇数の場合は '大当たり' を返す。
function lottery(num){
    if(100>num || num>=1000){
        throw new Error();
    }else if(num%111===0 && num%2!==0){
        return "大当たり";
    }else if(num%111===0){
        return "当たり";
    }else {
        return String(num);
    }
}