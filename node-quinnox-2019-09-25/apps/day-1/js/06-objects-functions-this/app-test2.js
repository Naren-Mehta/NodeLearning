// console.log(this);

var customer ={
    username:'test',
    name:'test name',
    email: 'abc@gmail.com',
    test: function(){

        var self= this;
        console.log(this.username);
        
        // console.log("in test method: "+this.name);

        // var setName= function(newUsername){
        //     self.username=newUsername;
        //     this.username=newUsername
        //     console.log(self);
        //     console.log(this);

        // }

        var setName= (newUsername)=>{
            // self.username=newUsername;
            this.username=newUsername
            console.log(self);
            console.log(this);

        }


        setName("Changes username");
    }
    

}

console.log(customer);
customer.test();

console.log("this.username= "+this.username);
console.log("this.password= "+this.password);