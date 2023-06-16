import getAllPost from '@/lib/getAllPost'
import getFormattedDate from '@/utils/getFormattedDate'
import React from 'react'

type Props = {}

const Table = async (props: Props) => {
    const data = await getAllPost()
    console.log(data)
    return (
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Blog Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4">{getFormattedDate(item.publishedAt)}</td>
                                <td className="px-6 py-4">{item.category}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Table