import React, {useState, type SubmitEvent} from "react";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactCTASection: React.FC = () => {
    const [form, setform] = useState({name: "", email: "", message: ""})
     const {ref, isVisible} = useFadeInOnScroll();


     const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
         e.preventDefault();

        const subject = `Portfolio Contact from ${form.name}`;
        const body = `
        Name: ${form.name}
        Email: ${form.email}

        Message: ${form.message}
        `;

        globalThis.location.href = `mailto:kalkidandemes99@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`
     };
    return (
        <section 
            id="contact" 
            ref={ref}
            className={
                `max-w-6xl mx-auto px-6 py-20 transition-all duration-700 bg-white dark:bg-neutral-950
                 ${isVisible ? "opacity-100 transalte-y-0" : "opacity-0 translate-y-10"}`
            }
            >
           
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-10">
                {/* Left info */}
                <div className="space-y-6">
                    <a href="mailto:kalkidandemes99@gmail.com" className="flex items-center gap-4 group">
                        <div className="p-3 rounded-md bg-gray-100 dark:bg-neutral-800 group-hover:bg-blue-100 dark:group-hover:bg-neutral-700 transition">
                            <Mail className="w-5 h-5 text-neutral-700 dark:text-neutral-300"/>
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition" >kalkidandemes99@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-4 group">
                        <div className="p-3 rounded-md bg-gray-100 dark:bg-neutral-800">
                            <Phone className="w-5 h-5 text-neutral-700 dark:text-neutral-300"/>
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition" >+251912450745</span>
                    </div>
                    {/* Social Icons Rows */}
                    <div className="flex items-center gap-6 pt-4">
                        <a
                            href="https://linkedin.com/in/kalkidan-demes-5022361b6"
                            target="_blank"
                            className="p-3 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-neutral-700 transition">
                            <Linkedin className="w-5 h-5 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition"/>
                        </a>

                         <a
                            href="https://github.com/kalkidan999/"
                            target="_blank"
                            className="p-3 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-neutral-700 transition">
                            <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition"/>
                        </a>

                    </div>
                </div>
                {/* Right info */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setform({...form, name: e.target.value})}
                        className="p-3 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input 
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={(e) => setform({...form, email: e.target.value})}
                        className="p-3 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea 
                        placeholder="Your Message"
                        value={form.message}
                        onChange={(e) => setform({...form, message: e.target.value})}
                        rows={5}
                        className="p-3 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button 
                        type="submit"
                        className="btn-primary"
                        >
                        Send Message
                    </button>
               
                </form>
            </div>
        </section>
    );
}

export default ContactCTASection;