'use client'

import React from 'react'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PartySchema } from '@/Schemas/party.Schema'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function partyDetails() {

    const form = useForm<z.infer<typeof PartySchema>>({
        resolver: zodResolver(PartySchema),
    })

    const onSubmit = (data: z.infer<typeof PartySchema>) => {
        console.log(data)
    }

  return (
    <div>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -space-y-3">
                    {/* Date */}
                    <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem
                            className='-mt-3'
                        >
                        <FormLabel htmlFor="date" >Date</FormLabel>
                        <FormControl>
                            <Input 
                                type='date' 
                                placeholder="shadcn" 
                                {...field} 
                                value={field.value ? field.value.toISOString().split('T')[0] : ''}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* InvoiceNo */}
                    <FormField
                    control={form.control}
                    name="invoiceNo"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Invoice No.</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Invoice No" {...field} />

                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* Party Name */}
                    <FormField
                    control={form.control}
                    name="name"
                    
                    render={({ field }) => (
                        <FormItem
                            className='col-span-2'
                        >
                        <FormLabel>Party Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter party Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* address */}
                    <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem
                            className='col-span-2'
                        >
                        <FormLabel>Addrress</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Address" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* gstNo */}
                    <FormField
                    control={form.control}
                    name="gstNo"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>GST No.</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Gst No." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* State Code */}
                    <FormField
                    control={form.control}
                    name="stateCode"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>State Code</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter State Code" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    
                    {/* Phone No */}
                    <FormField
                    control={form.control}
                    name="phoneNo"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone No.</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Phone No." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                
            </form>
        </Form>
    </div>
  )
}

export default partyDetails