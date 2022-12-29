import { MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function PersonalAcc() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let inputType = visible ? "text" : "password";
  function createAccount() {
    navigate("/verifyAccount");
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 charachters or less').required('Required'),
        lastName: Yup.string().max(15, 'Must be 15 charachters or less').required('Required'),
        phoneNumber: Yup.number().optional(),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.number().required('Required'),
        rePassword: Yup.number().required('Required'),
    }),
    onSubmit: (values) => {
        console.log(values);
        if (values) {
          createAccount()
        }
    }
  });

  return (
    <>
      <section className="container m-auto">
        <div className="flex flex-col items-center">
          <form onSubmit={formik.handleSubmit} className="inputs w-11/12 sm:w-2/4 m-auto my-4">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              name="firstName"
              placeholder="First Name"
              className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
            />
                {formik.touched.firstName && formik.errors?.firstName? <span className="text-sm text-red-600 pl-2">{formik.errors.firstName}</span> : null}

            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              name="lastName"
              placeholder="Last Name"
              className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
            />
                {formik.touched.lastName && formik.errors?.lastName? <span className="text-sm text-red-600 pl-2">{formik.errors.lastName}</span> : null}

            <input
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              name="phoneNumber"
              placeholder="Number"
              className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
            />
            <div className="relative">
              <input
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                placeholder="Your Email"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
                {formik.touched.email && formik.errors?.email? <span className="text-sm text-red-600 pl-2">{formik.errors.email}</span> : null}
            </div>
            <div className="relative">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type={inputType}
                name="password"
                placeholder="Password"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <MdOutlineVisibility
                onClick={() => setVisible((visible) => !visible)}
                className="absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition"
              />
                {formik.touched.password && formik.errors?.password? <span className="text-sm text-red-600 pl-2">{formik.errors.password}</span> : null}
            </div>
            <div className="relative">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                type={inputType}
                name="rePassword"
                placeholder="Re-enter password"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <MdOutlineVisibility
                onClick={() => setVisible((visible) => !visible)}
                className="absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition"
              />
                {formik.touched.rePassword && formik.errors?.rePassword? <span className="text-sm text-red-600 pl-2">{formik.errors.rePassword}</span> : null}
            </div>
            <div className="flex flex-row items-center mt-2">
              <input type="checkbox" name="savePass" id="savePass" />
              <p className="text-[#474746] font-medium text-[13px] leading-[20px] ml-1 hover:text-[#E9D023] transition-all">
                Save Password
              </p>
            </div>
            <div className="loginBtn">
              <button
                type="submit"
                onSubmit={formik.handleSubmit}
                className="text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-5 rounded-[10px] w-full my-6 hover:bg-[#E9D023] hover:text-[#474746] transition"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PersonalAcc;
