import axios from 'axios';
import store from '../store';

export function conexApi() {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
        console.log(response.data.results);
        store.dispatch('infoApi',response.data.results);
    })
    .catch(error => {
        console.error(error);
    })
}
