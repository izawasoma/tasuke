const getInputValueById = (idName) => {
    //id名でinput要素を取得する
    const elemInput = document.getElementById(idName);
    //取得できなかった場合、エラーを返す
    if(!elemInput){
        throw new Error(`「id名：${idName}」に該当するinputタグは見つかりませんでした`);
    }
    const inputValue = elemInput.value;
    //値が取得できなかった場合、エラーを返す
    if(!inputValue && inputValue !== ""){
        throw new Error(`「id名：${idName}」のinput要素から値を取得できませんでした。`);
    }
    //値を返す
    return inputValue;
}