import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const FeedbackVideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [showUnmute, setShowUnmute] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Try playing with sound first
                    video.muted = false;
                    video.play().catch(() => {
                        // Browser blocked unmuted autoplay — fallback to muted
                        video.muted = true;
                        setIsMuted(true);
                        setShowUnmute(true);
                        video.play().catch(() => {});
                    });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    const handleUnmute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = false;
        setIsMuted(false);
        setShowUnmute(false);
    };

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
                            ref={videoRef}
                            className="w-full h-auto"
                            controls
                            playsInline
                            preload="auto"
                        >
                            <source src="/Feedback video.mp4#t=0.5" type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>

                        {/* Unmute overlay button */}
                        {showUnmute && isMuted && (
                            <button
                                onClick={handleUnmute}
                                className="absolute top-3 right-3 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-navy-dark font-semibold text-sm shadow-lg hover:bg-gold/90 transition-all duration-200 animate-pulse"
                            >
                                <VolumeX className="w-4 h-4" />
                                Toque para ativar o som
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeedbackVideoSection;
