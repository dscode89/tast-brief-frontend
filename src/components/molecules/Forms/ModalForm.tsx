import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";

export const ModalForm = () => {
  return (
    <form style={{ width: "90%", padding: "0.35em" }}>
      <fieldset
        style={{
          padding: "1.2em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #D3D3D3",
        }}
      >
        <legend>Email Address</legend>
        <input
          type="text"
          placeholder="Enter Email Here..."
          style={{
            height: "40px",
            width: "90%",
            marginBottom: "1.2rem",
            border: "none",
            borderBottom: "1px solid #5dbea3",
            outline: "none",
            fontSize: "1.2rem",
            padding: "0.25em",
          }}
        />
        <PrimaryBtn
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5
"
          onClick={() => {}}
        >
          Join Us!
        </PrimaryBtn>
      </fieldset>
    </form>
  );
};
