import { ContentLayout } from "@/components/Layout";
import { CreateChart } from "../components/CreateChart";

export const Chart = () => {
  return (
    <ContentLayout title="Chart">
      <div>
        <div>
          <CreateChart />
        </div>
      </div>
    </ContentLayout>
  );
};
