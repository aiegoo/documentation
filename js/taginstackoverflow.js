'use strict';

/*
 * 이 코드는 아래 링크를 참조하여 작성했습니다.
 * JavaScript: using axios in the browser to make API requests
 * https://gabrieleromanato.name/javascript-using-axios-in-the-browser-to-make-api-requests
 */

const API_URL = 'https://api.stackexchange.com/2.2/';

const getAPIData = query => {

    const {tag, endpoint} = query;
    const url =  API_URL + endpoint
    const option = {
        params: {
            key: 'eYqDldemBS8LF63ycheT0Q((',
            order: 'desc',
            sort: 'popular',
            inname: tag,
            site: 'stackoverflow'
        }
    }

    return axios.get(url, option);
};

const insertAfter = (referenceNode, newNode) =>  {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const parseData = (data, detail) => {
    const refNode = document.querySelector('div.visible>h3#stackoverflow');
    if(refNode.nextSibling.nodeName != 'UL') {      
        // UL 태그가 nextSibling 이면 이미 한 번 실행한 상태이므로 다시 실행하지 않음 
        const newUlNode = document.createElement('ul');
        newUlNode.className = "post-list leaders";
        const iNum = data.items.length
        if (iNum) {
            const topNum = Math.min(5, iNum);
            refNode.innerHTML = 
                `Top ${topNum} out of ${iNum} tags related to "#${detail}" in StackOverflow`;
            data.items.slice(0, topNum).forEach( item => {
                const {count, _, _1, _2, name} = item; 
                newUlNode.innerHTML += 
                `<li>
                    <a class="post-link" href="https://stackoverflow.com/questions/tagged/${name}">
                    <span>#${name}</span>
                    <div class="post-meta" style="float: right;">${count} questions</div>
                </li>`;
            })
        } else  {
            refNode.innerHTML = `There is no tag related to "#${detail}" in StackOverflow`;
        }
        insertAfter(refNode, newUlNode);
    } 
};

const handleError = error => {
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(error, null, 2);
    document.body.appendChild(pre);
};

const init = async (e) => {
    try {
        const response = await getAPIData({tag: e.detail, endpoint: 'tags'});
        parseData(response.data, e.detail);
    } catch(err) {
        handleError(err);
    }
};

document.addEventListener('showtag', (e) => {
    console.log('init() start');
    init(e);
});
