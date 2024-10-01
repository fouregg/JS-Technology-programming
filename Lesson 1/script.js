function differenceVarLet() {
    block1: { // block1 имя блока
        var x = 10; // Старый способ объявления переменных. Он ведет себя не предсказуемо при объявлении в блоках
        let z = 10; // Современный способ объявления переменных. Он используется в современном стеке.
    }
    console.log(x);
    console.log(z);
}


function constTest() {
    const y = 10; // Константовая переменная. 
    y = y + 10; // Возникнет ошибка при изменении переменной
    console.log(y);
}


function typeData() {
    let x = 5, y = 10.5, z = NaN; // NaN - Not a Number
    console.log(typeof (x), typeof (y), typeof (z));

    let und = undefined; // undefined - тип данных, который говрит, что переменная не определена
    console.log(typeof (und), und);
    console.log(und + 2);
    console.log(und + "hello");

    let hi = "Hello";
    console.log(typeof (hi));

    let NPC =
    {
        name: "Chiken",
        health: 100,
        stamina: 50,
        lvl: 5
    }

    console.log(typeof (NPC));
    let player =
    {
        name: "Gladiator",
        health: 200,
        stamina: 100,
        lvl: 10,
        damage: 15.3,
        attack: function (object) {
            object.health -= this.damage;
        }
    }

    player.attack(NPC);
    console.log(NPC.health);

    let flag = true;
    console.log(typeof(flag));
}