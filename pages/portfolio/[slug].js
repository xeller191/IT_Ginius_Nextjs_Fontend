import { fetchPortFolio } from "@/services/portfolio_api";
import MainLayout from "src/components/layouts/MainLayout";

const PortfolioDetail = ({ portfolio }) => {
  console.log({ portfolio });

  return (
    <MainLayout
      pageTitle={`${portfolio.Headline} การวางแผนพัฒนาองค์กร | Portfolio | SamitKoyom.com`}
      description="ผลงานของฉัน สามิตร โกยม หน้ารวบรวมผลงาน"
      KeyWords="ผลงาน, สามิตร โกยม,หน้ารวบรวมผลงาน,อาจารย์สอนเขียนเว็บ, สอน PHP and MySQL,ปรึกษาโปรเจ็กต์ทำเว็บ,รับทำเว็บ,รับออกแบบเว็บไซต์, แอพพลิเคชั่น android, แอพพลิเคชั่น ios"
      image="https://www.itgenius.co.th/assets/frondend/images/socialcover/home-social-share.jpg"
    >
      <section>
        <div className="container py-20 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full p-4 lg:w-4/12">
              <img
                src={`http://localhost:1337${portfolio.image[0].url}`}
                className="w-full"
              />
            </div>
            <div className="w-full p-4 lg:w-7/12 lg:ml-auto">
              <h6 className="mb-3 font-medium text-indigo-900">
                {portfolio.Headline}
              </h6>
              <h2 className="mb-3 text-4xl font-semibold leading-tight text-gray-800 capitalize">
                {portfolio.Headline}
              </h2>
              <p className="mb-4">{portfolio.content}</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioDetail;

//1
export async function getStaticPaths() {
  const portfolioItems = await fetchPortFolio("portfolios");
  return {
    paths: portfolioItems.map((portfolio) => ({
      params: {
        slug: portfolio.slug,
      },
    })),
    fallback: true, // false or 'blocking'  //fallback = true คือ error แล้วไปทำอย่างอื่น  // false ถ้า Error หาไม่เจอให้หยุดทำงานเลย
  };
}

//2
export async function getStaticProps({ params }) {
  const portfolio = await fetchPortFolio(`portfolios?slug=${params.slug}`); //http://localhost:1337/portfolios?slug=my-first-portfolio-entry
  return {
    props: { portfolio: portfolio[0] },
    revalidate: 30,
  };
}
