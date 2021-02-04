export function getInfoUsuarios(page = 1){
    const url = `https://reqres.in/api/users?page=${page}`;

    return fetch(url).
         then((response) => {
             return response.json();
         })
         .then((result) => {
             return result;
     });
 }