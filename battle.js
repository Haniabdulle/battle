function setCountCookies(){
    let user_countString="";
    for(let i=0; i < user_pokemon_attacks.length;i++){

        user_countString+=user_pokemon_attacks[i].count.toString();

    }
    let computer_countString="";
    for(var i=0; i < computer_pokemon_attacks.length;i++){

        computer_countString+=computer_pokemon_attacks[i].count.toString();

    }
    
 
    Cookies.set("user_attck_count",user_countString);
    Cookies.set("computer_attck_count",computer_countString);
}
function allCookiesExist(){
    if(Cookies.get("user_pokemon")== undefined || Cookies.get("user_maxHealth")== undefined || Cookies.get("user_currentHealth")== undefined || Cookies.get("user_attackPoints")== undefined || Cookies.get("user_attck_count")== undefined || Cookies.get("computer_pokemon")== undefined || Cookies.get("computer_maxHealth")== undefined || Cookies.get("computer_currentHealth")== undefined || Cookies.get("computer_attackPoints")== undefined || Cookies.get(user_pokemon)== "computer_attck_count"){
        return false
    }
    else{
        return true
    }
}

function getCountCookies(){
    let user_countString=Cookies.get("user_attck_count");
    let computer_countString=Cookies.get("computer_attck_count");

    for(let i=0; i < user_pokemon_attacks.length;i++){

        user_pokemon_attacks[i].count= parseInt(user_countString[i]);

    }
    for(let i=0; i < computer_pokemon_attacks.length;i++){

        computer_pokemon_attacks[i].count= parseInt(computer_countString[i]);
      
    }
    

}