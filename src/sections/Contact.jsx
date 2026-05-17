import React, {useRef, useState} from 'react'
import {useMediaQuery} from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange= ({target : {name, value}}) => {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_zliekno",
                "template_krhlmwc",
                {
                    name: form.name,
                    to_name: "Fady",
                    email: form.email,
                    message: form.message
                },
                "AO4GST5UWvpk9woy2"
            )
            setLoading(false);
            await Swal.fire({
                icon: "success",
                theme: "dark",
                animation: true,
                text: "Thank you for you message, I will be responding as soon as possible."
            })
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            await Swal.fire({
                icon: "error",
                theme: "dark",
                animation: true,
                text: "Something went wrong",
            })
        }
    }
    // service_7osj6dv

    const isTablet = useMediaQuery({maxWidth:768});
    return (
        <section>
            <div className={"c-space my-20"}>
                <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                    <img src="/assets/terminal.png" alt="terminal backgroud" className={"absolute inset-0 min-h-screen " + `${isTablet ? "hidden" : ""}`}/>
                    <div className={"contact-container"}>
                        <h3 className="head-text">Contact Me</h3>
                        <p className={"text-lg text-white-600 mt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur corporis ea earum est eveniet ipsum labore mollitia neque, nostrum perferendis porro quae qui sunt tempora tempore temporibus ut, voluptatibus?</p>

                        <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col space-y-5"}>
                            <label className={"space-y-3"}>
                                <span className={"field-label"}>Full Name</span>
                                <input
                                    type="text"
                                    name={"name"}
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={"field-input"}
                                    placeholder="Full Name"
                                />
                            </label>
                            <label className={"space-y-3"}>
                                <span className={"field-label"}>Email</span>
                                <input
                                    type="email"
                                    name={"email"}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={"field-input"}
                                    placeholder="fullname@mail.com"
                                />
                            </label>
                            <label className={"space-y-3"}>
                                <span className={"field-label"}>Your Message</span>
                                <textarea
                                    name={"message"}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className={"field-input"}
                                    placeholder="Type Your Message Here ..."
                                />
                            </label>

                            <button className={"field-btn"} type={"submit"} disabled={loading}>
                                {loading ?
                                    <FontAwesomeIcon icon={faSpinner} size={"sm"} className={"animate-spin"}/> :
                                    <FontAwesomeIcon icon={faPaperPlane} size={"sm"}/>
                                }
                                <p>Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
