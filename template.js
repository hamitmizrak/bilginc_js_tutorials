/* 
console.log("console.log data")
document.write("deneme<br/>")
alert("deneme")
""
''
``
*/
//dynamics variable
//global scope
//var
// var valueData = "Data value 55 66";
// document.write(valueData + "<br/>")
// var value1 = "Data";

// //local scope
// //let:
// let $_value2 = "Data2";
// alert($_value2)
// let value3 = "Data2";
// value3 = 44;

// //const
// const value4 = 3.14;
//let value1 = 44;
// let value2 = 44.56;
// let value3 = 3 > 1;
// let value4 = [];
// let value5 = {};

// //whoisting
// value6="Merhabalar";
// let value6;

//typeof
// let value1 = 44;
// console.log(typeof value1);

// let value2 = 44.56;
// console.log(typeof value2);

// let value3 = "Merhablar";
// console.log(typeof value3)

// let value4 = true;
// console.log(typeof value4)

// let value5 = [];
// console.log(typeof value5)

// let value6 = {};
// console.log(typeof value6)

//undefined
// let data;
// console.log(data);

// //Infinity
// const data2=44/0;
// console.log(data2)

// //NaN
// let data3=Number("asd")/14;
// console.log(data3)

//let number=Number(prompt("Lütfen sayı giriniz"));

//Escape => 
//console.log("1.satır\n2.satır")

//Math
//console.log(Math.min(2,5,3,8,-99))

//bilimsel gösterim
// let bilimsel=12E-5;
// console.log(bilimsel)

//CAST
//Number("14")
//String(14)

//String

//Function
//DRY

//Normal Function
//1
// function returnsuzParametresiz(){
// document.write("returnsuz Parametresiz<br/>")
// }
// returnsuzParametresiz();

// //2
// function returnsuzParametreli(data){
// document.write("returnsuz Parametreli "+data+"<br/>")
// }
// returnsuzParametreli("js");

// //3
// function returnluParametresiz(){
// return "returnslu Parametresiz";
// }
// let data=returnluParametresiz();

// //4
// function returnluParametreli(data){
//     return "returnlu Parametrli "+data;
//     }
// let data2=returnluParametreli();


//Normal Function
// function returnsuzParametresiz(){
// document.write("Normal Function <br/>")
// }
// returnsuzParametresiz();


// //Anonymous Function
// const value=function (){
//     document.write("Anonymous function <br/>")
// }
// value();

// //Arrow Function
// let value2=()=>{
//     document.write("Arrows function")
// }
// value2();


//Immedia Function
// (
//     function(){
//         console.log("deneme")
//     }
// )();

//////////////////////////////////////////////
//callback:bir fonksiyona bizler parametre veriyoruz ve sonra fonksiyonu tekrar çağır.

//first function
// function callBackFirst(number){
//     console.log(Math.pow(number,2));
// }

// //second function
// function callBackSecond(callback){
//     const userData=Number(prompt("Lütfen bir sayı giriniz"));
//     callback(userData);
// }

//callbackfunction ==> SP(Monad)
//callBackSecond(callBackFirst);
//////////////////////////////////////////////

//setInterval
let timeSchedule = () => {
    setInterval(function () {
        console.log("merhabalar")
    }, 2000);
};
//timeSchedule()

//////////////////////////////////////////////

// CALLBACKFUNCTION
// callback beklediğimiz zamanda önce gelirse
// parameters yanlış verilirse(asign)
// Callback function çağrılmaz
//computer
let callBackComputer = () => {
    //computer Object
    const computer = [
        { computerName: "computer 1", price: 10 },
        { computerName: "computer 2", price: 20 },
        { computerName: "computer 3", price: 30 }
    ];
    //console.log(computer)

    //her bir elemana erişim sağladım
    const listComputer = () => {
        computer.map(temp => {
            console.log(temp.computerName)
        });
    };

    //push CallBackFunction
    const addComputer = (trade, callback) => {
        computer.push(trade);
        callback();
    }
    // object yeni veriler ekledik
    addComputer({ computerName: "computer 4", price: 40 }, listComputer)
}
//callBackComputer()

///////////////////////////////////////////////////////////
//PROMISE
// ********Callback sıkıntıları****************
// pending: bekleniyor
// resolve:eğer istediğimze ulaştıysak
// reject: eğer sorun teşkil edilirse
// callback beklediğimiz zamanda önce gelirse
// parameters yanlış verilirse(asign)
// Callback function çağrılmaz

// const promiseData1=new Promise((resolve,reject)=>{
//     resolve("Merhabalar");
// });
// console.log(promiseData1);

