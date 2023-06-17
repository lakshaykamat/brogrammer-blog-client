'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import React from 'react'
import Link from 'next/link'
import Table from "./components/Table"
type Props = {}

const DashBoard = (props: Props) => {
    const { push } = useRouter()
    useEffect(() => {
        console.log("use effect is running...")
        const data = localStorage.getItem('auth-token')
        if (!data) {
            push('/admin/')
        }
    })
    return (
        <div className="my-12 max-w-5xl mx-auto flex flex-col  justify-center rounded-xl ">
            <div className="flex justify-between items-center my-6">
                <h1 className="text-3xl font-bold ">Dashboard</h1>
                <Link href="/admin/dashboard/new-entry"><button type="button" className="bg-gray-600 px-6 py-3 text-white rounded-lg hover:bg-gray-700">Create new entry</button></Link>
            </div>
            <Table />

        </div>



    )
}
export default DashBoard