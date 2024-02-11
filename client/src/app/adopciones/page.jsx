// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";
import getDogs from "@/services/getDogs";
import Adoptions from "./components/Adoptions";

// export async function getData() {
//   // const baseUrl = process.env.NEXT_PRIVATE_SERVER;

//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ["dogs"],
//     queryFn: getDogs,
//   });

//   return {
//     dehydratedState: dehydrate(queryClient),
//   };
// }

export default async function AdoptionsPage() {
  // const dogs = await getDogs();
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["dogs"],
  //   queryFn: getDogs,
  // });

  return (
    <>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <Adoptions />
      {/* </HydrationBoundary> */}
    </>
  );
}
