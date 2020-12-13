

const posts = document.querySelector('.posts');

const update = document.querySelector('.update');
const form = document.querySelector('form');
const getPosts = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await res.json();

    template = ``;
    postsData.forEach(post =>{
      template += `
      <div class="card my-2">
       <div class="card-body">
           <h4>${post.title}</h4>
           <p>${post.body}</p>
           <a href="/views/details.html?id=${post.id}" class="btn btn-primary">Read more</a>
           <Button onclick="getPostId(${post.id})" class="btn btn-success">Update</Button>
       </div>
      </div>
      `
    });


    posts.innerHTML = template;
    console.log(postsData);
}

const getPostId =  async (id) => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const postData = await res.json();

    form.title.value = postData.title;
    form.body.value = postData.body;
};




window.addEventListener("DOMContentLoaded", getPosts );