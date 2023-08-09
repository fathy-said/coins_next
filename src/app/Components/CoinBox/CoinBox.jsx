import Card from "@mui/material/Card";
import Image from "next/image";

const CoinBox = ({ coinData }) => {
  return (
    <Card className=" !p-[20px]  h-full max-w-[345px]  flex justify-center items-center gap-[20px] flex-col">
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
          <h3 style={{ color: coinData.color }}>{coinData?.name}</h3>
        </div>
        <h4> symbol : {coinData?.symbol}</h4>
        <h4> price: {Number(coinData?.price).toFixed(3)}$</h4>
      </div>
    </Card>
  );
};

export default CoinBox;
