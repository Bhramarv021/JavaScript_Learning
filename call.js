function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // call method allows you to pass this (current instance) to another function 
    // so that other's function this can refer to your this
    // i.e. With call method and passes this as optional argument you will get username also in same function in same this reference.
    // Output with call is 'createUser { username: 'chai', email: 'chai@fb.com', password: '123' }'
    SetUsername.call(this, username);

    // And output without call is createUser { email: 'chai@fb.com', password: '123' }
    // SetUsername(username);
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);