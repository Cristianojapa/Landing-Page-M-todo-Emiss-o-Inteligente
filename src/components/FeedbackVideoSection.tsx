import { motion } from "framer-motion";

const FeedbackVideoSection = () => {
    return (
        <section className="py-16 md:py-24 bg-navy-dark/30">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="font-heading font-bold text-2xl md:text-4xl text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Feedback em <span className="text-gold">Vídeo</span>
                </motion.h2>

                <motion.p
                    className="text-muted-foreground text-center mb-12 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Veja o depoimento real de quem já transformou sua forma de viajar
                </motion.p>

                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-colors shadow-2xl shadow-gold/5">
                        <video
                            className="w-full h-auto"
                            controls
                            preload="metadata"
                            playsInline
                        >
                            <source src="/Feedback video.mp4#t=0.5" type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeedbackVideoSection;
