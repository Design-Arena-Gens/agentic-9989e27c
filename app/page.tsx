"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ShortBuzz BD
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Creative Journey Animation
          </motion.p>
        </motion.div>

        {/* Character Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Character Illustration */}
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-8xl">👨🏽‍🎨</div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 text-6xl"
                  animate={{
                    rotate: [0, 20, -20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  🎨
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 text-5xl"
                  animate={{
                    rotate: [0, -20, 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>

            {/* Character Info */}
            <div className="flex flex-col justify-center">
              <motion.h2
                className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Meet Aarav!
              </motion.h2>
              <motion.div
                className="space-y-3 text-gray-600 dark:text-gray-300"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  <span className="text-lg">25 years old, Creative soul</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-2xl">🎭</span>
                  <span className="text-lg">Energetic & Friendly</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-2xl">👕</span>
                  <span className="text-lg">Denim jacket enthusiast</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  <span className="text-lg">Animation storyteller</span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
        >
          <motion.div
            className="text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              क्या आप भी मेरी तरह छोटी-छोटी एनिमेशन स्टोरी बनाना चाहते हैं? 🎨✨
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              तो चलिए, मेरे साथ इस क्रिएटिव जर्नी का हिस्सा बनिए!
            </p>

            {/* Call to Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">👉</span>
                <span>Facebook पेज को Follow करें</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">💬</span>
                <span>Comments और Stitch करें</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📤</span>
                <span>Post को Share करें</span>
              </motion.button>
            </div>

            <motion.p
              className="text-lg md:text-xl leading-relaxed mt-8 font-semibold"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ✨ जुड़े रहें, मज़ा आएगा! 😄
            </motion.p>

            <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-200">
              मैं हर दिन आपके कमेंट्स और मज़ेदार वीडियोज़ पर आधारित एक नई स्टोरी बनाऊँगा!
            </p>
          </motion.div>
        </motion.div>

        {/* Hashtags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {["#AnimationStory", "#DailyStory", "#CreativeFun", "#ShortBuzzBD"].map(
              (tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
                >
                  {tag}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* Floating Emojis */}
        <div className="fixed inset-0 pointer-events-none">
          {["🎨", "✨", "💫", "🌟", "🎭", "🎬", "📱", "💜"].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
