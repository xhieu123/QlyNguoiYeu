export class GirlFriend{
    private _id:string
    private _honeyName:string
    private _zodiac:string
    private _homeTown:string
    private _age:string
    private _hobby:string

    constructor(id: string, honeyName: string, zodiac: string, homeTown: string, age: string, hobby: string) {
        this._id = id;
        this._honeyName = honeyName;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._age = age;
        this._hobby = hobby;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get honeyName(): string {
        return this._honeyName;
    }

    set honeyName(value: string) {
        this._honeyName = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get age(): string {
        return this._age;
    }

    set age(value: string) {
        this._age = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }
}
export class ManagerHoney{
    list:GirlFriend[]=[]
    constructor() {
    }
    display(){
        if (this.list.length==0){
            console.log("không có ng yêu")
        }else {
            console.table(this.list)}
    }
    findHoney(a:string){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id==a){
                console.log(this.list[i].honeyName+this.list[i].zodiac)
            }else {
                console.log("không có dữ liệu phù hợp")}
        }
    }
    add(b:GirlFriend){
        this.list.push(b)
    }
    edit(c:string,d:GirlFriend){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id==c){
                this.list[i]=d
            }
        }
    }
    delete(id:string){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id!==id){
                console.log("không có ngyeu")
            }
        }
        this.list = this.list.filter((item)=>item.id!==e)
    }

}