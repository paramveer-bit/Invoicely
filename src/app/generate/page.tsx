'use client'

import React, { useEffect, useRef, useState } from 'react'
import z, { set } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ItemSchema } from '@/Schemas/item.Schema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDebounceCallback, useDebounceValue } from 'usehooks-ts'


type itemSchema = {
    serialNo: number
    name: string,
    hsnCode: number,
    rate : number,
    qty: number,
    mrp: number,
    scheme: number,
    igst: number,
    cgst: number,
    sgst: number,
    netIgst: number,
    netCgst: number,
    netSgst: number,
    total: number
}

const styles = "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"


function NewItem({addNewItem}:{addNewItem : (item:itemSchema) => void}) {

    const [items,setItems] = useState<itemSchema[]>([])
    const [igst,setIgst] = useState(0);
    const [cgst,setCgst] = useState(0);
    const [sgst,setSgst] = useState(0);
    const [rate,setRate] = useState(0);
    const [qty,setQty] = useState(0);
    const [total,setTotal] = useState(0);
    const [scheme,setScheme] = useState(0);
    const[netIgst,setNetIgst] = useState(0);
    const[netCgst,setNetCgst] = useState(0);
    const[netSgst,setNetSgst] = useState(0);


    const debouncedIgst = useDebounceCallback(setIgst,300)
    const debouncedCgst = useDebounceCallback(setCgst,300)
    const debouncedSgst = useDebounceCallback(setSgst,300)



    const calculateTotal = ()=>{
        const TotalRate = rate*qty;
        const afterScheme = TotalRate - TotalRate*(scheme/100); 
        const t =  afterScheme+netCgst+netIgst+netSgst
        setTotal(parseFloat(t.toFixed(2)))
    }
    

    const form = useForm<z.infer<typeof ItemSchema>>({
        resolver: zodResolver(ItemSchema),
        
    })

    const onSubmit = (data: z.infer<typeof ItemSchema>) => {
        console.log(data)
        const netScheme = (qty*rate*scheme)/100
        const newItemData = {
            serialNo: data.serialNo,
            name: data.name,
            hsnCode: data.hsnCode,
            rate : data.rate,
            qty: data.qty,
            mrp: data.mrp,
            scheme: netScheme,
            netIgst: netIgst,
            netCgst: netCgst,
            netSgst: netSgst,
            igst: igst,
            cgst: cgst,
            sgst: sgst,
            total: total
        }
        console.log(newItemData)
        resetForm()
        setItems([...(items ?? []),newItemData])
    }


    const resetForm = () => {
        setIgst(0);
        setCgst(0);
        setSgst(0);
        setScheme(0);
        setRate(0);
        setQty(0);
        setTotal(0);
        setNetCgst(0);
        setNetIgst(0);
        setNetSgst(0);
        form.resetField("name")
        form.reset()
    };

    useEffect(()=>{
        console.log("Clearing form")
        form.reset()
    },[items])

    useEffect(() => {
        calculateTotal()
        const ni = (((rate*qty)-((rate*qty*scheme)/100))*igst)/100
        setNetIgst(parseFloat(ni.toFixed(2)))

        const ns = (((rate*qty)-((rate*qty*scheme)/100))*sgst)/100;
        setNetSgst(parseFloat(ns.toFixed(2)))

        const nc = (((rate*qty)-((rate*qty*scheme)/100))*cgst)/100
        setNetCgst(parseFloat(nc.toFixed(2)))

    },[igst,cgst,sgst,rate,qty,scheme])

    useEffect(()=>{
        calculateTotal()
    },[netCgst,netIgst,netSgst])



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <button
                type="submit"
                className="px-4 mb-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Add Item
                </button>
                <table className="w-full divide-y divide-gray-200 flex flex-col space-y-4">
                    <thead className="bg-gray-50">
                        <tr className='flex space-x-2'>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. No.</th>
                            <th className="w-[32.5%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="w-[13%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HSN Code</th>
                            <th className="w-[6.5%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MRP</th>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">rate</th>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheme</th>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IGST</th>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SGST</th>
                            <th className="w-[8%] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGST</th>
                            <th className="w-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 flex flex-col space-y-1 ">
                        <tr className='flex space-x-2 pt-1 w-full'>
                            {/* Serial No. */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="serialNo"
                                    render={({ field }) => (
                                        <FormItem className=''>
                                            <FormControl>
                                                <Input placeholder="S. No." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* Name */}
                            <td className='w-[32.5%]'>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Enter Item Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* HSN Code */}
                            <td className='w-[13%]'>
                                <FormField
                                    control={form.control}
                                    name="hsnCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="HSN Code" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* Qty */}
                            <td className='w-[6.5%]'>
                                <FormField
                                    control={form.control}
                                    name="qty"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Quantity" {...field} 
                                                    onChange={(e)=>{
                                                        setQty(+e.target.value)
                                                        field.onChange(e)
                                                    }} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* MRP */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="mrp"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="MRP" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>
                                    
                            {/* Rate */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="rate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Rate" {...field} 
                                                    onChange={(e)=>{
                                                        setRate(+e.target.value)
                                                        field.onChange(e)
                                                    }} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>
                            {/* Scheme */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="scheme"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Scheme" {...field} 
                                                    onChange={(e)=>{
                                                        setScheme(+e.target.value)
                                                        field.onChange(e)
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>
                            
                            {/* IGST */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="igst"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                {
                                                    igst===0?
                                                        <Input placeholder="IGST" {...field} 
                                                            onChange={(e)=>{
                                                                debouncedIgst(+e.target.value)
                                                                field.onChange(e)
                                                            }}
                                                        />
                                                        :
                                                        <div
                                                            className="flex flex-col h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

                                                        >
                                                            <h1 className='-mt-1'>{netIgst}</h1>
                                                            <div className='-mt-1 w-auto'>
                                                                <input placeholder="IGST" {...field} 
                                                                    onChange={(e)=>{
                                                                        debouncedIgst(+e.target.value)
                                                                        field.onChange(e)
                                                                    }} 
                                                                    className='border-0 text-xs w-4 font-bold'
                                                                />
                                                                <span>%</span>
                                                            </div>

                                                        </div>
                                                }
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* SGST */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="sgst"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            {
                                                    sgst===0?
                                                        <Input placeholder="SGST" {...field} 
                                                            onChange={(e)=>{
                                                                debouncedSgst(+e.target.value)
                                                                field.onChange(e)
                                                            }}
                                                        />
                                                        :
                                                        <div
                                                            className="flex flex-col h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

                                                        >
                                                            <h1 className='-mt-1'>{netSgst}</h1>
                                                            <div className='-mt-1 w-auto'>
                                                                <input placeholder="SGST" {...field} 
                                                                    onChange={(e)=>{
                                                                        debouncedSgst(+e.target.value)
                                                                        field.onChange(e)
                                                                    }} 
                                                                    className='border-0 text-xs w-4 font-bold'
                                                                />
                                                                <span>%</span>
                                                            </div>

                                                        </div>
                                                }
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* CGST */}
                            <td className='w-[8%]'>
                                <FormField
                                    control={form.control}
                                    name="cgst"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            {
                                                    cgst===0?
                                                        <Input placeholder="Enter IGST" {...field} 
                                                            onChange={(e)=>{
                                                                debouncedCgst(+e.target.value)
                                                                field.onChange(e)
                                                            }}
                                                        />
                                                        :
                                                        <div
                                                            className="flex flex-col h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

                                                        >
                                                            <h1 className='-mt-1'>{netCgst}</h1>
                                                            <div className='-mt-1 w-auto'>
                                                                <input placeholder="CGST" {...field} 
                                                                    onChange={(e)=>{
                                                                        debouncedCgst(+e.target.value)
                                                                        field.onChange(e)
                                                                    }} 
                                                                    className='border-0 text-xs w-4 font-bold'
                                                                />
                                                                <span>%</span>
                                                            </div>

                                                        </div>
                                                }
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </td>

                            {/* Total */}
                            <td className='w-[8%]'>
                                <div 
                                    className= "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {total}
                                </div>
                            </td>            
                                
                        </tr>
                        {
                            items?.map((item,index)=>{
                                return (
                                    <tr className='flex space-x-2 pt-1 w-full'>
                                        {/* Serial No. */}
                                        <td className='w-[8%]'>
                                            <div className={`${styles}`}>
                                                {item.serialNo}
                                            </div>
                                        </td>

                                        {/* Name */}
                                        <td className='w-[32.5%]'>
                                        <div className={`${styles}`}>
                                                {item.name}
                                            </div>
                                        </td>

                                        {/* HSN Code */}
                                        <td className='w-[13%]'>
                                        <div className={`${styles}`}>
                                                {item.hsnCode}
                                            </div>
                                        </td>

                                        {/* Qty */}
                                        <td className='w-[6.5%]'>
                                            <div className={`${styles}`}>
                                                {item.qty}
                                            </div>
                                        </td>

                                        {/* MRP */}
                                        <td className='w-[8%]'>
                                        <div className={`${styles}`}>
                                                {item.mrp}
                                            </div>
                                        </td>
                                                
                                        {/* Rate */}
                                        <td className='w-[8%]'>
                                            <div className={`${styles}`}>
                                                {item.rate}
                                            </div>
                                        </td>
                                        {/* Scheme */}
                                        <td className='w-[8%]'>
                                            <div className={`${styles}`}>
                                                {item.scheme}
                                            </div>
                                        </td>
                                        
                                        {/* IGST */}
                                        <td className={`w-[8%]`}>
                                            <div className={`${styles} flex flex-col`}>
                                                <h1 className='-mt-1'>{item.netIgst}</h1>
                                                <h1 className='-mt-1 text-xs font-bold'>{item.igst}%</h1>
                                            </div>
                                        </td>

                                        {/* SGST */}
                                        <td className={`w-[8%]`}>
                                            <div className={`${styles} flex flex-col`}>
                                                <h1 className='-mt-1'>{item.netSgst}</h1>
                                                <h1 className='-mt-1 text-xs font-bold'>{item.sgst}%</h1>
                                            </div>
                                        </td>

                                        {/* CGST */}
                                        <td className={`w-[8%]`}>
                                            <div className={`${styles} flex flex-col`}>
                                                <h1 className='-mt-1'>{item.netCgst}</h1>
                                                <h1 className='-mt-1 text-xs font-bold'>{item.cgst}%</h1>
                                            </div>
                                        </td>

                                        {/* Total */}
                                        <td className='w-[8%]'>
                                            <div className={`${styles}`}>
                                                {item.total}
                                            </div>   
                                        </td>           
                                            
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </form>
        </Form>
    )
}

export default NewItem
