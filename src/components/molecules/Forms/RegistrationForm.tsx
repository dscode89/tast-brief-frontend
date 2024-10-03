import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/BorderBottomTextInput";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";
import { dateOfBirthOptions } from "../../../mock-data/dateOfBirthOptions";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";

import React, { FormEvent, SetStateAction } from "react";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { SelectDropDown } from "./SelectDropDown";
import { PhoneNumberInput } from "./PhoneNumberInput";

export interface SignInFormProps {
  setIsLogin: React.Dispatch<SetStateAction<boolean>>;
}

export const RegistrationForm = ({ setIsLogin }: SignInFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <ContentCenteredColumn
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <VerticalFormWrapper onSubmit={handleSubmit}>
        <HeadingTertiary fontSizeRem={1.3} color="">
          Let's get set up!
        </HeadingTertiary>
        <BorderBottomTextInput placeholder="Enter firstname..." />
        <BorderBottomTextInput placeholder="Enter lastname..." />
        <BorderBottomTextInput
          placeholder="Enter password..."
          type="password"
        />
        <BorderBottomTextInput placeholder="Enter email..." />
        <PhoneNumberInput countryDialCodes={countryDialCodes} />

        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            margin: "25px 5px",
          }}
        >
          <HeadingQuarternary fontSizeRem={0.7} color="#a8a8a8">
            DOB:(DD/MM/YYYY)
          </HeadingQuarternary>
          <SelectDropDown
            dropDownName="date"
            options={dateOfBirthOptions.days}
            optionText="day"
            optionValue="day"
          />
          <SelectDropDown
            dropDownName="month"
            options={dateOfBirthOptions.months}
            optionText="month"
            optionValue="month"
          />

          <SelectDropDown
            dropDownName="date"
            options={dateOfBirthOptions.years}
            optionText="year"
            optionValue="year"
          />
        </div>
        <BorderBottomTextInput placeholder="Enter company..." />
        <BorderBottomTextInput placeholder="Enter role..." />
        <BorderBottomTextInput placeholder="Enter job title..." />
        <PrimaryBtn
          onClick={() => {}}
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
        >
          Submit
        </PrimaryBtn>
      </VerticalFormWrapper>
    </ContentCenteredColumn>
  );
};
