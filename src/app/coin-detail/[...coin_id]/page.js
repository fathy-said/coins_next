import { fetchCoinDetail } from "@/app/api/fetch";
import { ExitToApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import Link from "next/link";
const CoinDetail = async ({ params }) => {
  // console.log(params.coin_id[1]);
  let { dataGet, error } = await fetchCoinDetail(`coin/${params.coin_id[1]}`);
  // console.log(dataGet);
  let coinData = await dataGet.data.coin;
  // console.log(coinData);
  // console.log(error);

  return (
    <>
      <div className="container  h-full relative min-h-[100vh] flex justify-center items-center">
        <Card className="  my-[80px] min-[768px]:my-[40px] !shadow-xl rounded-[6px] gap-[20px] !bg-slate-50 w-full max-w-[550px] py-[40px] px-[20px]  flex flex-col justify-center items-center ">
          <div className="img-box w-full flex max-h-[150px] justify-center items-center">
            <Image
              src={coinData.iconUrl}
              alt={coinData?.name}
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-[10px]">
            <div className=" flex justify-center items-center gap-[5px]">
              <h2 className=" ">Name :</h2>
              <h3 style={{ color: coinData?.color }}>{coinData?.name}</h3>
            </div>
            <h4> symbol : {coinData?.symbol}</h4>
            <h4> total : {coinData?.supply?.total}</h4>
            <h4> price: {Number(coinData?.price).toFixed(3)}$</h4>
            <p> description : {coinData?.description}</p>
          </div>
          <a
            target="blank"
            href={coinData?.websiteUrl}
            className=" w-full rounded-[4px] bg-gray-500 max-w-[300px] p-[12px] text-center capitalize text-white font-[600] text-[16px]"
          >
            show More
          </a>
        </Card>
        <div className="back absolute top-[20px] right-[1.5rem] ">
          <Link href={"/"}>
            <IconButton aria-label="">
              <ExitToApp className=" text-[30px] min-[768px]:text-[40px]" />
            </IconButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoinDetail;
