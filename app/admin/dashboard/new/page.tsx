'use client'
import { createBlog } from '@/lib/admin/createBlog';
import Token from 'markdown-it/lib/token';
import { useState, useEffect } from 'react';


const CreatePostPage = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [body, setBody] = useState('');
  const [publishedOn, setPublishedOn] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    console.log(localStorage.getItem('auth-token'))
    //fetchCategories();
  }, []);

  // const fetchCategories = async () => {
  //   try {
  //     const response = await fetch('YOUR_CATEGORIES_API_ENDPOINT');
  //     const data = await response.json();
  //     setCategories(data);
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to send to the API
    const postData = {
      title,
      description,
      imageUrl,
      slug,
      body,
      publishedOn,
      author,
    };
    const token = localStorage.getItem('auth-token')
    const  data = await createBlog(token,title, description, imageUrl, slug,category,publishedOn,author,body)
    console.log(data);
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-3'>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={publishedOn}
            onChange={(e) => setPublishedOn(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            id="title"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {/* Repeat similar input fields for other form fields */}
        {/* <div>
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
