

const posts = document.querySelector('.posts');


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
       </div>
      </div>
      `
    });


    posts.innerHTML = template;
    console.log(postsData);
}





window.addEventListener("DOMContentLoaded", getPosts );