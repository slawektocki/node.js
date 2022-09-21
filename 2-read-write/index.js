const fs = require('fs');
const path = require('path'); //import modulow wbudowanych

function saveData(directory, pathh, logicVariable){

    fs.mkdir(path.join(__dirname, directory), function(err) { //tworzy FOLDER USER DATA lub wyswietla 
        if(err) {                                              //komunikat o tym ze folder istnieje
                 
        if(err.code === 'EEXIST') {
            console.log('Folder "userData" juz istnieje');
            return;
            }
            console.log(err);
        } else {
            console.log('Stworzono folder userData'); 
               
        }
    });     

             
    fs.readFile(path.join(__dirname, pathh), 'utf8' , function(err, data){ //odczyt pliku json z folderu DATA
                                                                                                           
        if (err) {
            console.log(err); 
        } else {
                     
            let usersData = JSON.parse(data);

            for (let i=0;i<usersData.length;i++){

            
            let nazwa_pliku = usersData[i].name.toString(); // [name] to string
            let imieInazwisko = nazwa_pliku.split(' '); //name to array[name, surname]
            let imie = imieInazwisko[0].toString(); //[name] to string
            let nazwisko = imieInazwisko[1].toString(); //[surname] to string
            let ulica = usersData[i].address.street.toString(); // dane adresowe to string
            let kod = usersData[i].address.zipcode.toString();
            let miasto = usersData[i].address.city.toString();
            let telefon = usersData[i].phone.toString(); 
            
            if (logicVariable == true){
                fs.writeFile(path.join(__dirname, 'userData', (i+1)+'-'+imieInazwisko[0].toLowerCase()+'-'+imieInazwisko[1].toLowerCase()+'.txt'), 'Name: '+imie+'\n'+'Surname: '+nazwisko+'\n'+'Street: '+ulica+'\n'+'Zip Code: '+kod+'\n'+'City: '+miasto+'\n'+'Phone: '+telefon, function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log('Stworzono plik :'+(i+1)+'-'+imie.toLowerCase()+'-'+nazwisko.toLowerCase()); // fs.writeFile zapisuje do plikow txt dane uzytkownikow
                    }                                                                //wyswietla w konsoli potwierdzenie utworzenia pliku
                })
            } 
        }

        if (logicVariable == false){
            console.log('nie nadpisano plików z danymi użytkowników')
        }
    }
            
    });

}

//saveData('userData', `data/2-read-write-users.json`, true);
module.exports = saveData;

             