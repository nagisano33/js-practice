export function loop(times, callback) {
  // callback() を times 回 呼び出すプログラムを書くこと
  for(let i=0;i<times;i++){ 
  callback();
}
}

export function nabeatsu(num) {
  // num が 3 の倍数なら true, それ以外は false を返すこと
  return num%3===0;
}

export function getScoreMessage(point) {
    // point が取りうる値は 0 〜 100 で、範囲外の場合は
    // throw new Error() でエラーを投げること
    // point が 100 の場合は　'perfect'
    // 80 以上の場合は 'nice'
    // 60 以上の場合は 'good'
    // 59 以下の場合は 'bad' を返すこと
    
    if(point===100){
      return "perfect";
    }else if(point<0 || 100<point){
      throw new Error();
    }else if(80<=point){
      return "nice";
    }else if(60<=point){
      return "good";
    }else {
      return "bad"; 
    }
  }

