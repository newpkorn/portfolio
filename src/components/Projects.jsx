import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ darkMode }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    const handleImageClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div className={`pb-4 ${darkMode ? 'border border-neutral-900' : ''}`}>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Projects
            </motion.h2>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                onClick={() => handleImageClick(project)}
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 cursor-pointer"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 lg:text-justify text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className={`
                                        mr-2 
                                        mb-2
                                        rounded 
                                        bg-neutral-900 
                                        px-2 py-1 text-sm 
                                        font-medium 
                                        ${darkMode ? 'text-purple-900' : 'text-white'}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {showModal && selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`
                                relative 
                                p-4 
                                max-w-3xl 
                                w-full 
                                h-auto 
                                rounded 
                                ${darkMode ?
                                    'bg-neutral-950 bg-opacity-85 text-white'
                                    :
                                    'bg-neutral-100 bg-opacity-85 text-black'}`
                            }
                        >
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-auto h-auto object-contain mx-auto"
                                />
                            </div>
                            <h2 className="text-center text-2xl mt-4">{selectedProject.title}</h2>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
