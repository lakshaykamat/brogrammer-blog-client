import { createBlog } from '@/lib/admin/createBlog';
import { useState } from 'react'

type Props = {}

const Form = (token: string) => {
  console.log(token)
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
      <form className='p-10 max-w-2xl shadow-xl my-12 mx-auto flex flex-col gap-3 rounded'>
        <h1 className='text-4xl font-bold'>Create a post</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className=''>Title</label>
          <input
            className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
            type="text"
            id="title"

            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discription">Discription</label>
          <input
            className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
            type="text"
            id="discription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className="flex flex-col gap-2">
            <label htmlFor="imageUrl">ImageUrl</label>
            <input
              className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="slug">Slug</label>
            <input
              className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
              type="text"
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="body">Body</label>
          <textarea
            className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
            // type='text'
            rows={4}
            cols={10}
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className="flex flex-col gap-2">
            <label htmlFor="publishedOn">PublishedOn</label>
            <input
              className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
              type="Date"
              id="publishedOn"
              value={publishedOn}
              onChange={(e) => setPublishedOn(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author">Author</label>
            <input
              className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <input
            className='px-6 py-1 rounded-md bg-gray-100 focus:outline-none focus:outline-gray-400'
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="button">
          <button type="submit" className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Submit</button>
        </div>

      </form>



    </div>
  )
}
export default Form