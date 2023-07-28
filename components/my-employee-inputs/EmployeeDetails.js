"use client";

import React from "react";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { db } from "@/utils/firebaseConfig";

// EmployeeDetails
const EmployeeDetails = () => {
  const [dataInfo, setDataInfo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [hrManager, setHrManager] = useState("");
  const [category, setCategory] = useState("");
  const [workAuthorization, setWorkAuthorization] = useState("");
  const [holidaycalender, setHolidayCalender] = useState("");
  const [weekendProfile, setWeekendProfile] = useState("");
  const [locationRight, setLocationRight] = useState("");
  const [locationLeft, setLocationLeft] = useState("");
  const [veteranStatus, setVeteranstatus] = useState("");
  const [employeeStatus, setEmployeestatus] = useState("");
  const [maritalStatus, setMaritalstatus] = useState("");
  // jobTitle //
  const handleJobtitle = (selectedJobtitle) => {
    setJobTitle(selectedJobtitle);
  };

  // setGender

  const handleGender = (selectedGender) => {
    setGender(selectedGender);
  };

  // ethnicity
  const handleEthnicity = (selectedEthnicity) => {
    setEthnicity(selectedEthnicity);
  };
  // employmentType
  const handleEmploymentType = (selectedEmploymentType) => {
    setEmploymentType(selectedEmploymentType);
  };
  // hrManager
  const handleHrManager = (selectedHrManager) => {
    setHrManager(selectedHrManager);
  };
  // category
  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  // WorkAuthorization
  const handleWorkAuthorization = (selectedWorkAuthorization) => {
    setWorkAuthorization(selectedWorkAuthorization);
  };
  //WeekendProfile
  const handleWeekendprofile = (selectedWeekendProfile) => {
    setWeekendProfile(selectedWeekendProfile);
  };
  //location
  const handleLocationRight = (selectedLocation) => {
    setLocationRight(selectedLocation);
  };

  //locationleft
  const handleLocationleft = (selectedLocation) => {
    setLocationLeft(selectedLocation);
  };
  //veteranstatus
  const handleVeteranstatus = (selectedVeteranstatus) => {
    setVeteranstatus(selectedVeteranstatus);
  };

  //employee status
  const handleEmployeestatus = (selectedEmployeestatus) => {
    setEmployeestatus(selectedEmployeestatus);
  };

  //marital status
  const handleMaritalstatus = (selectedMaritalstatus) => {
    setMaritalstatus(selectedMaritalstatus);
  };

  // calender
  //   const handleHolidayCalender = (selectedHolidayCalender) => {
  //     setHolidayCalender(selectedHolidayCalender);
  //   };

  // Data
  // Job Title data
  const jobTitleOptions = [
    { value: "Front-End", label: "Front-End" },
    { value: "Back-End", label: "Back-End" },
    { value: "Full-stack", label: "Full-stack" },
    { value: "React-js", label: "React-js" },
    { value: "Next-js", label: "Next-js" },
  ];

  // Gender data
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "others", label: "others" },
  ];

  //Ethinicity  data
  const city = [
    { value: "India", label: "India" },
    { value: "Austraila", label: "Austraila" },
    { value: "England", label: "England" },
  ];

  // HR Manager
  const hrManagerOptions = [
    { value: "Recuirt the Employees", label: "Recuirt the Employees" },
    { value: "Hire the Right Person", label: "Hire the Right Person" },
    { value: "Fired the Wrong one", label: "Fired the Wrong one" },
  ];

  // employmentType
  const employmentTypeOptions = [
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Trianee", label: "Trianee" },
  ];

  // Location

  // Nationality
  const LocationRight = [
    { value: "India", label: "India" },
    { value: "Canada", label: "Canada" },
    { value: "America", label: "America" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Paris", label: "Paris" },
    { value: "SriLanka", label: "SriLanka" },
  ];

  // State
  const LocationLeft = [
    { value: "category 1", label: "category 1" },
    { value: "kerala", label: "kerala" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Uttra pradesh", label: "Uttra pradesh" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Lucknow", label: "Lucknow" },
  ];

  // Category
  const categoryOptions = [
    { value: "Category 1", label: "Category 1" },
    { value: "Category 2", label: "Category 2" },
    { value: "Category 3", label: "Category 3" },
  ];

  // Work Authorization
  const workAuthorizationOptions = [
    { value: "Authorization 1", label: "Authorization 1" },
    { value: "Authorization 2", label: "Authorization 2" },
    { value: "Authorization 3", label: "Authorization 3" },
  ];

  // WeekendProfile
  const weekendProfileOptions = [
    { value: "Weekend Profile 1", label: "Weekend Profile 1" },
    { value: "Weekend Profile 2", label: "Weekend Profile 2" },
    { value: "Weekend Profile 3", label: "Weekend Profile 3" },
  ];

  // Veteran Status
  const veteranStatusOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  // Employee Status
  const employeeStatusOptions = [
    { value: "On-site", label: "On-site" },
    { value: "Work from home", label: "Work from home" },
    { value: "Work from Office", label: "Work from Office" },
    { value: "Bench", label: "Bench" },
  ];

  // Marital Status
  const maritalStatusOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  // custom select style
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 47,
      borderRadius: 10,
      minHeight: 47,
    }),
  };

  // custom Grouped select style
  const customGroupedStyles = {
    control: (basee) => ({
      ...basee,
      height: 57,
      borderRadius: 10,
      minHeight: 47,
    }),
  };

  // custom select theme
  const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "lightgray",
      primary: "grey",
    },
  });

  const handleOnSubmit = async (value) => {
    const {
      firstName,
      middleName,
      lastName,
      job,
      userName,
      employeeShortName,
      emailAddress,
      alterEmailAddress,
      dateOfBirth,
      social,
      contact,
      gender,
      ethnicity,
      employmentType,
      employeeId,
      hrManager,
      dateOfJoining,
      locationLeft,
      locationRight,
      category,
      classification,
      workAuthorization,
      Payrollid,
      holidayCalender,
      workerId,
      colors,
      veteranStatus,
      employeeStatus,
      maritalStatus,
      employeeType,
    } = value;
    try {
      const docRef = await addDoc(collection(db, "EmployeeFields"), {
        ...value,
        // contactnumber: Number(contactnumber),
        // contactnumber: parseInt(contactnumber),
      });
    } catch (e) {
      console.log("Adding Document:", e);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      job: "",
      userName: "",
      employeeShortName: "",
      emailAddress: "",
      alterEmailAddress: "",
      dateOfBirth: "",
      social: "",
      contact: "",
      gender: "",
      ethnicity: "",
      employmentType: "",
      employeeId: "",
      hrManager: "",
      dateOfJoining: "",
      locationLeft: "",
      locationRight: "",
      category: "",
      classification: "",
      workAuthorization: "",
      Payrollid: "",
      holidayCalender: "",
      workerId: "",
      colors: "",
      veteranStatus: "",
      employeeStatus: "",
      maritalStatus: "",
      employeeType: "",
    },

    onSubmit: handleOnSubmit,

    // onsubmit
    // onSubmit: (value) => {
    //   setDataInfo((prev) => [...prev, value]);
    //   localStorage.setItem("EmployeeDetails", JSON.stringify(dataInfo));
    // },

    // Formik Validation

    validationSchema: Yup.object().shape({
      // firstName
      firstName: Yup.string()
        .max(12, "firstName contains less than 12 letter")
        .min(3, "firstName contains more than 3 letter")
        .required(),

      // middleName
      middleName: Yup.string()
        .max(12, "middleName contains less than 12 letter")
        .min(3, "middleName contains more than 3 letter")
        .required(),

      // lastName
      lastName: Yup.string()
        .max(3, "lastName contains less than 3 letter")
        // .min(1, "lasttName contains more than 1 letter")
        .required("lastName is required"),
      // jobTitle
      job: Yup.object().required(),

      // userName
      userName: Yup.string()
        .max(5, "userName contains less than 5 letter")
        .min(5, "userName contains more than 5 letter")
        .required(),

      // employeeShortName
      employeeShortName: Yup.string()
        .max(5, "employeeShortName contains less than 5 letter")
        .min(5, "employeeShortName contains more than 5 letter")
        .required(),

      // emailAddress
      emailAddress: Yup.string().email("Invalid email address").required(),

      // alterEmailAddress
      alterEmailAddress: Yup.string()
        .email("Invalid alterEmailAddress address")
        .required(),

      // dateOfBirth
      dateOfBirth: Yup.string().required(),
      // social
      social: Yup.string()

        .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
          message: "Invalid Indian number",
          excludeEmptyString: false,
        })
        .required("socialSecurityNumber is a requried field"),
      // contact
      contact: Yup.string()
        .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
          message: "Invalid Indian number",
          excludeEmptyString: false,
        })
        .required(),
      // gender
      gender: Yup.object().required(),
      // ethnicity
      ethnicity: Yup.object().required(),
      // employmentType
      employmentType: Yup.object().required(),
      // employmentid
      employeeId: Yup.string()
        .max(5, "employeeId contains less than 5 letter")
        .min(5, "employeeId contains more than 5 letter")
        .required(),
      // hrManager
      hrManager: Yup.object().required(),

      // dateofJoining

      dateOfJoining: Yup.string().required(),

      // Location
      location: Yup.object().required(),

      // category
      category: Yup.object().required(),
      // classification
      classification: Yup.string().required(),
      // workAuthorization
      workAuthorization: Yup.object().required(),
      // Payrollid
      Payrollid: Yup.string()
        .max(5, "Payrollid contains less than 5 letter")
        .min(5, "Payrollid contains more than 5 letter")
        .required(),
      // holidayCalender
      holidayCalender: Yup.string().required(),
      // workerId
      workerId: Yup.string()
        .max(5, "workerId contains less than 5 letter")
        .min(5, "workerId contains more than 5 letter")
        .required(),
      // colors
      weekendProfile: Yup.array().required(),
      // veteranStatus
      veteranStatus: Yup.object().required(),

      // employeeStatus
      employeeStatus: Yup.array().required(),
      // maritalStatus
      maritalStatus: Yup.object().required(),
      // employeeType
      employeeType: Yup.string().required(),
    }),
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  return (
    <div className="ml-[3rem] py-3">
      <h1 className="text-red-500 ml-[4rem]">EMPLOYEE DETAILS</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="ml-[4rem] " onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-3 gap-5 my-8">
            {/* First Name */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="firstName"
                  className={`${
                    formik.touched.firstName &&
                    formik.errors.firstName &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>First Name</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  // className="input input-bordered join-item w-[10rem]"
                  className={`${
                    formik.touched.firstName &&
                    formik.errors.firstName &&
                    "border-red-400"
                  } input input-bordered join-item w-[10rem]`}
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p style={{ color: "red" }}> {formik.errors.firstName}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Middle Name */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="middleName"
                  className={`${
                    formik.touched.middleName &&
                    formik.errors.middleName &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Middle Name</span>
                </label>

                <input
                  name="middleName"
                  value={formik.values.middleName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="middleName"
                  type="text"
                  className={`${
                    formik.touched.middleName &&
                    formik.errors.middleName &&
                    "border-red-400"
                  } input input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.middleName && formik.errors.middleName && (
                    <p style={{ color: "red" }}> {formik.errors.middleName}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Last Name */}
            <div className=" join  flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="lastName"
                  className={`${
                    formik.touched.lastName &&
                    formik.errors.lastName &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Last Name</span>
                </label>

                <input
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  id="lastName"
                  type="text"
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.touched.lastName &&
                    formik.errors.lastName &&
                    "border-red-400"
                  } input input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p style={{ color: "red" }}> {formik.errors.lastName}</p>
                  )}
                </small>
              </div>
            </div>
            {/* Job Title */}
            <div className="join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="job"
                  className={`${
                    formik.touched.job &&
                    formik.errors.job &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Job Title</span>
                </label>

                <Select
                  name="job"
                  value={(formik.values.job = jobTitle)}
                  onChange={(selectedOption) => {
                    handleJobtitle(selectedOption);
                  }}
                  id="job"
                  theme={theme}
                  styles={customStyles}
                  options={jobTitleOptions}
                  onBlur={formik.handleBlur}
                  // select-bordered  max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.job && formik.errors.job & "border-red-500"
                  } select-bordered  max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.job && formik.errors.job && (
                    <p style={{ color: "red" }}> {formik.errors.job}</p>
                  )}
                </small>
              </div>
            </div>

            {/* User Name */}
            <div className=" join  flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="userName"
                  className={`${
                    formik.touched.userName &&
                    formik.errors.userName &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>User Name</span>
                </label>

                <input
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  id="userName"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.userName &&
                    formik.errors.userName &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.userName && formik.errors.userName && (
                    <p style={{ color: "red" }}> {formik.errors.userName}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Employee Short Name */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="employeeShortName"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.employeeShortName &&
                    formik.errors.employeeShortName &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Employee Short Name</span>
                </label>

                <input
                  name="employeeShortName"
                  value={formik.values.employeeShortName}
                  onChange={formik.handleChange}
                  id="employeeShortName"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.employeeShortName &&
                    formik.errors.employeeShortName &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.employeeShortName &&
                    formik.errors.employeeShortName && (
                      <p style={{ color: "red" }}>
                        {formik.errors.employeeShortName}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Email Address */}

            <div className=" join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="emailAddress"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.emailAddress &&
                    formik.errors.emailAddress &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Email Address</span>
                </label>

                <input
                  name="emailAddress"
                  value={formik.values.emailAddress}
                  onChange={formik.handleChange}
                  id="emailAddress"
                  type="email"
                  placeholder="info@site.com"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.emailAddress &&
                    formik.errors.emailAddress &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.emailAddress &&
                    formik.errors.emailAddress && (
                      <p style={{ color: "red" }}>
                        {formik.errors.emailAddress}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/*Alter Email Address */}

            <div className=" join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="alterEmailAddress"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.alterEmailAddress &&
                    formik.errors.alterEmailAddress &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Alter Email Address</span>
                </label>

                <input
                  name="alterEmailAddress"
                  value={formik.values.alterEmailAddress}
                  onChange={formik.handleChange}
                  id="alterEmailAddress"
                  type="email"
                  placeholder="info@site.com"
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.alterEmailAddress &&
                    formik.errors.alterEmailAddress &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.alterEmailAddress &&
                    formik.errors.alterEmailAddress && (
                      <p style={{ color: "red" }}>
                        {formik.errors.alterEmailAddress}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Date Of Birth */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="dateOfBirth"
                  className={`${
                    formik.touched.dateOfBirth &&
                    formik.errors.dateOfBirth &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Date Of Birth</span>
                </label>

                <input
                  name="dateOfBirth"
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  id="dateOfBirth"
                  type="date"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.dateOfBirth &&
                    formik.errors.dateOfBirth &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <p style={{ color: "red" }}>{formik.errors.dateOfBirth}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Social Security Number */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="social"
                  className={`${
                    formik.touched.social &&
                    formik.errors.social &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>
                    Social Security Number
                    <span className="text-red-500"> *</span>
                  </span>
                </label>

                <input
                  name="social"
                  value={formik.values.social}
                  onChange={formik.handleChange}
                  id="social"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.social &&
                    formik.errors.social &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.social && formik.errors.social && (
                    <p style={{ color: "red" }}>{formik.errors.social}</p>
                  )}
                </small>
              </div>
            </div>
            {/* Contact Number */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="contact"
                  className={`${
                    formik.touched.contact &&
                    formik.errors.contact &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Contact Number</span>
                </label>

                <input
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  id="contact"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.contact &&
                    formik.errors.contact &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.contact && formik.errors.contact && (
                    <p style={{ color: "red" }}>{formik.errors.contact}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Gender */}
            <div className="join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="gender"
                  className={`${
                    formik.touched.gender &&
                    formik.errors.gender &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Gender</span>
                </label>

                <Select
                  name="gender"
                  value={(formik.values.gender = gender)}
                  onChange={(selectedOption) => {
                    handleGender(selectedOption);
                  }}
                  id="gender"
                  theme={theme}
                  styles={customStyles}
                  options={genderOptions}
                  onBlur={formik.handleBlur}
                  // select-bordered  max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.gender &&
                    formik.errors.gender &&
                    "border-red-400"
                  } select-bordered  max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.gender && formik.errors.gender && (
                    <p style={{ color: "red" }}>{formik.errors.gender}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Ethnicity */}
            <div className="join  flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="ethnicity"
                  className={`${
                    formik.touched.ethnicity &&
                    formik.errors.ethnicity &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Ethnicity</span>
                </label>

                <Select
                  name="ethnicity"
                  value={(formik.values.ethnicity = ethnicity)}
                  onChange={(selectedOption) => {
                    handleEthnicity(selectedOption);
                  }}
                  id="ethnicity"
                  theme={theme}
                  styles={customStyles}
                  options={city}
                  onBlur={formik.handleBlur}
                  // select-bordered  max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.ethnicity &&
                    formik.errors.ethnicity &&
                    "border-red-400"
                  } select-bordered  max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.ethnicity && formik.errors.ethnicity && (
                    <p style={{ color: "red" }}>{formik.errors.ethnicity}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Employment Type */}
            <div className="join  flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="employmentType"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.employmentType &&
                    formik.errors.employmentType &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Employment Type</span>
                </label>

                <Select
                  name="employmentType"
                  value={(formik.values.employmentType = employmentType)}
                  onChange={(selectedOption) => {
                    handleEmploymentType(selectedOption);
                  }}
                  id="employmentType"
                  theme={theme}
                  styles={customStyles}
                  options={employmentTypeOptions}
                  onBlur={formik.handleBlur}
                  // max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.employmentType &&
                    formik.errors.employmentType &&
                    "border-red-400"
                  } select-bordered  max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.employmentType &&
                    formik.errors.employmentType && (
                      <p style={{ color: "red" }}>
                        {formik.errors.employmentType}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Employee ID */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="employeeId"
                  className={`${
                    formik.touched.employeeId &&
                    formik.errors.employeeId &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Employee ID</span>
                </label>

                <input
                  name="employeeId"
                  value={formik.values.EmployeeId}
                  onChange={formik.handleChange}
                  id="employeeId"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.employeeId &&
                    formik.errors.employeeId &&
                    "border-red-400"
                  } input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.employeeId && formik.errors.employeeId && (
                    <p style={{ color: "red" }}>{formik.errors.employeeId}</p>
                  )}
                </small>
              </div>
            </div>
            {/* end */}
          </div>

          <div className="grid grid-cols-3 mt-[-10px]">
            {/* HR Manager */}
            <div className="join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="hrManager"
                  className={`${
                    formik.touched.hrManager &&
                    formik.errors.hrManager &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>HR Manager</span>
                </label>

                <Select
                  name="hrManager"
                  value={(formik.values.hrManager = hrManager)}
                  onChange={(selectedOption) => {
                    handleHrManager(selectedOption);
                  }}
                  id="hrManager"
                  theme={theme}
                  styles={customStyles}
                  options={hrManagerOptions}
                  onBlur={formik.handleBlur}
                  // max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.hrManager &&
                    formik.errors.hrManager &&
                    "border-red-400"
                  } max-w-xs join-item w-[10rem]`}
                />
              </div>
              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.hrManager && formik.errors.hrManager && (
                    <p style={{ color: "red" }}>{formik.errors.hrManager}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Date Of Joining */}
            <div className=" gap-2">
              <div className=" join  flex-col gap-2">
                <div className="flex">
                  <label
                    htmlFor="dateOfJoining"
                    // btn  join-item w-[10rem]
                    className={`${
                      formik.touched.dateOfJoining &&
                      formik.errors.dateOfJoining &&
                      "bg-red-400 text-white"
                    } btn  join-item w-[10rem]`}
                  >
                    <span>Date Of Joining</span>
                  </label>

                  <input
                    id="dateOfJoining"
                    type="date"
                    onBlur={formik.handleBlur}
                    // input  input-bordered join-item w-[10rem]
                    className={`${
                      formik.touched.dateOfJoining &&
                      formik.errors.dateOfJoining &&
                      "border-red-400"
                    } input  input-bordered join-item w-[10rem]`}
                    name="dateOfJoining"
                    value={formik.values.dateOfJoining}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.dateOfJoining &&
                    formik.errors.dateOfJoining && (
                      <p style={{ color: "red" }}>
                        {formik.errors.dateOfJoining}
                      </p>
                    )}
                </small>
              </div>
            </div>
          </div>

          {/* end */}

          <div className="grid grid-cols-3 gap-5 my-5 ">
            {/* Location */}
            <div className="join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[6rem] */}
                <label
                  htmlFor="location"
                  className={`${
                    formik.touched.location &&
                    formik.errors.location &&
                    "border-red-400 bg-red-400 text-white"
                  } btn  join-item w-[6rem]`}
                >
                  <span>Location</span>
                </label>
                <div className="flex gap-1">
                  <Select
                    name="locationRight"
                    value={
                      (formik.values.location = locationRight) &&
                      (formik.values.locationRight = locationRight)
                    }
                    // onChange={formik.handleLocationRight}
                    onChange={(selectedOption) => {
                      handleLocationRight(selectedOption);
                    }}
                    id="locationRight"
                    theme={theme}
                    styles={customStyles}
                    options={LocationRight}
                    // onBlur={formik.handleBlur}
                    // max-w-xs join-item w-[7rem]
                    className=" max-w-xs join-item w-[7rem]"
                  />

                  <Select
                    name="LocationLeft"
                    value={
                      (formik.values.location = locationLeft) &&
                      (formik.values.locationLeft = locationLeft)
                    }
                    // onChange={formik.handleLocation}
                    onChange={(selectedOption) => {
                      handleLocationleft(selectedOption);
                    }}
                    id="LocationLeft"
                    theme={theme}
                    styles={customStyles}
                    options={LocationLeft}
                    // onBlur={formik.handleBlur}
                    //  max-w-xs join-item w-[7rem]
                    className="max-w-xs join-item w-[7rem]"
                  />
                </div>
              </div>

              {/* for state */}
            </div>

            {/* Category */}
            <div className="join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="category"
                  className={`${
                    formik.touched.category &&
                    formik.errors.category &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Category</span>
                </label>

                <Select
                  name="category"
                  value={(formik.values.category = category)}
                  onChange={(selectedOption) => {
                    handleCategory(selectedOption);
                  }}
                  id="category"
                  theme={theme}
                  styles={customStyles}
                  options={categoryOptions}
                  onBlur={formik.handleBlur}
                  // max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.category &&
                    formik.errors.category &&
                    "border-red-400"
                  }max-w-xs join-item w-[10rem]`}
                />
              </div>
              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.category && formik.errors.category && (
                    <p style={{ color: "red" }}>{formik.errors.category}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Classification */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="classification"
                  // btn  join-item w-[10rem]
                  className="join-item w-[10rem]"
                >
                  <span>Classification</span>
                </label>

                {/* <Select
              id="classification"
              theme={theme}
              styles={customStyles}
              options={classification}
              className=" max-w-xs join-item w-[10rem]"
            /> */}

                <label className="label cursor-pointer">
                  <span className="label-text">Billable</span>

                  <input
                    // value={formik.values.classification}
                    // onChange={formik.handleChange}
                    type="radio"
                    name="classification"
                    // onBlur={formik.handleBlur}
                    // radio checked:bg-blue-500 max-w-xs
                    className="radio checked:bg-blue-500 max-w-xs"
                  />
                  <label className="label cursor-pointer">
                    <span className="label-text">Non-Billable</span>

                    <input
                      //   value={formik.values.classification}
                      //   onChange={formik.handleChange}
                      type="radio"
                      name="classification"
                      //   onBlur={formik.handleBlur}
                      // radio checked:bg-red-500 max-w-xs
                      className="radio checked:bg-red-500 max-w-xs"
                    />
                  </label>
                </label>
              </div>
            </div>

            {/* Work Authorization */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="workAuthorization"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.workAuthorization &&
                    formik.errors.workAuthorization &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Work Authorization</span>
                </label>

                <Select
                  name="workAuthorization"
                  value={(formik.values.workAuthorization = workAuthorization)}
                  onChange={(selectedOption) => {
                    handleWorkAuthorization(selectedOption);
                  }}
                  id="workAuthorization"
                  theme={theme}
                  styles={customStyles}
                  options={workAuthorizationOptions}
                  onBlur={formik.handleBlur}
                  // max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.workAuthorization &&
                    formik.errors.workAuthorization &&
                    "border-red-400"
                  } max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.workAuthorization &&
                    formik.errors.workAuthorization && (
                      <p style={{ color: "red" }}>
                        {formik.errors.workAuthorization}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Payroll ID */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="Payrollid"
                  className={`${
                    formik.touched.Payrollid &&
                    formik.errors.Payrollid &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Payroll ID</span>
                </label>

                <input
                  name="Payrollid"
                  value={formik.values.Payrollid}
                  onChange={formik.handleChange}
                  id="Payrollid"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.Payrollid &&
                    formik.errors.Payrollid &&
                    "border-red-400"
                  }  input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.Payrollid && formik.errors.Payrollid && (
                    <p style={{ color: "red" }}>{formik.errors.Payrollid}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Holiday Calender */}
            <div className=" join  flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="holidayCalender"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.holidayCalender &&
                    formik.errors.holidayCalender &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Holiday Calender</span>
                </label>

                <input
                  name="holidayCalender"
                  value={formik.values.holidayCalender}
                  onChange={formik.handleChange}
                  id="holidayCalender"
                  type="date"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.holidayCalender &&
                    formik.errors.holidayCalender &&
                    "border-red-400"
                  }  input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.holidayCalender &&
                    formik.errors.holidayCalender && (
                      <p style={{ color: "red" }}>
                        {formik.errors.holidayCalender}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Worker ID */}
            <div className=" join flex-col gap-2">
              <div className="flex">
                {/* btn  join-item w-[10rem] */}
                <label
                  htmlFor="workerId"
                  className={`${
                    formik.touched.workerId &&
                    formik.errors.workerId &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Worker ID</span>
                </label>

                <input
                  name="workerId"
                  value={formik.values.workerId}
                  onChange={formik.handleChange}
                  id="workerId"
                  type="text"
                  onBlur={formik.handleBlur}
                  // input  input-bordered join-item w-[10rem]
                  className={`${
                    formik.touched.workerId &&
                    formik.errors.workerId &&
                    "border-red-400"
                  }  input  input-bordered join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.workerId && formik.errors.workerId && (
                    <p style={{ color: "red" }}>{formik.errors.workerId}</p>
                  )}
                </small>
              </div>
            </div>

            {/* Weekend Profile */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="weekendProfile"
                  // btn btn-sm join-item w-[10rem] h-[2.4rem]
                  className={`${
                    formik.touched.weekendProfile &&
                    formik.errors.weekendProfile &&
                    "bg-red-400 text-white"
                  } btn btn-sm join-item w-[10rem] h-[2.4rem]`}
                >
                  <span>Weekend Profile</span>
                </label>
                {/* <Select
              id="weekendProfile"
              theme={theme}
              styles={customStyles}
              options={weekendProfile}
              className=" max-w-xs join-item w-[10rem]"
            /> */}

                <Select
                  value={(formik.values.weekendProfile = weekendProfile)}
                  onChange={(selectedOption) => {
                    handleWeekendprofile(selectedOption);
                  }}
                  // styles={customGroupedStyles}
                  // defaultValue={[weekendProfile[2]]}
                  isMulti
                  name="colors"
                  options={weekendProfileOptions}
                  onBlur={formik.handleBlur}
                  // basic-multi-select max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.weekendProfile &&
                    formik.errors.weekendProfile &&
                    "border-red-400"
                  }  basic-multi-select max-w-xs join-item w-[10rem]`}
                  classNamePrefix="select"
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.weekendProfile &&
                    formik.errors.weekendProfile && (
                      <p style={{ color: "red" }}>
                        {formik.errors.weekendProfile}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Veteran Status */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="veteranStatus"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.veteranStatus &&
                    formik.errors.veteranStatus &&
                    "bg-red-400 text-white"
                  } btn  join-item w-[10rem]`}
                >
                  <span>Veteran Status</span>
                </label>
                <Select
                  name="veteranStatus"
                  value={(formik.values.veteranStatus = veteranStatus)}
                  onChange={(selectedOption) => {
                    handleVeteranstatus(selectedOption);
                  }}
                  id="veteranStatus"
                  theme={theme}
                  styles={customStyles}
                  options={veteranStatusOptions}
                  onBlur={formik.handleBlur}
                  // max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.veteranStatus &&
                    formik.errors.veteranStatus &&
                    "border-red-400"
                  }   max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.veteranStatus &&
                    formik.errors.veteranStatus && (
                      <p style={{ color: "red" }}>
                        {formik.errors.veteranStatus}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/*Employee Status */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="employeeStatus"
                  // btn btn-sm join-item w-[10rem] h-[2.4rem]
                  className={`${
                    formik.touched.employeeStatus &&
                    formik.errors.employeeStatus &&
                    "bg-red-400 text-white"
                  }  btn btn-sm join-item w-[10rem] h-[2.4rem]`}
                >
                  <span>Employee Status</span>
                </label>

                <Select
                  name="employeeStatus"
                  value={(formik.values.employeeStatus = employeeStatus)}
                  // onChange={formik.handleChange}
                  // defaultValue={[weekendProfile[2]]}
                  isMulti
                  // styles={customGroupedStyles}
                  onChange={(selectedOption) => {
                    handleEmployeestatus(selectedOption);
                  }}
                  // name="colors"
                  options={employeeStatusOptions}
                  onBlur={formik.handleBlur}
                  // basic-multi-select max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.employeeStatus &&
                    formik.errors.employeeStatus &&
                    "border-red-400"
                  }  basic-multi-select max-w-xs join-item w-[10rem]`}
                  classNamePrefix="select"
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.employeeStatus &&
                    formik.errors.employeeStatus && (
                      <p style={{ color: "red" }}>
                        {formik.errors.employeeStatus}
                      </p>
                    )}
                </small>
              </div>
            </div>

            {/* Marital Status */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="maritalStatus"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.maritalStatus &&
                    formik.errors.maritalStatus &&
                    "bg-red-400 text-white"
                  }  btn  join-item w-[10rem]`}
                >
                  <span>Marital Status</span>
                </label>

                <Select
                  name="maritalStatus"
                  value={(formik.values.maritalStatus = maritalStatus)}
                  // onChange={formik.handleChange}
                  onChange={(selectedOption) => {
                    handleMaritalstatus(selectedOption);
                  }}
                  id="maritalStatus"
                  theme={theme}
                  styles={customStyles}
                  options={maritalStatusOptions}
                  onBlur={formik.handleBlur}
                  //  max-w-xs join-item w-[10rem]
                  className={`${
                    formik.touched.maritalStatus &&
                    formik.errors.maritalStatus &&
                    "border-red-400"
                  } max-w-xs join-item w-[10rem]`}
                />
              </div>

              <div className="flex justify-center">
                <small className="text-[11px]">
                  {formik.touched.maritalStatus &&
                    formik.errors.maritalStatus && (
                      <p style={{ color: "red" }}>
                        {formik.errors.maritalStatus}
                      </p>
                    )}
                </small>
              </div>
            </div>

            <div></div>

            {/* Employee Type */}
            <div className="join flex-col gap-2">
              <div className="flex">
                <label
                  htmlFor="employeeType"
                  // btn  join-item w-[10rem]
                  className={`${
                    formik.touched.maritalStatus &&
                    formik.errors.maritalStatus &&
                    "bg-red-400 text-white"
                  }  btn  join-item w-[10rem]`}
                >
                  <span>Employee Type</span>
                </label>

                <div className="flex flex-col join-item w-[10rem]">
                  <div>
                    <label className="label cursor-pointer">
                      <input
                        // value={formik.values.employeeType}
                        // onChange={formik.handleChange}
                        type="radio"
                        name="employeeType"
                        // onBlur={formik.handleBlur}
                        // radio checked:bg-blue-500 max-w-xs
                        className="radio checked:bg-blue-500 max-w-xs"
                      />
                      <span className="label-text">
                        Employee/Consultant/Contractor
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="label cursor-pointer">
                      <input
                        // value={formik.values.employeeType}
                        // onChange={formik.handleChange}
                        type="radio"
                        name="employeeType"
                        // onBlur={formik.handleBlur}
                        // radio checked:bg-red-500 max-w-xs
                        className=" radio checked:bg-red-500 max-w-xs"
                      />
                      <span className="label-text">Back-Office Staff</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* end */}
            </div>
          </div>

          <div className="flex justify-end mr-9 gap-2">
            <button className="btn btn-primary submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeDetails;
