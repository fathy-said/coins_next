import Link from "next/link";
import CoinBox from "../CoinBox/CoinBox";
import style from "./CoinsBox.module.css";

const CoinsBox = ({ dataGet, error, searchData }) => {
  // console.log(searchData);
  const defaultCoins = () => {
    return (
      <>
        {error !== false ? (
          error.message
        ) : dataGet?.data?.coins?.length ? (
          <>
            {dataGet.data.coins.map((el) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/coin-detail/${el.name}/${el.uuid}`}
                  className=" h-full cursor-pointer"
                >
                  <CoinBox key={el.uuid} coinData={el} />
                </Link>
              );
            })}
          </>
        ) : (
          "not Found En Coins"
        )}
      </>
    );
  };
  const searchTargetCoins = () => {
    return (
      <>
        {searchData?.length ? (
          <>
            {searchData.map((el) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/coin-detail/${el.name}/${el.uuid}`}
                  className=" h-full cursor-pointer"
                >
                  <CoinBox key={el.uuid} coinData={el} />
                </Link>
              );
            })}
          </>
        ) : (
          "not Found En Coins"
        )}
      </>
    );
  };

  return (
    <div
      className={
        style.box_coins +
        " !bg-gray-100 h-full  w-full grid gap-[40px] py-[50px] px-[30px] max-[768px]:justify-center    md:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5"
      }
    >
      {searchData.length ? searchTargetCoins() : defaultCoins()}
    </div>
  );
};

export default CoinsBox;
{
  /* <div className="box" key={el.uuid}>
                <h1>{el.iconUrl}</h1>
              </div> */
}