// promiseData1.then(value=>{
// console.log(value)
// });

// const promiseData1=new Promise((resolve,reject)=>{
//     //resolve("Merhabalar");
//     reject("bağlantı sağlanamadı");
// });
// console.log(promiseData1);

// promiseData1.catch(error=>{
//     console.log("data is not "+error)
// })

// const promiseData1=new Promise((resolve,reject)=>{
//     //resolve("Merhabalar");
//     reject("bağlantı sağlanamadı");
// });
// console.log(promiseData1);

// promiseData1.then(value=>{
// console.log(value)
// });

// promiseData1.catch(error=>{
//     console.log("data is not "+error)
// })

// const promiseData1=new Promise((resolve,reject)=>{
//     resolve("Merhabalar");
//     reject("bağlantı sağlanamadı");
// });
// console.log(promiseData1);

// //Chain: zincirleme
// //then: eğer resolve doğru sonuçlanırsa çalışır.
// //catch: herhangi bir hata olursa
// promiseData1.then(value=>{
// console.log(value)
// }).catch(error=>{
//     console.log("data is not "+error)
// })

//Promise Examples

///////////////////////////////////////////////////////////
let promiseComputer = () => {
    //computer object
    const computer = [
        { computerName: "computer 1", price: 10 },
        { computerName: "computer 2", price: 20 },
        { computerName: "computer 3", price: 30 }
    ];

    //Computer Map List
    const listComputer = () => {
        computer.map(temp => {
            console.log(temp.computerName);
        });
    };

    //push promise
    const addComputer = (trade) => {
        const promiseReturn = new Promise((resolve, reject) => {
            computer.push(trade);
        });
        return promiseReturn;
    };

    // addComputer (promise)
    addComputer({ computerName: "computer 4", price: 40 })
        .then(() => {
            console.log("new item")
        }).catch((error) => {
            console.log(error)
        });

    //   const resultAsynAwait= async () =>{
    //         const firtsDataValue = await addComputer({ computerName: "computer 4", price: 40 })
    //         console.log("new item" + firtsDataValue)
    //     }
    //    resultAsynAwait()

    listComputer()
}
//promiseComputer()

///////////////////////////////////////////////////////////
let asyncAwaitComputer = () => {
    //computer object
    const computer = [
        { computerName: "computer 1", price: 10 },
        { computerName: "computer 2", price: 20 },
        { computerName: "computer 3", price: 30 }
    ];

    //computer Map List
    const listComputer = () => {
        computer.map(temp => {
            console.log(temp.computerName)
        });
    };

    //push promise
    const addComputer = (trade) => {
        const promiseReturn = new Promise((resolve, reject) => {
            computer.push(trade);
        });
        return promiseReturn;
    }

    //Promise (ES7)
    // addComputer({ computerName: "computer 4", price: 40 })
    // .then(() => {
    //     console.log("new item")
    // }).catch((error) => {
    //     console.log(error)
    // });

    //Asyn /Await(ES8)
    async function resultAsynAwait() {
        const firsDataValue = await addComputer({ computerName: "computer 4", price: 40 });
        console.log(firsDataValue);
    }
    resultAsynAwait();

    listComputer();
}
//asyncAwaitComputer();

////////////////////////////////////////////////////////////////////////////////////
let promiseData3 = () => {
    //1.function çalıştıktıktan sonra 2.function çalışsın
    //1.value  start
    function fistData(value1) {
        return new Promise((resolve, reject) => {
            console.log("1.veri başlıyor...")
            if (value1)
                resolve("1.veri çalıştı")
            else {
                reject("1.veri çalışmadı !!!!")
            }
        });
    }; //ends 1.value

    //2.value
    function secondData(value2) {
        return new Promise((resolve, reject) => {
            console.log("2.veri başlıyor ...")
            if (value2)
                resolve("2.veri çalıştı")
            else
                reject("2.veri çalışmadı")
        });//end Promise
    }; //end secondData

    //Promise chain
    let isLogin = true;
    fistData(isLogin)
        .then(temp => {
            console.log(temp);
            let permission = false;
            return secondData(permission);
        }).then(temp => {
            console.log(temp)
        }).catch(err => {
            console.log(err)
        });
}
//promiseData3();

