import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBwWWLuFBPJG12fH-y-I2Dl9rVL7beellU",
    authDomain: "expensify-84919.firebaseapp.com",
    databaseURL: "https://expensify-84919.firebaseio.com",
    projectId: "expensify-84919",
    storageBucket: "expensify-84919.appspot.com",
    messagingSenderId: "484552432037"
}

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expense = {
//     description: 'Shop',
//     note: 'food',
//     amount: 100,
//     createdAt: 'Tuesday'
// }

// const expense2 = {
//     description: 'Shop',
//     note: 'food',
//     amount: 100,
//     createdAt: 'Tuesday'
// }

// const expense3 = {
//     description: 'Shop',
//     note: 'food',
//     amount: 100,
//     createdAt: 'Tuesday'
// }

// database.ref('expenses').push(expense)
// database.ref('expenses').push(expense2)
// database.ref('expenses').push(expense3)

/* database.ref('expenses').once('value').then((snapshot) => {
    const expensesArray = [];
    snapshot.forEach((childSnapshot) => {

        console.log(childSnapshot.val())

        expensesArray.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expensesArray)
}) */

/* database.ref('expenses').on('value', (snapshot) => {
    const expensesArray = [];
    snapshot.forEach((childSnapshot) => {
        expensesArray.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expensesArray)
}) */

// database.ref('expenses').on('child_removed', (snapshot) => {
    // console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref().set({
//     name: 'Hunter Chang',
//     age: 32,
//     isSingle: false,
//     location: {
//         city: 'Denver',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log(e)
// })

// database.ref('isSingle').remove()
// database.ref().update({
//     name: 'Mike',
//     age: 77,
//     isSingle: false,
//     job: 'Developer'
// })

// Getting Data
/* database.ref().once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val)
}).catch((e) => {
    console.log('Error', e)
}) */

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31)
// }, 10500);