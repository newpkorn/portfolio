import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MdCheckCircle, MdError } from 'react-icons/md';

const ContactForm = ({ darkMode }) => {
    const form = useRef(null);
    const [alert, setAlert] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                (res) => {
                    console.log('SUCCESS!', res.status, res.text);

                    setAlert({
                        type: 'success',
                        message: 'Email sent successfully!',
                    });

                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setAlert({
                        type: 'error',
                        message: 'Failed to send email. Please try again.',
                    });
                }
            );
    };

    useEffect(() => {
        if (alert.message) {
            const timer = setTimeout(() => {
                setAlert({ type: '', message: '' });
            }, 5000);

            return () => clearTimeout(timer);

        }
    }, [alert]);

    return (
        <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-4xl text-center mb-6 pb-5"
            >
                Contact Me
            </motion.h2>

            {alert.message && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center p-4 mb-4 text-sm rounded-lg 
                        ${alert.type === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                >
                    {alert.type === 'success' ? (
                        <MdCheckCircle className="text-xl mr-2" />
                    ) : (
                        <MdError className="text-xl mr-2" />
                    )}
                    {alert.message}
                </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail}>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <label className="block text-sm font-semibold mb-2" htmlFor="from_name">
                        Your Name
                    </label>
                    <input
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-700"
                        required
                        type="text"
                        id="from_name"
                        name="from_name"
                    />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        placeholder="johndoe@example.com"
                        className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-700"
                        required
                        type="email"
                        id="email"
                        name="email"
                    />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <label className="block text-sm font-semibold mb-2" htmlFor="from_subject">
                        Subject
                    </label>
                    <input
                        placeholder="Subject"
                        className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-700"
                        required
                        type="text"
                        id="from_subject"
                        name="from_subject"
                    />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <label className="block text-sm font-semibold mb-2" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Type your message here..."
                        className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-700"
                        required
                        id="message"
                        name="message"
                    />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    {darkMode ?
                        (
                            <button
                                type="submit"
                                className="
                                relative 
                                inline-flex 
                                h-12 
                                active:scale-95 
                                transistion 
                                overflow-hidden 
                                rounded-lg 
                                p-[1px] 
                                focus:outline-none"
                            >
                                <span
                                    className="
                                    absolute 
                                    inset-[-1000%] 
                                    animate-[spin_2s_linear_infinite] 
                                    bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                >
                                </span>
                                <span
                                    className="
                                    inline-flex 
                                    h-full 
                                    w-full 
                                    cursor-pointer 
                                    items-center 
                                    justify-center 
                                    rounded-lg 
                                    bg-slate-950 
                                    px-7 
                                    text-sm 
                                    font-medium 
                                    text-white 
                                    backdrop-blur-3xl 
                                    gap-2 
                                    undefined"
                                >
                                    Contact me
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        )
                        :
                        (
                            /* From Uiverse.io by EcheverriaJesus */
                            <button
                                type='submit'
                                className="
                                flex items-center
                                bg-blue-500
                                text-white 
                                gap-1 
                                px-4 
                                py-2 
                                cursor-pointer 
                                text-white ß
                                font-semibold 
                                tracking-widest 
                                rounded-md 
                                hover:bg-blue-400 
                                duration-300 hover:gap-2 
                                hover:translate-x-3"
                            >
                                Send
                                <svg
                                    className="w-5 h-5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>

                        )
                    }
                </motion.div>
            </form>
        </div>
    );
};

export default ContactForm;
