import axios from 'axios'
export const createBlog = async(token:string, title:string,description:string,image:string,slug:string,category:string,publishedAt:string,author:string,body:string)=>{
    let data = JSON.stringify({
        "title": title,
        "description": description,
        "image": image,
        "slug": slug,
        "category":category,
        "publishedAt":publishedAt,
        "author": author,
        "body": body
      });
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://portfilio-blog-page.onrender.com/api/blog`,
        headers: { 
          'auth-token': `${token}`, 
          'Content-Type': 'application/json'
        },
        data : data
      };
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      }
      catch (error) {
        console.log(error);
      }
}
