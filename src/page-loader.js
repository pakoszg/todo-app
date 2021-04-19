const createDiv = (name, id) => {
    let div = document.createElement('div');
    div.id = id;
    div.className = name;
    return div;
}

const loadPage = () => {
    const content = document.getElementById('content');

    const header = createDiv(box, header);
    const sidebar = createDiv(box, sidebar);
    const main = createDiv(box, main);

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);

}

export default loadPage;