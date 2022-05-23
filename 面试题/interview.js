/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param N int整型 花的数量
 * @param h int整型一维数组 花的高度
 * @param a int整型一维数组 花的漂亮值
 * @return long长整型
 */
// function salesman( N ,  h ,  a ) {
//     // write code here
//     let sum = 0;
    
//     let minIdx, maxIdx;
//     let min = +Infinity, max = -Infinity;
    
//     for(let i = 0; i<N; i++) {
//         if(h[i] > max ) {
//             max = h[i];
//             maxIdx = i;
//         }
//         if(h[i] < min) {
//             min = h[i];
//             minIdx = i;
//         }
//     }
    
//     const dfs = (curSum, curIdx, curHeight)=> {
//         if(curIdx === N || curHeight >= max){
//             sum = Math.max(sum, curSum);
//             return;
//         }
        
//         if(h[curIdx] < curHeight) {
//             dfs(curSum ,curIdx+1, curHeight);
//         } else {
//             // 选的情况
//             dfs(curSum+a[curIdx], curIdx+1, h[curIdx]);
            
//             // 不选的情况
//             dfs(curSum, curIdx+1, curHeight);
//         }
//     }
    
//     for(let i=0; i <= minIdx; i++){
//         dfs(0,i,h[i]);
//     }
    
//     return sum;
// }


function salesman( N ,  h ,  a ) {
    // write code here
    let sum = 0;
    const dp = new Array(N);
    for(let i=0; i<N; i++) {
        dp[i] = [a[i], 0]
    }
    
    for(let i=1; i<N; i++) {
        let selectMax = 0
        let unselectMax = 0;
        for(let j=0; j<i; j++){
            if(h[j] > h[i]){
                continue;
            }
            selectMax = Math.max(dp[j][0] + a[i], selectMax);
            unselectMax = Math.max(dp[j][1] , unselectMax);
        }
        dp[i] = [Math.max(selectMax, dp[i][0]), Math.max(unselectMax, dp[i][1])];
    }

    return Math.max(dp[N-1][0], dp[N-1][1]);
}



