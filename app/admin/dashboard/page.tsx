'use client'
import { useRouter } from "next/navigation"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Table from "./components/Table"
type Props = {}

const DashBoard = (props: Props) => {
    const content = (<div className="my-12 max-w-5xl mx-auto flex flex-col  justify-center rounded-xl ">
        <div className="flex justify-between items-center my-6">
            <h1 className="text-3xl font-bold ">Dashboard</h1>
            <Link href="/admin/dashboard/new-entry"><button type="button" className="bg-gray-600 px-6 py-3 text-white rounded-lg hover:bg-gray-700">Create new entry</button></Link>
        </div>
        <Table />
    </div>)
    const { push } = useRouter()
    useEffect(function (): void | React.JSX.Element {
        const data = localStorage.getItem('auth-token')
        console.log(data)
        if (!data) {
            return push('/admin')
        } else {
            return content
        }
    })
}
export default DashBoard