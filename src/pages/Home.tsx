import { Helmet } from "react-helmet-async";
import { useFetch } from "../hooks";

type Home_TP = {
  title: string;
};
function Home({ title }: Home_TP) {
  //   const queryParams = {
  //   page: page,
  //   term: word,
  // };
  // const searchParams = new URLSearchParams(queryParams as any);
  // const endpoint = `api/auth/session`
  // const { data, refetch, isSuccess, isFetching, isLoading } = useFetch(
  //   {
  //     endpoint: endpoint,
  //     queryKey: [endpoint],
  //     onSuccess: (data) => {
        
  //     },
    
  //   }
  // );
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        
        {/* <Table columns={[]} data={{}} /> */}
      </div>
    </>
  );
}

export default Home;
