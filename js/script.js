/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */


/* NAME     SURNAME    ROLE                      IMAGE
Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
Scott    Estrada	Developer	              scott-estrada-developer.jpg
Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg */




// creo array di oggetti inserendo i dati fortiti


const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: './img/wayne-barnett-founder-ceo.jpg'
    
    },

    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: './img/angela-caroll-chief-editor.jpg'

    },

    {
        name: 'Walter',
        surname: 'Gordon',
        role:'Office Manager' ,
        image:'./img/walter-gordon-office-manager.jpg'

    },

    {
        name:'Angela' ,
        surname: 'Lopez',
        role: 'Social Media Manager',
        image:'./img/angela-lopez-social-media-manager.jpg'

    },

    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image:'./img/scott-estrada-developer.jpg'

    },

    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: './img/barbara-ramos-graphic-designer.jpg'

    }


]




// stampo con log tutti i dati in nostro possesso piu stinga foto con un ciclo for



for(let i = 0 ; i < team.length ; i++){
    console.log(team[i]);
    console.log('nome: ' + team[i].name);
    console.log('cognome: ' + team[i].surname);
    console.log('ruolo: ' + team[i].role);
    console.log('immagine: ' + team[i].image);

    
}







// devo riportare in pagina con innerHTML/Text i dati sotto forma di stringa x ogni chiave (nome, cognome, role, ecc)







////////////////////////////////////////////////////




//  fatto tutto sopra devo inserire in pagina tutti i dati dell'array dentro delle card



 






































