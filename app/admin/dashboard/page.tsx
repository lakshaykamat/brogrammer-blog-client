'use client'
import Link from 'next/link'
import Table from "./components/Table"
import { use, useEffect } from 'react'
import PrivateComponent from "./components/Private"
type Props = {}

const DashBoard = (props: Props) => {

    return (
        <PrivateComponent>
            <div className="my-12 max-w-5xl mx-auto flex flex-col  justify-center rounded-xl ">
                <div className="flex justify-between items-center my-6">
                    <h1 className="text-3xl font-bold ">Dashboard</h1>
                    <Link href="/admin/dashboard/new"><button type="button" className="bg-gray-600 px-6 py-3 text-white rounded-lg hover:bg-gray-700">Create new entry</button></Link>
                </div>
                <Table />
            </div>
        </PrivateComponent>
    )
}
export default DashBoard