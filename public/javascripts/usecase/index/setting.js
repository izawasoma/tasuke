//==================================
//管理者が部屋の人数を設定する
//==================================

const settingMemberNumber = () => {
    const memberNum = document.getElementById("memberNum").value;
    socket.emit("settingMemberNumber",{memberNum:memberNum});
}

$(function(){
    socket.on("settingedMemberNumber",function(roomInfo){
        roomInfo._members.forEach((member) => {
            $("#admin-index-hoped-player-list").append(`
            <table class="table table-border-grid">
                <tr>
                    <th class="col-4 table-bg-active">プレイヤーコード</th>
                    <td class="col-16" colspan="4">${member._code}</td>
                </tr>
                <tr>
                    <th class="col-8 table-bg-active" colspan="2">プレイヤー名</th>
                    <th class="col-8 table-bg-active" colspan="2">合言葉</th>
                    <th class="col-4 table-bg-active">操作</th>
                </tr>
            </table>
            `);
        });
        switchingSection("admin-menu-player-number","admin-hoped-player");
    });
});