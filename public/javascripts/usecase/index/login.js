const loginAdminister = () => {
    const adminLoginId = getInputValueById("adminLoginId");
    const adminLoginPass = getInputValueById("adminLoginPass");
    const loginPage = document.getElementById("index-login");
    loginPage.classList.remove("open");
    loginPage.classList.add("close");
    const settingPlayerNumberPage = document.getElementById("admin-menu-player-number");
    settingPlayerNumberPage.classList.remove("close");
    settingPlayerNumberPage.classList.add("open");
    closeModal("adminlogin");
}