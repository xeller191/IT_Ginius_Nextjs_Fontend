import Link from "next/link";
import MainLayout from "../src/components/layouts/MainLayout";
import { fetchPortFolio } from "@/services/portfolio_api";

export default function Home({ portfolioItems }) {
  console.log(portfolioItems);

  const portfolioItemsComponent = portfolioItems.map((item, index) => (
    <div className="w-full p-4 lg:w-3/12 sm:w-6/12" key={index}>
      {/* href ให้ใช้  alias */}
      <Link href={`/portfolio/[id]`} as={`/portfolio/${item.slug}`}>
        <a className="block text-left hover:opacity-75">
          <img
            src={`http://localhost:1337${item.image[0].url}`}
            className="object-cover w-full h-64"
          />
          <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
            <h5 className="text-base font-semibold text-gray-900">
              {item.Headline}
            </h5>
            <i className="fa-plus fas" />
          </div>
        </a>
      </Link>
    </div>
  ));

  return (
    <MainLayout
      pageTitle="หน้าหลัก | Portfolio | SamitKoyom.com"
      description="ผลงานของฉัน สามิตร โกยม หน้ารวบรวมผลงาน"
      KeyWords="ผลงาน, สามิตร โกยม,หน้ารวบรวมผลงาน,อาจารย์สอนเขียนเว็บ, สอน PHP and MySQL,ปรึกษาโปรเจ็กต์ทำเว็บ,รับทำเว็บ,รับออกแบบเว็บไซต์, แอพพลิเคชั่น android, แอพพลิเคชั่น ios"
      image="https://www.itgenius.co.th/assets/frondend/images/socialcover/home-social-share.jpg"
    >
      <section>
        <div className="container py-20 mx-auto text-center">
          <div className="w-full px-4 mb-4 lg:mx-auto lg:w-1/2">
            <h2 className="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">
              รวมผลงานล่าสุดของฉัน
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.{" "}
            </p>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            {portfolioItemsComponent}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

//จะยิง props นั้นๆ
export async function getStaticProps() {
  const portfolioItems = await fetchPortFolio("portfolios");
  return {
    props: { portfolioItems }, // will be passed to the page component as props
    revalidate: 30, //30 sec จะ build ใหม่
  };
}
