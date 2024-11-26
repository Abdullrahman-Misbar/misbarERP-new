import React from "react";
import { Helmet } from "react-helmet-async";
import { Table } from "../components/molecules/tantable/Table";

type Home_TP = {
  title: string;
};
function Home({ title }: Home_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Table columns={[]} data={{}} />
      </div>
    </>
  );
}

export default Home;
