import { Search } from "lucide-react";
import { BreadcrumbsWithoutIcon } from "../../Components/BreadCrumbs";
import ListNews from "./components/ListNews";
import Badge from "../../Components/Badge";
import ImageOverlay from "../../Components/ImageOverlay";
import Pagination from "../../Components/Pagination";
import { useEffect, useState } from "react";
import {
  generatedFakeNews,
  generatedFakeTopic,
  generatedFakeTopicImg,
} from "../../data/seed";

const news = [
  {
    'image': '/image/news_1.png',
    'title': 'Eksplorasi Gaya: Tips Berbusana yang Sesuai dengan Tren Terbaru ',
    'desc': 'Telusuri dunia   dengan artikel ini yang memberikan wawasan mendalam tentang tren terkini. Dapatkan tips tentang cara memadukan pakaian sesuai dengan gaya Anda sendiri.',
    'by': 'Bimo'
  },
  {
    'image': '/image/news_2.png',
    'title': 'Eksplorasi Gaya: Tips Berbusana yang Sesuai dengan Tren Terbaru ',
    'desc': 'Telusuri dunia   dengan artikel ini yang memberikan wawasan mendalam tentang tren terkini. Dapatkan tips tentang cara memadukan pakaian sesuai dengan gaya Anda sendiri.',
    'by': 'Bimo'
  },
  {
    'image': '/image/news_3.png',
    'title': 'Eksplorasi Gaya: Tips Berbusana yang Sesuai dengan Tren Terbaru ',
    'desc': 'Telusuri dunia   dengan artikel ini yang memberikan wawasan mendalam tentang tren terkini. Dapatkan tips tentang cara memadukan pakaian sesuai dengan gaya Anda sendiri.',
    'by': 'Bimo'
  },
  {
    'image': '/image/news_4.png',
    'title': 'Eksplorasi Gaya: Tips Berbusana yang Sesuai dengan Tren Terbaru ',
    'desc': 'Telusuri dunia   dengan artikel ini yang memberikan wawasan mendalam tentang tren terkini. Dapatkan tips tentang cara memadukan pakaian sesuai dengan gaya Anda sendiri.',
    'by': 'Bimo'
  }
]

export default function NewsLayout() {
  // const [news, setNews] = useState([]);
  const [topic_badge, setTopicBadge] = useState([]);
  const [topic_img, setTopicImg] = useState([]);

  useEffect(() => {
    // setNews(generatedFakeNews(4));
    setTopicBadge(generatedFakeTopic(3));
    setTopicImg(generatedFakeTopicImg(3));
  }, []);

  return (
    <>
      <div className='w-full my-[5em]'>
        <div className='container mx-auto'>
          <div className='pt-20'>
            <BreadcrumbsWithoutIcon
              links={[
                {
                  name: "Home",
                  href: "/",
                  show_chevron: true,
                },
                {
                  name: "News",
                  href: "/news",
                  show_chevron: false,
                },
              ]}
            />
          </div>

          <div className='grid grid-cols-3 gap-8 pt-7'>
            <div className='col-span-2'>
              <ListNews news={news} />
              <div className='flex justify-center mt-14'>
                <Pagination>
                  <Pagination.Prev />
                  {Array.from({ length: 3 }).map((_, i) => {
                    return <Pagination.Item number={i} />;
                  })}
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full bg-[#EBEBEB] placeholder:text-[#80868B] placeholder:italic px-[20px] py-[11px] rounded-full'
                  placeholder='Cari judul topik'
                />
                <div className='absolute right-4 top-3.5'>
                  <Search className='w-5 h-5 text-[#80868B]' />
                </div>
              </div>

              <div className='flex flex-col gap-3 pt-7'>
                <h4 className='text-[20px] font-semibold'>
                  Topik yang relevan
                </h4>
                <div className='grid grid-cols-3 gap-3'>
                  {topic_badge.map((el, i) => {
                    return (
                      <a href='#' key={i}>
                        <Badge
                          className={"bg-blue-800 hover:bg-blue-600"}
                          title={el}
                        />
                      </a>
                    );
                  })}
                </div>

                <div className='flex flex-col gap-5 min-h-3/4 h-full overflow-auto mt-5'>
                  {topic_img.map((el, i) => {
                    return (
                      <a href='#' key={i}>
                        <ImageOverlay title={el.title} image={el.image} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
