import { useState } from "react";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { CenteredModal } from "../../styled/Modals/CenteredModal";
import { FixedWhiteOpaqueOverlay } from "../../styled/containers/FixedOpaqueOverlay";
import { ModalForm } from "../Forms/ModalForm";

interface PrimaryButtonWithModalProps {
  bgcolor: string;
  textColor: string;
  children: React.ReactNode;
}

export const PrimaryButtonWithModal = ({
  textColor,
  bgcolor,
  children,
}: PrimaryButtonWithModalProps) => {
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <div>
      <PrimaryBtn
        color={textColor}
        bgcolor={bgcolor}
        hoverBgColor=""
        onClick={() => {
          setModalIsActive((current) => !current);
        }}
      >
        {children}
      </PrimaryBtn>

      {modalIsActive ? (
        <FixedWhiteOpaqueOverlay>
          <CenteredModal $widthPx={400} $bgColor="#ffffff">
            <h3>Join Mailing List!</h3>
            <ModalForm />
            <PrimaryBtn
              color="white"
              bgcolor="#ED0800"
              hoverBgColor="#f03932"
              onClick={() => {
                setModalIsActive((current) => !current);
              }}
            >
              Close
            </PrimaryBtn>
          </CenteredModal>
        </FixedWhiteOpaqueOverlay>
      ) : null}
    </div>
  );
};
