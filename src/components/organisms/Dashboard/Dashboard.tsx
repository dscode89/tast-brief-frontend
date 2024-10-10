import { TwoColumnedLayout } from "../../styled/containers/TwoColumnedLayout";

export const Dashboard = () => {
  return (
    <TwoColumnedLayout>
      {/* server side validation is needed here to add validation for requested
      file types */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="upload-pdf">Upload Work Package Plan:</label>
        <input type="file" accept=".pdf" />
      </div>
      <div>hello</div>
    </TwoColumnedLayout>
  );
};
