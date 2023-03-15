import Image from "next/image";

type Props = {
  salesData: {
    statistics: {
      floor_price: number;
      total_volume: number;
      market_cap: number;
      one_day_average_price: number;
      num_owners: number;
      total_supply: number;
    };
  };
  nftData: {
    contract: {
      name: string;
      medata: {
        cached_thumbnail_url: string;
        description: string;
      };
    };
  };
};

export default function CollectionInfo({ salesData, nftData }: Props) {
  const stat = [
    {
      metric: "Floor:",
      amount: `${salesData.statistics.floor_price} ETH`,
    },
    {
      metric: "Total Vol:",
      amount: `${Math.round(salesData.statistics.total_volume)} ETH`,
    },
    {
      metric: "Market Cap:",
      amount: `${Math.round(salesData.statistics.market_cap)} ETH`,
    },
    {
      metric: "Avg Sale(24h):",
      amount: `${
        Math.round(salesData.statistics.one_day_average_price * 10) / 10
      } ETH`,
    },
    {
      metric: "Owners:",
      amount: `${salesData.statistics.num_owners}`,
    },
    {
      metric: "Supply:",
      amount: `${Math.round(salesData.statistics.total_supply)}`,
    },
  ];
  function renderStats() {
    return stat.map((stat, index) => {
      return (
        <div className="flex justify-between bg-zinc-700 p-2" key={index}>
          <div>{stat.metric}</div>
          <div>{stat.amount}</div>
        </div>
      );
    });
  }

  return (
    <div className="container flex flex-wrap mb-16">
      <div className="section-img flex grow justify-center">
        <Image
          className="min-w-[250px] min-h-[250px]"
          src={nftData.contract.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="placeholder"
        />
      </div>
      <div className="section-stats grow justify-center">
        <div className="stat-title text-4xl font-semibold mb-8 text-center mt-5 min-[940]:mt-0">
          {nftData.contract.name.replace(/([A-Z])/g, " $1").trim()}
        </div>
        <div className="stat-details-section grid grid-cols-2 gap-x-14 gap-y-4 text-xlg uppercase">
          {renderStats()}
        </div>
      </div>
      <div className="section-info flex items-center justify-center grow mt-10 px-2 min-[940]:px-8">
        <div>
          <div className="px-12 text-center text-xl">
            {nftData.contract.metadata.description}
          </div>
        </div>
      </div>
    </div>
  );
}
