// @ts-check
import GoBackButton from "../components/goBackButton";
import Layout from "../components/layout";

export default function Custom500() {
  return (
    <Layout>
      <div className="flex-col">
        <GoBackButton />
        <div className="font-bold text-3xl ">
          500 - Server-side error occurred
        </div>
      </div>
    </Layout>
  );
}
