export const DUR_SNACKBAR_TX = 60000 //in my ts app I used 60
export const DUR_SNACKBAR = 15000

export const supportedNetworks = [
  {
    name: "Goerli",
    id: "5",
    contractAddress: "0x3aF9F0408456b4296A74ad42bAc3879750aC1842", //irrelevant for resettable demo  
    //prev "0x589702910E28a5D6F3c08DB3a48833EF0174B78c",
    WCFactoryAddress: "0x83292B67BaBF3E141c58526F0a26FB33F4A42Cb0",
  },
  {
    name: "Local (with chain id 1337)",
    id: "1337",
    contractAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    WCFactoryAddress: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  },
]

//   export enum RpcCallErrorStatus {
//     UNDEFINED,
//     NO_ERROR,
//     RECOGNIZED_RPC_ERROR,
//     OTHER_ERROR,
//   }

export const RpcCallErrorInitVals = {
  status: "",
  code: "",
  method: "",
  fullMsg: "",
  userMsg: "",
  level: "",
}

export const txCodes = [
  { code: "ACTION_REJECTED", userMsg: "Tx rejected by user", level: "info" },
  {
    code: "CALL_EXCEPTION",
    userMsg: "Contract reverted execution",
    level: "error",
  },
  {
    code: "INSUFFICIENT_FUNDS",
    userMsg: "Insufficient balance for tx",
    level: "error",
  },
  {
    code: "NETWORK_ERROR",
    userMsg: "Network is not responding to requests",
    level: "error",
  },
  {
    code: "INVALID_ARGUMENT", //when I put an empty string for contract address
    //or enter invalid entry for an input field
    userMsg: "Trying to send invalid data",
    level: "error",
  },
]

export const tokenIds = "0 1 2 3 4 5 6 7 8 9 10 11".split(" ")
export const mediaPrefix =
  "https://bafybeid2eloamo5bbswztq5wp4t7xf42qhn2lfwth4ejdjiy74yvm5fgvy.ipfs.nftstorage.link/" 
  //"https://bafybeibl7guejya2dldrsqpsug7osxix32qyr2t7ggxrzt6ihbkirwhkrq.ipfs.nftstorage.link/" 
export const mediaSuffix = ".jpeg"
export const nNfts = tokenIds.length
export const UNMINTED_PLACEHOLDER_ADDR = "0x0000000000000000000000000000000000000000"

export const PLACEHOLDER_OWNER = "" //"Fetching owner..."
export const initOwners = tokenIds.map(() => PLACEHOLDER_OWNER)
