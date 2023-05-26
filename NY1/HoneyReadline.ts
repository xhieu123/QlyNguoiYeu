import {GirlFriend, ManagerHoney} from "./TTNguoiYeu";

let input = require('readline-sync')
let ManagerList = new ManagerHoney()
let choice = -1
while (true){
    console.log("input your choice: " +
        "\n 0.Exit" +
        "\n 1.Add" +
    "\n 2.Edit " +
        "\n 3.Delete" +
    "\n 4.Find" +
    "\n 5.Display")
    choice= input.question("let choice")
    if (choice ==1){
        let MNid=input.question("input id")
        let MNName=input.question("input name")
        let MNzodiac=input.question("input zodiac")
        let MNhomeTown=input.question("input homeTown")
        let MNage=input.question("input age")
        let MNhobby=input.question("input hobby")
        ManagerList.add(new GirlFriend(MNid,MNName,MNzodiac,MNhomeTown,MNage,MNhobby))
    }
    if (choice==2){
        let MNnewID = input.question("input idfind")
        let MNid=input.question("input id")
        let MNName=input.question("input name")
        let MNzodiac=input.question("input zodiac")
        let MNhomeTown=input.question("input homeTown")
        let MNage=input.question("input age")
        let MNhobby=input.question("input hobby")
        ManagerList.edit(MNnewID,new GirlFriend(MNid,MNName,MNzodiac,MNhomeTown,MNage,MNhobby))
    }
    if (choice == 3){
        let MNnewID = input.question("input idfind")
        ManagerList.delete(MNnewID)
    }
    if (choice == 4){
        let MNnewID = input.question("input idfind")
        ManagerList.findHoney(MNnewID)
    }
    if (choice == 5){
        ManagerList.display()
    }
    if (choice == 0){
        break
    }
}