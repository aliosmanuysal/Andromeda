import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr13schxwee8hx86gwyej9j8dcy2x08s35fw70mhmvk300evffq32us36edxk",
            cw721: "andr1rq8qtj4zfdxqakz6dzqe6kp2vtgm3cylnyu7umkhesl3e5qp37uqzk53xj",
            name: "PurpleJaguar",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
    ],
};

export default CONFIG;
