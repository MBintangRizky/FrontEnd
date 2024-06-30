import { useParams } from "react-router-dom";
import { BreadcrumbsWithoutIcon } from "../../../Components/BreadCrumbs";
import Quote from "./components/Quote";
import Badge from "../../../Components/Badge";
import ImageOverlay from "../../../Components/ImageOverlay";
import Comment from "./components/comment/Comment";
import FormComment from "./components/comment/FormComment";

export default function NewsContent() {
  const { id } = useParams();

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
                  show_chevron: true,
                },
                {
                  name: id,
                  href: "#",
                  show_chevron: false,
                },
              ]}
            />
          </div>

          <div className='grid grid-cols-3 gap-20 mt-10'>
            <div className='col-span-2'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>
                  Eksplorasi Gaya: Tips Berbusana yang Sesuai dengan Tren
                  Terbaru.
                </h1>
                <small>
                  Jan Blomqvist |{" "}
                  <span className='font-light'>08 Sep 2023</span>
                </small>
              </div>

              <div className='mt-6'>
                <p className='leading-relaxed text-[#6C757D] text-md'>
                  Pakaian tidak hanya sekadar penutup tubuh, tetapi juga
                  merupakan cara untuk mengekspresikan diri. Bagaimana Anda
                  berpakaian bisa menjadi cerminan dari kepribadian dan gaya
                  hidup Anda. Dengan begitu banyaknya tren mode yang berkembang
                  setiap musim, penting untuk tetap up-to-date dengan tren
                  terbaru dan menyesuaikan gaya Anda sesuai keinginan. Di sini,
                  kami akan memberikan beberapa tips tentang bagaimana Anda
                  dapat bereksplorasi dengan gaya Anda dan tetap memperhatikan
                  tren terkini.
                </p>

                <div className='my-10'>
                  <Quote />
                </div>

                <div>
                  <div
                    className="w-full h-[350px] bg-[url('https://images.unsplash.com/photo-1718547389141-59736120c5b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat rounded-md"
                    alt=''
                  />
                </div>

                <div className='flex flex-col gap-10 my-10'>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-2xl text-[#4A4A4A]'>
                      1. Ketahui Tren Terbaru
                    </h3>
                    <p className='leading-relaxed text-[#6C757D] text-md'>
                      Langkah pertama untuk eksplorasi gaya yang sukses adalah
                      dengan mengetahui tren mode terbaru. Ikuti desainer mode
                      terkemuka, jelajahi majalah mode, dan perhatikan apa yang
                      dipamerkan oleh selebriti atau influencer mode di media
                      sosial. Dengan mengetahui tren terbaru, Anda dapat membuat
                      keputusan yang lebih bijaksana dalam memilih pakaian dan
                      aksesori.
                    </p>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <h3 className='text-2xl text-[#4A4A4A]'>
                      2. Temukan Gaya Pribadi Anda
                    </h3>
                    <p className='leading-relaxed text-[#6C757D] text-md'>
                      Saat Anda mengikuti tren, penting juga untuk tetap setia
                      pada gaya pribadi Anda. Cobalah untuk mengeksplorasi
                      berbagai gaya dan melihat apa yang membuat Anda merasa
                      nyaman dan percaya diri. Apakah Anda lebih suka gaya yang
                      kasual dan santai, atau apakah Anda lebih memilih tampilan
                      yang lebih formal dan elegan? Temukan apa yang benar-benar
                      mencerminkan kepribadian dan preferensi Anda.
                    </p>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <h3 className='text-2xl text-[#4A4A4A]'>
                      3. Eksperimen dengan Warna dan Pola
                    </h3>
                    <p className='leading-relaxed text-[#6C757D] text-md'>
                      Salah satu cara terbaik untuk mengeksplorasi gaya Anda
                      adalah dengan menggabungkan warna dan pola yang berbeda.
                      Jangan takut untuk mencoba kombinasi warna yang tidak
                      biasa atau mencampur-matching pola yang berani. Eksperimen
                      dengan nuansa yang berbeda dapat memberikan tampilan yang
                      segar dan unik.
                    </p>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <p className='leading-relaxed text-[#6C757D] text-md'>
                      Dengan mengikuti tips-tips di atas, Anda dapat
                      bereksplorasi dengan gaya Anda sendiri dan tetap terhubung
                      dengan tren terbaru dalam mode. Ingatlah bahwa mode adalah
                      tentang mengekspresikan diri dan menunjukkan siapa Anda
                      kepada dunia. Jadi, jadilah kreatif, percaya diri, dan
                      nikmatilah proses eksplorasi gaya Anda!
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-2'>
                  <div className='w-full h-[1px] bg-[#CED4DA]' />
                  <div className='flex justify-end gap-8'>
                    <span className='text-[#6C757D] font-light text-sm'>
                      80
                    </span>
                    <span className='text-[#6C757D] font-light text-sm'>
                      123
                    </span>
                    <span className='text-[#6C757D] font-light text-sm'>
                      58
                    </span>
                    <a
                      href='#'
                      className='text-[#6C757D] font-light text-sm hover:underline'>
                      Share
                    </a>
                  </div>
                </div>

                <div className='flex gap-5'>
                  {Array.from({ length: 4 }).map((_, i) => {
                    return (
                      <Badge
                        title={"Fashion"}
                        className={"py-[5px] px-[10px] bg-red-400 w-fit"}
                        classNameText={"text-sm"}
                      />
                    );
                  })}
                </div>

                <div className='w-full h-[1px] bg-[#CED4DA] mt-[26px]' />
              </div>

              <div className='my-14'>
                <div className='flex gap-6'>
                  <div className='self-center'>
                    <img
                      src={`https://avatar.vercel.sh/${id}`}
                      alt=''
                      className='rounded-full w-[90px] h-[90px]'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <p className='text-xl'>Bimo</p>
                    <small className='text-[#6C757D]'>
                      “Fifth Strategy” Book Author, Cosmetic doctors
                    </small>
                    <div className='py-[8px] px-[10px] text-sm bg-[#3B3B3B] rounded-full w-fit text-white'>
                      Author Posts
                    </div>
                  </div>
                </div>
              </div>

              <Comment>
                <Comment.Item name={"Jason"} date={"08 Sep 2024"}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  porttitor, mollis fames scelerisque to an aliquam ac non est
                  penatibus hac, sapien elementum tincidunt nunc magna varius
                  leo.
                </Comment.Item>
                <Comment.Item name={"Jason"} date={"08 Sep 2024"}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  porttitor, mollis fames scelerisque to an aliquam ac non est
                  penatibus hac, sapien elementum tincidunt nunc magna varius
                  leo.
                </Comment.Item>
                <Comment.Item name={"Jason"} date={"08 Sep 2024"}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  porttitor, mollis fames scelerisque to an aliquam ac non est
                  penatibus hac, sapien elementum tincidunt nunc magna varius
                  leo.
                </Comment.Item>
              </Comment>

              <FormComment />
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>Popular Topics:</p>
                <div className='flex gap-3 mt-3'>
                  {Array.from({ length: 3 }).map((_, i) => {
                    return (
                      <a href='#' key={i}>
                        <Badge
                          className={
                            "py-[5px] px-[10px] bg-[#E9ECEF] hover:opacity-65 w-fit"
                          }
                          title={"Fashion"}
                          classNameText={"!text-black text-sm"}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className='flex flex-col gap-10 mt-14'>
                {Array.from({ length: 4 }).map((_, i) => {
                  return <ImageOverlay key={i} className={"h-[297px]"} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
