//==================================
//管理者ログイン
//==================================

const loginAdminister = () => {
    const adminLoginId = getInputValueById("adminLoginId");
    const adminLoginPass = getInputValueById("adminLoginPass");
    socket.emit('adminLogin', {id:adminLoginId,password:adminLoginPass});
    loading(true);
    //const loginPage = document.getElementById("index-login");
    //loginPage.classList.remove("open");
    //loginPage.classList.add("close");
    //const settingPlayerNumberPage = document.getElementById("admin-menu-player-number");
    //settingPlayerNumberPage.classList.remove("close");
    //settingPlayerNumberPage.classList.add("open");
    //closeModal("adminlogin");
}

$(function(){
    socket.on('adminLoginSuccess',function(){
        const elemLoginAdminError = document.getElementById("loginAdminError");
        elemLoginAdminError.textContent = "";
        loading(false);
    });
    
    socket.on('adminLoginFail',function(){
        const elemLoginAdminError = document.getElementById("loginAdminError");
        elemLoginAdminError.textContent = "入力に誤りがあります。ログインに失敗しました。";
        loading(false);
    });
})
