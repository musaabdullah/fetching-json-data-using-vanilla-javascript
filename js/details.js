const id = new URLSearchParams(window.location.search).get('id')

const post = document.querySelector('.card-body');
const deletePost = document.querySelector('.delete');
const update = document.querySelector('.update');
const form = document.querySelector('form');

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




deletePost.addEventListener('click', async () => {

    try {

        const res  = await fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
        method: 'DELETE',
        headers: {'Content-Type':'application/json'}
    });
    const data = await res.json();

    console.log(data);

    } catch (error) {
        console.log(error);
    }
   })

   const getPostId =  async (id) => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const postData = await res.json();

    form.title.value = postData.title;
    form.content.value = postData.body;
};


window.addEventListener("DOMContentLoaded", () => postDetail());
