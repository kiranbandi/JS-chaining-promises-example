import axios from 'axios';

var getData = function(count) {
    return new Promise(function(resolve, reject) {
        axios.get('http://api.icndb.com/jokes/random')
            .then((response) => {
                resolve(response.data.value.joke);
            })
            .catch(reject);
    });
};


getData()
    .then((joke) => {
        let spanElement = document.createElement('span');
        spanElement.innerText = joke;
        document.getElementById('server-response').appendChild(spanElement);
        return getData();
    })
    .then((joke) => {
        let spanElement = document.createElement('span');
        spanElement.innerText = joke;
        document.getElementById('server-response').appendChild(spanElement);
        return getData();
    })
    .then((joke) => {
        let spanElement = document.createElement('span');
        spanElement.innerText = joke;
        document.getElementById('server-response').appendChild(spanElement);
        return getData();
    })
    .then((joke) => {
        let spanElement = document.createElement('span');
        spanElement.innerText = joke;
        document.getElementById('server-response').appendChild(spanElement);
        return getData();
    })