import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [msg, setMsg] = useState("");

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [loading, setLoading] = useState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_gakbjwr", // Use your service ID here
        "template_6rdqwfw", // Use your template ID here
        {
          from_name: name,
          from_email: email,
          message: `Email : ${email} , ContactNo. : ${phn} , Query: ${msg}`,
        },
        "EytP0IeeqzrA57tuw"
        // Use your user ID here
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setOpen(true);
        setLoading(false);
        setEmail("");
        setName("");
        setPhn("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setOpen2(true);
        setLoading(false);
      });
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message Sent Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error" sx={{ width: "100%" }}>
          Some Errored Occured!
        </Alert>
      </Snackbar>

      <div id="contact" className="container mx-auto ">
        <div className="lg:flex">
          <div
            style={{
              background: "rgb(0,35,99)",
              background:
                "linear-gradient(rgb(22 15 69) 0%,  rgb(60, 49, 135) 100%)",
            }}
            className="xl:w-2/5 lg:w-2/5  py-16 xl:rounded-bl  rounded-tr xl:rounded-tr-none"
          >
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto mt-10">
              <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                Now even get trained in any one of the four modules (Listening,
                Speaking, Reading, and Writing) of your choice
              </h1>
              <div className="flex pb-4 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <br />
                <br />
                <p className=" text-lg pl-4 text-white font-bold">
                  +91 7814797447
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
            <form
              id="contact"
              className="bg-white py-4 px-8 rounded-tr rounded-br mt-4"
            >
              <h1
                style={{ color: "#0A970D" }}
                className="text-4xl text-gray-800 font-extrabold mb-6"
              >
                Enter Details
              </h1>
              <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="    ">
                    <label
                      htmlFor="full_name"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      id="full_name"
                      name="full_name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                  <div className="flex flex-col mt-6">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-2/4 max-w-xs">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Phone
                    </label>
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phn}
                      onChange={(e) => setPhn(e.target.value)}
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder
                    name="message"
                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                    rows={8}
                    id="message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    defaultValue={""}
                  />
                </div>
                {/* <button
                  style={{ background: "#292066" }}
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className=" bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button> */}
                <LoadingButton
                  sx={{ backgroundColor: "#292066" }}
                  onClick={(e) => handleSubmit(e)}
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  <span>Submit</span>
                </LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
