//==================================
//管理者ログイン
//==================================

const loginAdminister = () => {
    const adminLoginId = getInputValueById("adminLoginId");
    const adminLoginPass = getInputValueById("adminLoginPass");
    socket.emit('adminLogin', {id:adminLoginId,password:adminLoginPass});
    loading(true);
}

$(function(){
    socket.on('adminLoginSuccess',function(){
        const elemLoginAdminError = document.getElementById("loginAdminError");
        elemLoginAdminError.textContent = "";
        loading(false);
        switchingSection("index-login","admin-menu-player-number");
        closeModal("adminlogin");
    });
    
    socket.on('adminLoginFail',function(){
        const elemLoginAdminError = document.getElementById("loginAdminError");
        elemLoginAdminError.textContent = "入力に誤りがあります。ログインに失敗しました。";
        loading(false);
    });
});
