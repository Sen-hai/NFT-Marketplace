import { PinataSDK } from "pinata"

console.log("--------------")
console.log(process.env.PINATA_JWT)
console.log(process.env.NEXT_PUBLIC_GATEWAY_URL)
export const pinata = new PinataSDK({
  pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYWUwM2IxZS02ODE0LTQ5NjgtYmViMC05MjQxNWU4OTNmMGEiLCJlbWFpbCI6IjEzOTU2MDE0ODNAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJiMjExNzQ2MDEwYTI4MzUwZWQ4Iiwic2NvcGVkS2V5U2VjcmV0IjoiZmI4ODIzN2IwYTdmYzdhOTU4MzYzNGM3YzM5ZDI1MDQyNGRjYTViNmEwOWMwMzI0MGMyNjZjOGNkOTRkZGNiYSIsImV4cCI6MTc1NzQxNzA3MH0.tv9hxT37i26p9_vxdobTjqlRHu1e-FK-bhK9mbDBzAA",
  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`
})