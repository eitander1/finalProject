const db = require('../models')

async function createLinksAndUser() {
    await db.Link.create(
        {
            url: 'www.one.co.il',
            Users:[
            {name:'eitan'}, {name:'yossi'},
        ]
        } ,{include:db.User})
}

function deleteAllUsers(){
    db.User.destroy({ truncate : true, cascade: false })
        .then(x=>console.log('all records were deleted --> ' + x))
        .catch(err => console.log('error deleted -> ' + err))
}


function deleteAllLinks(){
    db.Link.destroy({ truncate : true, cascade: false })
        .then(x=>console.log('all records were deleted --> ' + x))
        .catch(err => console.log('error deleted -> ' + err))
}


async function createUser(userName) {
    await db.User.create({
        name: userName,
    });
}

async function createLink(link1) {
    await db.Link.create({
        url: link1
    });
}

//createLink('www.walla.com')
createLinksAndUser()
//deleteAllUsers()
//deleteAllLinks()