////////////////////////////////////////////////////////////////////////////////////
let asynAwait3 = () => {

    //1.value  start
    function login(result) {
        return new Promise((resolve, reject) => {
            console.log("Sisteme Giriliyor ...")
            if (result)
                resolve("Login yapıldı Admin sayfasına yönlendiriliyorsunuz")
            else
                reject("Lütfen kayıt olunuz")
        });//end Promise
    }//end login

    //2.value
    function admin(result) {
        return new Promise((resolve, reject) => {
            console.log("Gizli sayfaya Giriliyor ...")
            //Ternary Data
            let resultData = (result) ? resolve("Gizli sayfa yönlendiriliyor") : reject("Yetkiniz bulunmuyor");
        }) //end Promise
    }// end admin

    //Asyn Await (1.YOL)
    // async function resultAsynAwait() {
    //     let isLogin = true;
    //     const isadmin = await login(isLogin);
    //     console.log("Login yapıldı Admin sayfasına yönlendiriliyorsunuz")

    //     let isJwtToken = true;
    //     const permission = await admin(isJwtToken);
    //     console.log(permission)
    // }

    //Asyn Await (2.YOL)
    let resultAsynAwait = async () => {
        try {
            let isLogin = true;
            const isadmin = await login(isLogin);
            console.log("Login yapıldı Admin sayfasına yönlendiriliyorsunuz")


            let isJwtToken = true;
            const permission = await admin(isJwtToken);
            console.log(permission)
        } catch (err) {
            console.log(err);
            //console.log(err.name);
            //console.log(err.message);
        }
    }
    resultAsynAwait()
}
//asynAwait3() 

////////////////////////////////////////////////////////////////////////////////////
let arrayData = function () {
    //diziler sıfırncı (indis) başlar
    let arr = [];
    arr[0] = "Merhabalar";
    arr[1] = 44;
    arr[2] = 55.63;
    arr[3] = true;
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[3]);
    console.log(arr[arr.length - 1]);
}
//arrayData();

//Random 5 tane sayı üretsin 
let createArrayData = () => {
    let temp;
    let dizi = [];
    for (let i = 0; i < 5; i++) {
        //round: 3.4
        temp = Math.round(Math.random() * 7 + 1);
        dizi[i] = temp;
    }
    return dizi;
}

let showArrayData = () => {
    console.log(createArrayData());
    let resultArray = createArrayData();
    //iterative for
    document.write("<br/>iterative for<br/>");
    for (let i = 0; i < resultArray.length; i++) {
        document.write(resultArray[i] + " ");
    }
    document.write("<br/>");

    //For IN =>(for Over Index) eğer indis sayısı gerekiyorsa
    //(dizideki indisler)
    for (let temp in resultArray) {
        document.write(temp + " ");
    }

    document.write("<br/>");
    document.write("<br/> for IN<br/>");
    for (let temp in resultArray) {
        document.write(resultArray[temp] + " ");
    }

    document.write("<br/>");
    //For OF =>(for over member) 
    //(dizideki elemanlar)
    document.write("<br/> for OF<br/>");
    for (let temp of resultArray) {
        document.write(temp + " ");
    }

    document.write("<br/>");
    document.write("<br/> forEach<br/>");
    //dizi eleman toplamını
    let sumData = 0;
    resultArray.forEach(function (value) {
        sumData += value
    })
    document.write(sumData + " ");
    document.write("<br/> <br/>  value,index,array<br/> ");
    resultArray.forEach(function (value, index, array) {
        document.write(value + " ");
        //document.write(index+" ");
        //document.write(array);
    });


}
//showArrayData()

let popPush = () => {
    let dizi = [1, 2, 3, 4, 5];
    //push => elemanın sonuna eklemek
    //unshift=>elemanın başına  eklemek
    dizi.push(6)
    dizi.unshift(0)
    for (let i = 0; i < dizi.length; i++) {
        document.write(dizi[i] + " ");
    }
    document.write("<br/>");

    //pop => elemanın sondan 1 eleman çıkar
    dizi.pop()
    dizi.shift()
    //shift=>elemanın baştan 1 eleman başa çıkar
    for (let i = 0; i < dizi.length; i++) {
        document.write(dizi[i] + " ");
    }
    document.write("<br/>")
    //delete dizi[0]
    for (let i = 0; i < dizi.length; i++) {
        document.write(dizi[i] + " ");
    }
}
//popPush();


let arrayData3 = () => {
    let dizi = createArrayData();
    for (let i = 0; i < dizi.length; i++) {
        document.write(dizi[i] + " ");
    }
    document.write( "<br/>");

    //sort: küçükten büyüğe doğru sıralamak
    //dizi.sort();

    //reverse
    //dizi.reverse();

    //Büyükten Küçüğe doğru sıralamak
    dizi.sort().reverse()

    for (let i = 0; i < dizi.length; i++) {
        document.write(dizi[i] + " ");
    }


}
arrayData3()