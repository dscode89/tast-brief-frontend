import { useState } from "react";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { BorderBottomTextInput } from "../../styled/Forms/Inputs/BorderBottomTextInput";

export const ModalForm = () => {
  const [email, setEmail] = useState({
    value: "",
    isActive: false,
    isValid: false,
  });
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
        <BorderBottomTextInput
          placeholder="Enter Email..."
          $isActive={email.isActive}
          $isValid={email.isValid}
        />
        <PrimaryBtn
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
          isDisabled={false}
          onClick={() => {}}
        >
          Join Us!
        </PrimaryBtn>
      </fieldset>
    </form>
  );
};
