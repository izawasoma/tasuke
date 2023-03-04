/**
 *  画面の切り替え
 *  @param closeElemId 非表示化するボックスのid名 
 *  @param openElemId 表示するボックスのid名
 */
const switchingSection = (closeElemId,openElemId) => {
    elemClosed = document.getElementById(closeElemId);
    if(!elemClosed){
        throw new Error('[switchingSectionError]非表示化する要素として指定された要素名が見つかりません。');
    }
    elemOpen = document.getElementById(openElemId);
    if(!elemClosed){
        throw new Error('[switchingSectionError]表示化する要素として指定された要素名が見つかりません。');
    }
    elemClosed.classList.remove("open");
    elemClosed.classList.add("close");
    elemOpen.classList.remove("close");
    elemOpen.classList.add("open");
}