import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { sanityClient } from "../lib/sanity/getClient";
import * as XLSX from 'xlsx';

const columns = [
  {
    title: 'Nama',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a className='text-rose-600 font-semibold'>{text}</a>,
  },
  {
    title: 'Umur',
    dataIndex: 'umur',
    key: 'umur',
  },
  {
    title: 'Jenis Kelamin',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Alamat',
    dataIndex: 'alamat',
    key: 'alamat',
  },
  {
    title: 'Telepon',
    dataIndex: 'telepon',
    key: 'telepon',
  },
];

function DataUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [serverData, setServerData] = useState({
    data: [],
    error: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchSanityData() {
      try {
        setIsLoading(true);
        const sanityData = await sanityClient.fetch(`*[_type == 'user-anak-dara']{
          _id,
          name,
          umur,
          gender,
          alamat,
          telepon
        }`);

        setServerData({
          data: sanityData,
          error: null,
          loading: false,
        });
      } catch (error) {
        setServerData({
          data: [],
          error: 'Error getting data. Please try again later.',
          loading: false,
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchSanityData();
  }, []);
  console.log('cek data user: ', serverData)

  let dataSource = [];
  if (serverData && serverData.data && serverData.data.length > 0) {
    dataSource = serverData.data
    .map((item) => ({
      key: item._id,
      name: item.name || "-",
      umur: item.umur || "-",
      gender: item.gender || "-",
      alamat: item.alamat || "-",
      telepon: item.telepon || "-",
    }));
  }

  const rearrangeDataForExcel = (data) => {
    // Rearrange the data based on the column order
    const rearrangedData = data.map((item, index) => {
      return {
        'No.': index + 1,
        'Nama': item.name,
        'Umur': item.umur,
        'Jenis Kelamin': item.gender,
        'Alamat': item.alamat,
        'Telepon': item.telepon
      };
    });

    return rearrangedData;
  };

  const downloadExcel = () => {
    const data = rearrangeDataForExcel(serverData.data);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  };
  return (
    <>
      <section id="list" className="text-gray-600 py-10 mt-10 px-36">
        <h2 className="py-10 font-bold text-3xl text-center">Data Pengguna Aplikasi Hi Anak Dara</h2>
        <div className="flex justify-end mb-4">
            <Button onClick={downloadExcel}>Download Excel</Button>
        </div>
        <Table className='font-normal' columns={columns} dataSource={dataSource} loading={isLoading}/>
      </section>
    </>
  )
}

export default DataUser