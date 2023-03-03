const openModal = (modalName) => {
    //モーダル名が設定されていない時
    if(!modalName){
        throw new Error('ボタンにモーダル名が設定されていません');
    }
    //対象モーダルを取得
    const targetModal = document.querySelector(`[modalname='${modalName}']`);
    //モーダルの取得が成功したかどうか
    if(!targetModal){
        throw new Error('対象のモーダルの取得に失敗しました');
    }
    //モーダルを開く
    targetModal.classList.remove("close");
    targetModal.classList.add("open");
    //trueを返して実行終了
    return true;
}

const closeModal = (modalName) => {
    //モーダル名が設定されていない時
    if(!modalName){
        throw new Error('ボタンにモーダル名が設定されていません');
    }
    //対象モーダルを取得
    const targetModal = document.querySelector(`[modalname='${modalName}']`);
    //モーダルの取得が成功したかどうか
    if(!targetModal){
        throw new Error('対象のモーダルの取得に失敗しました');
    }
    //モーダルを開く
    targetModal.classList.remove("open");
    targetModal.classList.add("close");
    //trueを返して実行終了
    return true;
}