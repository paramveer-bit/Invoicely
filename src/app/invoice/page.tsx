import React from 'react'


const itemsList = [
  {
    serialNo: 1,
    item: "Laptop",
    qty: 2,
    hsnCode: "84713010",
    price: 45000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 98100,
  },
  {
    serialNo: 2,
    item: "Mouse",
    qty: 5,
    hsnCode: "84716060",
    price: 500,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 5900,
  },
  {
    serialNo: 3,
    item: "Keyboard",
    qty: 3,
    hsnCode: "84716050",
    price: 800,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 5232,
  },
  {
    serialNo: 4,
    item: "Monitor",
    qty: 1,
    hsnCode: "85285100",
    price: 12000,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 14160,
  },
  {
    serialNo: 5,
    item: "Printer",
    qty: 2,
    hsnCode: "84433100",
    price: 7000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 15260,
  },
  {
    serialNo: 6,
    item: "Desk Chair",
    qty: 4,
    hsnCode: "94017100",
    price: 2500,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 10920,
  },
  {
    serialNo: 7,
    item: "Projector",
    qty: 1,
    hsnCode: "85286200",
    price: 30000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 35400,
  },
  {
    serialNo: 8,
    item: "External Hard Drive",
    qty: 3,
    hsnCode: "84717020",
    price: 4000,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 13080,
  },
  {
    serialNo: 9,
    item: "Webcam",
    qty: 2,
    hsnCode: "85258020",
    price: 1500,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 3270,
  },
  {
    serialNo: 10,
    item: "UPS",
    qty: 1,
    hsnCode: "85044010",
    price: 5000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 5900,
  },
  {
    serialNo: 1,
    item: "Laptop",
    qty: 2,
    hsnCode: "84713010",
    price: 45000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 98100,
  },
  {
    serialNo: 2,
    item: "Mouse",
    qty: 5,
    hsnCode: "84716060",
    price: 500,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 5900,
  },
  {
    serialNo: 3,
    item: "Keyboard",
    qty: 3,
    hsnCode: "84716050",
    price: 800,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 5232,
  },
  {
    serialNo: 4,
    item: "Monitor",
    qty: 1,
    hsnCode: "85285100",
    price: 12000,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 14160,
  },
  {
    serialNo: 5,
    item: "Printer",
    qty: 2,
    hsnCode: "84433100",
    price: 7000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 15260,
  },
  {
    serialNo: 6,
    item: "Desk Chair",
    qty: 4,
    hsnCode: "94017100",
    price: 2500,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 10920,
  },
  {
    serialNo: 7,
    item: "Projector",
    qty: 1,
    hsnCode: "85286200",
    price: 30000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 35400,
  },
  {
    serialNo: 8,
    item: "External Hard Drive",
    qty: 3,
    hsnCode: "84717020",
    price: 4000,
    scheme: "Yes",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 13080,
  },
  {
    serialNo: 9,
    item: "Webcam",
    qty: 2,
    hsnCode: "85258020",
    price: 1500,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 3270,
  },
  {
    serialNo: 10,
    item: "UPS",
    qty: 1,
    hsnCode: "85044010",
    price: 5000,
    scheme: "No",
    cgst: 9,
    igst: 0,
    sgst: 9,
    total: 5900,
  }
];


function InvoicePage() {
  return (
    <div 
      className='m-5 p-5 flex flex-col items-center border-2 border-black min-h-screen font-bold'
    >

      {/* Header GST and Phone No */}
      <div className='flex justify-between font-bold text-lg w-full'>
        <div>
          <h1>GSTIN : 06AJTPK8104F1Z4</h1>
          <h1>D.L. No. 20-492/OB</h1>
        </div>
        <h1 className='text-3xl mr-28'>INVOICE</h1>
        <div>
          <h1>M. 9896206234</h1>
          <h1>M. 9812129059</h1>
        </div>
      </div>

      {/* Heading name */}
      <div className='text-center mt-2 border-b-2 w-full border-black'>
        <h1 className='text-2xl font-bold'>
          KAVIRAJ MEDICAL AND GENERAL STORE
        </h1>
        <h1 className='text-xl mt-3 font-bold'>
          10, Old Anaj Mandi, Sampla (Rohtak)-124501
        </h1>
      </div>

      

      {/* Invoice Date */}
      <div className='justify-between w-full mt-2'>
          <h1>Invoice No. : 1234</h1>
          <h1>Date : 12/12/2021</h1>
      </div>

      {/* Party Details */}

      <div className='flex flex-col items-start w-full mt-2 border-b-2 border-black'>
        <div className='flex space-x-20 w-full'>
          <h1>Name :- <span className='font-medium'>Kaviraj Medical and General Store</span></h1>
          <h1>Address :- <span className='font-medium'>Shop no. 10 Old anaj mandi Sampla</span></h1>
        </div>
        <div className='flex  space-x-10 mt-1'>
          <h1>Phone No. <span className='font-medium'>7494938585</span></h1>
          <h1>GSTIN. 06AJTPK8104F1Z4</h1>
          <h1>State Code 124501</h1>
        </div>
      </div>

      <table className='w-full -mx-2'>
        <thead>
          <tr className='flex w-full mt-2 border-2 justify-between border-black px-2 bg-slate-400'>
            <th className='border-r-2 border-black w-[8%] text-center'><h1>S. No.</h1></th>
            <th className='border-r-2 border-black w-[32.5%] text-center'><h1>Items</h1></th>
            <th className='border-r-2 border-black w-[6.5%] text-center'><h1>Qty</h1></th>
            <th className='border-r-2 border-black w-[13%] text-center'><h1>HSN CODE</h1></th>
            <th className='border-r-2 border-black w-[8%] text-center'><h1>Price</h1></th>
            <th className='border-r-2 border-black w-[8%] text-center'><h1>Scheme</h1></th>
            <th className='border-r-2 border-black w-[8%] text-center'><h1>CGST</h1></th>
            <th className='border-r-2 border-black w-[8%] text-center'><h1>IGST</h1></th>
            <th className='border-r-2 border-black w-[8%] text-center'><h1>SGST</h1></th>
            <th className='w-20 text-center px-2'><h1>TOTAL</h1></th>
          </tr>
        </thead>

        {
          itemsList.map((item,index)=>{
            return (
              <tr className='flex w-full border-r-2 border-l-2 border-b-2 justify-between  border-black px-2' key={index}>
                <td className='border-r-2 border-black w-[8%] text-center'><h1>{item.serialNo}</h1></td>
                <td className='border-r-2 border-black w-[32.5%] text-center'><h1>{item.item}</h1></td>
                <td className='border-r-2 border-black w-[6.5%] text-center'><h1>{item.qty}</h1></td>
                <td className='border-r-2 border-black w-[13%] text-center'><h1>{item.hsnCode}</h1></td>
                <td className='border-r-2 border-black w-[8%] text-center'><h1>{item.price}</h1></td>
                <td className='border-r-2 border-black w-[8%] text-center'><h1>{item.scheme}</h1></td>
                <td className='border-r-2 border-black w-[8%] text-center'><h1>{item.cgst}</h1></td>
                <td className='border-r-2 border-black w-[8%] text-center'><h1>{item.igst}</h1></td>
                <td className='border-r-2 border-black w-[8%] text-center'><h1>{item.sgst}</h1></td>
                <td className='w-20 text-center px-2'><h1>{item.total}</h1></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default InvoicePage
                 