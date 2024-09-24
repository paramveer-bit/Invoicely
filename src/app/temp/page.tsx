'use client'

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PartySchema } from '@/Schemas/party.Schema'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PartyDetails from './partyDetails'
import { ItemSchema } from '@/Schemas/item.Schema'
import NewItem from './NewItem'

type itemSchema = {
    serialNo: number
    name: string,
    hsnCode: number,
    qty: number,
    mrp: number,
    scheme: number,
    igst: number,
    cgst: number,
    sgst: number,
    total: number
}

function GeneratorPage() {

    const[items,setItems] = useState<itemSchema[]>()

    const addNewItem = (item:itemSchema) =>{
        console.log(item)
    }




  return (
    <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 w-full">Billing Page</h1>
        <PartyDetails />
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Items</h2>
            <div className="mb-4">
                
                {/* New item Butoon */}
                <NewItem addNewItem={addNewItem}/>
            </div>

            
            

        </div>
        

    </div>
  )
}

export default GeneratorPage