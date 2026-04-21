//Kod za komunikaciju za databazom/api-om za drugu fazu projekta
import data from "./data.json"

export function getBooks(){
    console.log(data.books);
    return data.books;
}

export function getAuthors(){
    return data.authors;
}

export function getBooksWithAuthors(){
    const allbooksandauthors = [];
    for ( let i = 0; i < data.books.length; i++ ){
        for ( let j = 0; j < data.authors.length; j++ ){
            if (data.books[i].authorId === data.authors[j].id){
                allbooksandauthors.push({...data.books[i], firstName: data.authors[j].firstName, lastName: data.authors[j].lastName});
            }
        }
    }
    return allbooksandauthors;
}

export function getReviews(){
    return data.reviews;
}
