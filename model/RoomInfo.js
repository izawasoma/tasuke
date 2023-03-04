const Member = require('../model/Member'); 

class RoomInfo {
    constructor (memberNum){
        this._roomId = -1;
        this._memberNum = memberNum;
        this._members = [];
        this._questionP = {};
        this._questionC = [];
        this._members = [];

        //人数分のランダムな文字列を生成する
        const randomCodes = [];

        for(let i = 0; i<this._memberNum; i++){
            const codeString = "abcdefghijklmnopqrstuvwxyz0123456789";
            const codeLength = 8;
            let checkFlg = true;
            let newCode;
            while(checkFlg){
                checkFlg = false;
                newCode = Array.from(Array(codeLength)).map(()=>codeString[Math.floor(Math.random()*codeString.length)]).join('')
                randomCodes.forEach((code) => {
                    if(newCode == code){
                        checkFlg == true;
                    }
                });
            }
            randomCodes.push(newCode);
        }

        //生成した文字列を用いてmembersをセットする
        randomCodes.forEach((code,index) => {
            this._members.push(new Member(index,code));
        });
    }

    /**
     * 以下セッターとゲッター
     */
    setRoomId = (roomId) => {
        this._roomId = roomId;
    }
 
    getRoomId = () => {
        return this._roomId;
    }

    setMamberNum = (memberNum) => {
        this._memberNum = memberNum;
    }

    getMemberNum = () => {
        return this._memberNum;
    }
}

module.exports = RoomInfo;