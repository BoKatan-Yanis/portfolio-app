import PocketBase from '@pocketbase'

const client = new PocketBase('http://localhost:8090');




 function createOne(collectionIdOrName : string, data : object)
 {

    client.Records.create("article", data)
    .then(function (record) {
        console.log(record)
    }).catch(function (error) {
        console.error(error)
    });

 }

 async function getFullList (collectionIdOrName : string, perPage : number = 30) 
 {
       let records = client.Records.getFullList(collectionIdOrName, perPage)
       return records.then(function (record : any) {
        return record;
        })
        .catch(function (error : any) {
            return error;
        });
 }



export {createOne, getFullList}