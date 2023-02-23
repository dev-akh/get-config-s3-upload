
const defineDate=new Date('2030-12-31');//Add define data to alive
export const dateISOString = new Date(+defineDate + 864e5).toISOString();
export const xAmzDate =  dateISOString.split("-").join("").split(":").join("").split(".").join("");
export const dateYMD = dateISOString.split("T")[0].split("-").join("");
