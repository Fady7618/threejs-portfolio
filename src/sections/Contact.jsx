import React from 'react'

const Contact = () => {
    return (
        <section>
            <div className={"c-space my-20"}>
                <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                    <img src="/assets/terminal.png" alt="terminal backgroud" className={"absolute inset-0 min-h-screen"}/>
                    <div className={"contact-container"}>
                        <h3 className="head-text">Contact Me</h3>
                        <p className={"text-lg text-white-600 mt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur corporis ea earum est eveniet ipsum labore mollitia neque, nostrum perferendis porro quae qui sunt tempora tempore temporibus ut, voluptatibus?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
