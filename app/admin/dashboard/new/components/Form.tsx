import { createBlog } from '@/lib/admin/createBlog';
import { useState } from 'react'

type Props = {}

const Form = ({ token }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [body, setBody] = useState('');
  const [publishedOn, setPublishedOn] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (event: HTMLFormElement) => {
    //event.preventDefault();

    const postData = {
      title,
      description,
      imageUrl,
      slug,
      body,
      publishedOn,
      author,
    };
    const data = await createBlog(token, title, description, imageUrl, slug, category, publishedOn, author, body)
  };



return (
  <div>
    <h1>Create a Post</h1>
    <form >
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
      <button type="submit">Submit</button>
    </form>
  </div>
)
}
export default Form