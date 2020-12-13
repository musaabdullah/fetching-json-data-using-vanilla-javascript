const id = new URLSearchParams(window.location.search).get('id')

const post = document.querySelector('.card-body');


const postDetail = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const postData = await res.json();

    template = `
    <h5>${postData.title}</h5>
    <p>${postData.body}</p>
    `;
    console.log(id);
    console.log(postData);
    post.innerHTML = template;
}






window.addEventListener("DOMContentLoaded", () => postDetail());
