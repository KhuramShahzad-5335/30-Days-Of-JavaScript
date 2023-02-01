// reusable stuff is globally declraed here
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]





//===============================================================





//===================           1.
//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName : 'Khuram',
    lastName : 'Shahzad',
    income : {
    sal : 25000,
    bonus : 30000,
    onlineCourses : 15000,
    },
    expenses : {
    rent : 4000,
    electicity : 2500, 
    water : 5000,
},
    totalIncome : function(){
        let sum = 0;
        for (const inc of Object.values(this.income)) {
            sum += inc;
        }
        return sum;
    },
    totalExpenses : function(){
        let sum = 0;
        for (const exp of Object.values(this.expenses)) {
            sum += exp;
        }
        return sum;
    },
    accountBalance : function(){
        let balance = 0;
        balance = this.totalIncome() - this.totalExpenses();
        return balance;
    },
    addIncome : function(incomeDescription,newIncome){
        let msg = incomeDescription;
        this.income[incomeDescription] = 5000;
        return this.income;
    },
    addExpense : function(expenseDescription,newExpense){
        this.expenses[expenseDescription] = newExpense;
        return this.expenses;
    },
}

console.log(personAccount.totalExpenses('lottery', 10000));








//=======================     2.
//**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()


//      a.Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.


//create function signUp()
function signUp(userName, email, password){

    let isAlreadyMember = false;
    let newUserObj = {}

    // check if the user with same info exists or not
    for (const user of users) {
        if((user.username === userName)
            && ( user.email === email )
            &&(user.password === password)      
            ){
                isAlreadyMember = true;
            }
        }
    // now if user is already a member, inform him he already has an account
    if(isAlreadyMember === true){
        return `User already exists...`;
    }
    else{
        //create a object which contains all the newUserInfo.
        // some values are hard coded, we will make them dynamic for production apps :)

        newUserObj['_id'] =  'Kr53sH';
        newUserObj['username'] = userName;
        newUserObj['email'] = email;
        newUserObj['password'] = password;
        newUserObj['createdAt'] = '08/01/2020 10:00 AM';
        newUserObj['isLoggedIn'] = false;

        // now push this object to the users collection.
        users.unshift(newUserObj);

        //and lets return a msg of success,
    }
    return `Hey ${userName}, Welcome to the JavaScript-30-Day challenge...`
}

console.log(signUp('Khuram','Khuram@khuram.com','123123'));







//      b.b. Create a function called signIn which allows user to sign in to the application

function signIn(username,password){
    //sign In the user to the application, if he already exists in the users objects.
    let signInStatus = false;
    
    // lets check if user enterd values are present in the user object or not.
    for (const user of users) {
        if((user.username === username)
            &&(user.password === password)      
            ){
                signInStatus = true;
            }
    }
    if(signInStatus){
        return msg;
    }
    else{
        return `Error, user does not exist!`
    }
}
console.log(signIn('Alex','123123'));