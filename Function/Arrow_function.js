//this key word tell about current context

const user = {
    username:"Hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
    }
}
user.welcomeMessage()

