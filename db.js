'use strict';

const mongo = require('mongodb').MongoClient;
// const assert = require('assert');

// const readline = require('readline');
// const read = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Connection URL
let url = 'mongodb://localhost:27017/admin';
let db_conn, collection;
// Use connect method to connect to the Server
mongo.connect(url, function (err, scheme) {
  if (err) {
    console.error(err);
    process.exit(1)
  } else {
    db_conn = scheme;
    collection = scheme.db('test').collection('documents');
    // input()
  }
});

// Called on exit
function close(err_code) {
  db_conn.close();
  if (err_code && err_code !== 0) {
    process.exit(err_code)
  } else {
    process.exit()
  }
}

function getPosts(callback) {
  if (callback) {
    collection.find({}, (err, result) => {
      result.toArray(function (err, found) {
        console.log(JSON.stringify(found, null, 2));
        console.log(`Found  ${found.length} posts`);
        callback(err, found)
      })
    })
  }
}

module.exports = {
  getPosts
};



// function input() {
//   read.question('find, insert, update or remove: ', (text) => {
//     if (text && text !== 'quit') {
//       switch (text) {
//         case 'find':
//           find(input);
//           break;
//         case 'insert':
//           insert(input);
//           break;
//         case 'update':
//           update(input);
//           break;
//         case 'remove':
//           remove(input);
//           break;
//         default:
//           console.log('-------------------Nope, try again');
//           input()
//       }
//     } else {
//       close()
//     }
//   });
// }
//
// function parse(text, callback) {
//   let obj = null;
//   try {
//     obj = JSON.parse(text)
//   } catch (err) {
//     console.error('-------------------Failed to parse input');
//     callback()
//   }
//   return obj
// }
//
// function find(text, callback) {
//   // text is an optional parameter
//   if (typeof text === 'function') {
//     callback = text
//   }
//  
//   if (typeof text === 'string') {
//     core(text)
//   } else {
//     read.question('++ find ', (input) => { core(input) })
//   }
//  
//   function core(str) {
//     let obj = parse(str, callback);
//     if (obj) {
//       collection.find(obj, (err, result) => {
//         result.toArray(function (err, found) {
//           console.log(JSON.stringify(found, null, 2));
//           console.log(`Found  ${found.length} ${found.length === 1 ? 'document' : 'documents'}`);
//           callback(found)
//         })
//       })
//     }
//   }
// }
//
// function insert(callback) {
//   read.question('++ insert ', (text) => {
//     let obj = parse(text, callback);
//     if (obj) {
//       if (Array.isArray(obj)) {
//         let count = obj.length;
//         collection.insertMany(obj, (err, result) => {
//           if (err || result && result.insertedCount !== count) {
//             console.error('-- Failed to insert!', err)
//           } else {
//             console.log(`## Successfully inserted ${result.insertedCount} documents!`)
//           }
//           callback()
//         })
//       } else {
//         collection.insertOne(obj, (err, result) => {
//           if (err || result && result.insertedCount !== 1) {
//             console.error('-- Failed to insert', err)
//           } else {
//             console.log(`## Successfully inserted ${result.insertedCount} document!`)
//           }
//           callback()
//         })
//       }
//     }
//   })
// }
//
// function update(callback) {
//   read.question('++ update: set or unset ', (text) => {
//     switch (text) {
//       case 'set':
//         set(callback);
//         break;
//       case 'unset':
//         unset(callback);
//         break;
//       default:
//         console.log('-------------------Nope, try again');
//         callback()
//     }
//   })
// }
//
// function set(callback) {
//   read.question('++++ set on ', (text) => {
//     find(text, (found_before) => {
//       if (Array.isArray(found_before) && found_before.length > 0) {
//         console.log(`You are about to update  ${found_before.length}  ${found_before.length === 1 ? 'document' : 'documents'}`);
//         let obj = parse(text, callback);
//         if (obj) {
//           read.question('++++ set value ', (update_txt) => {
//             let update_obj = parse(update_txt, callback);
//             collection.updateMany(obj, { $set: update_obj }, (err, result) => {
//               if (err) {
//                 console.error('-- Update failed!', err)
//               } else {
//                 if (result.matchedCount && result.modifiedCount) {
//                   console.log(`-- Found  ${result.matchedCount}  and successfully updated  ${result.modifiedCount}  `)
//                 } else {
//                   console.error('-- Update failed!')
//                 }
//               }
//               find(text, (found_after) => {
//                 callback()
//               })
//             })
//           })
//         }
//       } else {
//         console.log('-- No document matches criterion');
//         callback()
//       }
//     })
//   })
// }
//
// function unset(callback) {
//   read.question('++++ unset on ', (text) => {
//     find(text, (found_before) => {
//       if (Array.isArray(found_before) && found_before.length > 0) {
//         console.log(`You are about to update  ${found_before.length}  ${found_before.length === 1 ? 'document' : 'documents'}`);
//         let obj = parse(text, callback);
//         if (obj) {
//           read.question('++++ unset value ', (update_txt) => {
//             let update_obj = parse(update_txt, callback);
//             collection.updateMany(obj, { $unset: update_obj }, (err, result) => {
//               if (err) {
//                 console.error('-- Update failed!', err)
//               } else {
//                 if (result.matchedCount && result.modifiedCount) {
//                   console.log(`-- Found  ${result.matchedCount}  and successfully updated  ${result.modifiedCount}`)
//                 } else {
//                   console.error('-- Update failed!')
//                 }
//               }
//               find(text, (found_after) => {
//                 callback()
//               })
//             })
//           })
//         }
//       } else {
//         console.log('-- No document matches criterion');
//         callback()
//       }
//     })
//   })
// }
//
// function remove(callback) {
//   read.question('++ remove ', (text) => {
//     let obj = parse(text, callback);
//     if (obj) {
//       collection.deleteMany(obj, (err, result) => {
//         if (err) {
//           console.error('-- Failed to delete', err ? err : '')
//         } else if (result && result.deletedCount < 1) {
//           console.error('-- Nothing to delete')
//         } else {
//           console.log(`++ Successfully deleted ${result.deletedCount} items!`)
//         }
//         callback()
//       })
//     }
//   })
// }




