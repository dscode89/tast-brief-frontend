import { useState, useRef, useLayoutEffect } from "react";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { CenteredModal } from "../../styled/Modals/CenteredModal";
import { FixedOpaqueOverlay } from "../../styled/containers/FixedOpaqueOverlay";

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
  // const dialogRef = useRef<HTMLDialogElement>(null);

  //   useLayoutEffect(() => {
  //     if (dialogRef.current) {
  //       if (dialogRef.current.open && !modalIsActive) {
  //         dialogRef.current.close();
  //       } else if (!dialogRef.current.open && modalIsActive) {
  //         dialogRef.current.showModal();
  //       }
  //     }
  //   }, [modalIsActive]);

  console.log(modalIsActive);
  return (
    <div>
      <PrimaryBtn
        color={textColor}
        bgcolor={bgcolor}
        onClick={() => {
          setModalIsActive((current) => !current);
        }}
      >
        {children}
      </PrimaryBtn>

      {modalIsActive ? (
        <FixedOpaqueOverlay>
          <CenteredModal $widthPx={400}>
            <PrimaryBtn
              color="red"
              bgcolor="gree"
              onClick={() => {
                setModalIsActive((current) => !current);
              }}
            >
              Close
            </PrimaryBtn>
          </CenteredModal>
        </FixedOpaqueOverlay>
      ) : null}
    </div>
  );
};
