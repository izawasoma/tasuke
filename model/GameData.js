class GameData {
    constructor(){
        this.roomInfos = [];
    }

    /**
     * roomInfosの配列に新規roomInfoオブジェクトを追加する
     * @param roomInfo roomInfoオブジェクト
     */
    addRoomInfo = (roomInfo) => {
        this.roomInfos.push(roomInfo);
    }
}

module.exports = GameData;