'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { LuPencil } from 'react-icons/lu';

interface AdBanner {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  btnColor: string;
  btnText: string;
  btnName: string;
}

function Home() {
  const router = useRouter();
  const [data, setData] = useState<AdBanner[] | null>(null);

  const fetchJsonData = async (): Promise<void> => {
    try {
      const res = await fetch('/data.json');
      const result: AdBanner[] = await res.json();
      setData(result);
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditId = (id: number): void => {
    router.push(`/home/${id}`);
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  return (
    <div className='flex items-center justify-center flex-wrap mx-[10%]'>
      {data?.map((val, i) => (
        <div
          key={i}
          className='relative w-full md:w-[40%] m-2 md:m-4 h-[400px] lg:h-[600px] bg-cover bg-center'
          style={{ backgroundImage: `url(${val.image})` }}
        >
          {/* Positioned pencil icon */}
          <LuPencil
            className="absolute top-4 right-4 h-[2.3rem] w-[2.3rem] text-white cursor-pointer"
            onClick={() => handleEditId(i)}
          />

          {/* Content container */}
          <div className='absolute top-4 left-4 right-4 bottom-4 flex flex-col justify-between space-y-4'>
            <a className='text-[2rem] font-bold' style={{ color: val.btnText }}>
              {val.title}
            </a>
            <a className='text-[1.4rem] font-normal self-center' style={{ color: val.btnText }}>
              {val.description}
            </a>
            <button
              className='px-4 py-2 text-[1rem] rounded-md font-semibold self-end'
              style={{ backgroundColor: val.btnColor, color: val.btnText }}
            >
              {val.btnName}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
