// {
//     "interface": "V1_NFT",
//         "id": "8RwER4P7LH2trUNUpvad5axs73BicR4fSAZFNPycJas4",
//             "content": {
//         "$schema": "https://schema.metaplex.com/nft1.0.json",
//             "json_uri": "https://gateway.irys.xyz/8hpKrmhzFmn6vZ478LwNdeb73Xh7Sxb7eHYrmUUSTmEm",
//                 "files": [
//                     {
//                         "uri": "https://gateway.irys.xyz/5wU2ExaevXnJaSD8uzubJbLAbJSSMSBeN5WBamAoncKd",
//                         "mime": "image/png"
//                     }
//                 ],
//                     "metadata": {
//             "attributes": [
//                 {
//                     "value": "Tree",
//                     "trait_type": "type"
//                 },
//                 {
//                     "value": "151.899685",
//                     "trait_type": "longitude"
//                 },
//                 {
//                     "value": "-26.57275519",
//                     "trait_type": "latitude"
//                 },
//                 {
//                     "value": "Paulownia",
//                     "trait_type": "species"
//                 },
//                 {
//                     "value": "23/09/16",
//                     "trait_type": "plantation_date"
//                 },
//                 {
//                     "value": "2",
//                     "trait_type": "initial_height"
//                 },
//                 {
//                     "value": "1",
//                     "trait_type": "age"
//                 },
//                 {
//                     "value": "7",
//                     "trait_type": "current_height"
//                 },
//                 {
//                     "value": "99.9037437",
//                     "trait_type": "canopy_cover_percentage"
//                 },
//                 {
//                     "value": "2.5",
//                     "trait_type": "current_dbh"
//                 },
//                 {
//                     "value": "4",
//                     "trait_type": "standard_growth_rate_height"
//                 },
//                 {
//                     "value": "5",
//                     "trait_type": "observed_growth_rate_height"
//                 },
//                 {
//                     "value": "2.5",
//                     "trait_type": "standard_growth_rate_dbh"
//                 },
//                 {
//                     "value": "2.5",
//                     "trait_type": "observed_growth_rate_dbh"
//                 },
//                 {
//                     "value": "35/09/16",
//                     "trait_type": "first_harvest_date"
//                 },
//                 {
//                     "value": "47/09/16",
//                     "trait_type": "second_harvest_date"
//                 },
//                 {
//                     "value": "24/09/16",
//                     "trait_type": "update_date"
//                 }
//             ],
//                 "description": "The description of Tree 1",
//                     "name": "Tree 1",
//                         "symbol": "TREE",
//                             "token_standard": "NonFungible"
//         },
//         "links": {
//             "image": "https://gateway.irys.xyz/5wU2ExaevXnJaSD8uzubJbLAbJSSMSBeN5WBamAoncKd"
//         }
//     }

export type TreeNftType = {
  // address: PublicKey;
  address: string;
  //   interface: string;
  owner: string;
  metadata: {
    name: string;
    symbol: string;
    token_standard?: string;
    description?: string;
    attributes:
      | Array<{
          trait_type?: string;
          value?: string | number;
          [key: string]: unknown;
        }>
      | undefined;
  };
  uri: string;
  file?: {
    uri?: string;
    mime?: string;
  };
  authorities?: Array<{
    address: string;
    scopes: string[];
  }>;
  isCompressed: boolean;
  //   data_hash?: string;
  //   creator_hash?: string;
  //   asset_hash?: string;
  tree?: string;
  // data_hash?: PublicKey;
  // creator_hash?: PublicKey;
  // asset_hash?: PublicKey;
  // tree?: PublicKey;
  leaf_id?: number;
  collection?: {
    address?: string;
    verified?: boolean;
    metadata?: {
      name: string;
      symbol: string;
      description?: string;
      image: string;
    };
  };
  attributes?: { [k: string]: string | number };
  //   creator: Array<{ address: string; share: number; verified: boolean }>;
};
