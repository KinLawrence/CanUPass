import React, { useState, useEffect, useRef } from 'react';
import {
    Globe, User, BookOpen, Clock, AlertTriangle,
    CheckCircle, Play, CreditCard, Camera, ScanFace,
    Monitor, BrainCircuit
} from 'lucide-react';

// --- 1. Internationalization (i18n) Dictionary ---
const translations = {
    en: {
        app_title: "LinguistAI Pro",
        nav_dashboard: "Dashboard",
        nav_mock_test: "Mock Test",
        nav_pricing: "Pricing",
        lang_en: "English",
        lang_zh_cn: "简体中文",
        lang_zh_tw: "繁體中文",
        start_test: "Start IELTS Mock Test",
        celpip_test: "Start CELPIP Mock Test",
        time_remaining: "Time Remaining",
        ai_proctor: "AI Proctor & Focus Analysis",
        ai_status_analyzing: "Analyzing facial expressions and eye contact...",
        ai_alert_focus: "Focus Alert: Please look at the screen.",
        ai_alert_good: "Good focus. Maintain eye contact.",
        question_title: "Writing Task 1",
        question_desc: "You should spend about 20 minutes on this task. Write at least 150 words.",
        pricing_title: "Upgrade your preparation",
        plan_pro: "Pro Plan",
        plan_pro_price: "$29/mo",
        plan_pro_desc: "Unlimited practice with AI analysis.",
        btn_subscribe: "Subscribe",
        alipay_wechat_supported: "Supports Visa, Mastercard",
    },
    'zh-CN': {
        app_title: "LinguistAI 智考",
        nav_dashboard: "控制台",
        nav_mock_test: "模拟考试",
        nav_pricing: "价格",
        lang_en: "English",
        lang_zh_cn: "简体中文",
        lang_zh_tw: "繁體中文",
        start_test: "开始雅思模考",
        celpip_test: "开始思培模考",
        time_remaining: "剩余时间",
        ai_proctor: "AI监考与注意力分析",
        ai_status_analyzing: "正在分析面部表情和视线...",
        ai_alert_focus: "注意力提醒：请注视屏幕。",
        ai_alert_good: "专注度良好，请保持视线。",
        question_title: "写作任务 1",
        question_desc: "您应在此任务上花费约 20 分钟。请至少写 150 字。",
        pricing_title: "升级您的备考体验",
        plan_pro: "专业版",
        plan_pro_price: "$29/月",
        plan_pro_desc: "无限次练习，包含完整AI分析。",
        btn_subscribe: "订阅",
        alipay_wechat_supported: "支持Visa，万事达卡",
    },
    'zh-TW': {
        app_title: "LinguistAI 智考",
        nav_dashboard: "控制台",
        nav_mock_test: "模擬考試",
        nav_pricing: "價格",
        lang_en: "English",
        lang_zh_cn: "简体中文",
        lang_zh_tw: "繁體中文",
        start_test: "開始雅思模考",
        celpip_test: "開始思培模考",
        time_remaining: "剩餘時間",
        ai_proctor: "AI監考與注意力分析",
        ai_status_analyzing: "正在分析面部表情和視線...",
        ai_alert_focus: "注意力提醒：請注視螢幕。",
        ai_alert_good: "專注度良好，請保持視線。",
        question_title: "寫作任務 1",
        question_desc: "您應在此任務上花費約 20 分鐘。請至少寫 150 字。",
        pricing_title: "升級您的備考體驗",
        plan_pro: "專業版",
        plan_pro_price: "$29/月",
        plan_pro_desc: "無限次練習，包含完整AI分析。",
        btn_subscribe: "訂閱",
        alipay_wechat_supported: "支援Visa，萬事達卡",
    }
};

export default function App() {
    const [lang, setLang] = useState('en');
    const [activeTab, setActiveTab] = useState('dashboard');
    const t = (key) => translations[lang][key] || key;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-800">
            {/* Top Navigation Bar */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <BrainCircuit className="h-8 w-8 text-blue-600" />
                            <span className="font-bold text-xl tracking-tight text-blue-900">{t('app_title')}</span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <button onClick={() => setActiveTab('dashboard')} className={`${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} pb-1 font-medium transition-colors`}>
                                {t('nav_dashboard')}
                            </button>
                            <button onClick={() => setActiveTab('mock_test')} className={`${activeTab === 'mock_test' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} pb-1 font-medium transition-colors`}>
                                {t('nav_mock_test')}
                            </button>
                            <button onClick={() => setActiveTab('pricing')} className={`${activeTab === 'pricing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} pb-1 font-medium transition-colors`}>
                                {t('nav_pricing')}
                            </button>
                        </nav>

                        <div className="flex items-center space-x-4">
                            {/* Language Switcher */}
                            <div className="relative group">
                                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
                                    <Globe className="h-5 w-5" />
                                    <span>{lang === 'en' ? 'EN' : lang === 'zh-CN' ? '简' : '繁'}</span>
                                </button>
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                                    <button onClick={() => setLang('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('lang_en')}</button>
                                    <button onClick={() => setLang('zh-CN')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('lang_zh_cn')}</button>
                                    <button onClick={() => setLang('zh-TW')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('lang_zh_tw')}</button>
                                </div>
                            </div>
                            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <User className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'dashboard' && <Dashboard t={t} setTab={setActiveTab} />}
                {activeTab === 'mock_test' && <MockTest t={t} />}
                {activeTab === 'pricing' && <Pricing t={t} />}
            </main>
        </div>
    );
}

// --- Dashboard Component ---
function Dashboard({ t, setTab }) {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <h1 className="text-2xl font-bold text-gray-900">{t('nav_dashboard')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Exam Cards */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">IELTS Academic</h2>
                            <p className="text-gray-500 text-sm mt-1">Full past paper simulation with AI grading.</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg"><BookOpen className="h-6 w-6 text-blue-600" /></div>
                    </div>
                    <button
                        onClick={() => setTab('mock_test')}
                        className="mt-6 w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        <Play className="h-4 w-4" />
                        <span>{t('start_test')}</span>
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">CELPIP General</h2>
                            <p className="text-gray-500 text-sm mt-1">Computer-delivered format familiarization.</p>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded-lg"><Monitor className="h-6 w-6 text-emerald-600" /></div>
                    </div>
                    <button
                        onClick={() => setTab('mock_test')}
                        className="mt-6 w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                        <Play className="h-4 w-4" />
                        <span>{t('celpip_test')}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

// --- Mock Test Immersive Component (Core Feature) ---
function MockTest({ t }) {
    const [timeLeft, setTimeLeft] = useState(1200); // 20 mins
    const [isTestActive, setIsTestActive] = useState(false);

    // Timer logic
    useEffect(() => {
        let timer;
        if (isTestActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isTestActive, timeLeft]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    if (!isTestActive) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
                <div className="bg-blue-100 p-6 rounded-full">
                    <ScanFace className="h-16 w-16 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">System Check & Calibration</h2>
                <p className="text-gray-500 max-w-md">
                    To ensure an authentic testing environment, our AI requires access to your camera to monitor eye contact and focus, simulating real exam conditions.
                </p>
                <button
                    onClick={() => setIsTestActive(true)}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                    Accept & Begin Exam
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {/* Left Column: Exam Content */}
            <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">{t('question_title')}</h2>
                    <div className={`flex items-center space-x-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-gray-700'}`}>
                        <Clock className="h-5 w-5" />
                        <span>{formatTime(timeLeft)}</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
                    <p className="text-gray-600 mb-4">{t('question_desc')}</p>
                    <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200">
                        <p className="text-sm font-medium text-gray-700">
                            The graph below shows the changes in food consumption by Chinese people between 1985 and 2010.<br /><br />
                            Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
                        </p>
                        {/* Placeholder for chart image */}
                        <div className="w-full h-40 bg-gray-200 mt-4 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                            [Chart Image Placeholder]
                        </div>
                    </div>
                    <textarea
                        className="flex-grow w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-serif text-lg leading-relaxed"
                        placeholder="Start typing your essay here..."
                    ></textarea>
                </div>
            </div>

            {/* Right Column: AI Proctoring Panel */}
            <div className="lg:col-span-1">
                <AIProctorPanel t={t} />
            </div>
        </div>
    );
}

// --- AI Proctoring Sub-Component ---
// Note: In production, MediaPipe/face-api.js would run here to analyze frames.
function AIProctorPanel({ t }) {
    const videoRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(false);
    const [aiStatus, setAiStatus] = useState('good'); // 'good' or 'warning'

    useEffect(() => {
        // Request webcam access
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setHasCamera(true);
                }
            })
            .catch((err) => {
                console.error("Camera access denied or error:", err);
            });

        // Simulate AI Focus Analysis Algorithm randomly triggering
        const aiInterval = setInterval(() => {
            const isDistracted = Math.random() > 0.8; // 20% chance to simulate distraction
            setAiStatus(isDistracted ? 'warning' : 'good');
        }, 5000);

        return () => {
            clearInterval(aiInterval);
            // Cleanup video stream
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-700 flex flex-col sticky top-6">
            <div className="p-4 border-b border-slate-700 bg-slate-800 flex items-center space-x-2">
                <ScanFace className="h-5 w-5 text-blue-400" />
                <h3 className="text-white font-medium text-sm">{t('ai_proctor')}</h3>
            </div>

            <div className="relative aspect-video bg-black">
                {hasCamera ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover transform -scale-x-100"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500">
                        <Camera className="h-8 w-8 mb-2" />
                        <span className="text-xs">Camera Initializing...</span>
                    </div>
                )}

                {/* Face Tracking Overlay UI Simulation */}
                {hasCamera && (
                    <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 m-8 rounded-lg pointer-events-none">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
                    </div>
                )}
            </div>

            <div className="p-4 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>{t('ai_status_analyzing')}</span>
                </div>

                {/* Dynamic AI Feedback Alert */}
                <div className={`p-3 rounded-lg flex items-start space-x-3 transition-colors duration-300 ${aiStatus === 'warning' ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-emerald-500/10 border border-emerald-500/30'}`}>
                    {aiStatus === 'warning' ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    ) : (
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    )}
                    <p className={`text-sm font-medium ${aiStatus === 'warning' ? 'text-amber-500' : 'text-emerald-500'}`}>
                        {aiStatus === 'warning' ? t('ai_alert_focus') : t('ai_alert_good')}
                    </p>
                </div>
            </div>
        </div>
    );
}

// --- Pricing Component ---
function Pricing({ t }) {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('pricing_title')}</h2>
                <p className="mt-4 text-xl text-gray-500">Choose the plan that fits your preparation needs.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 md:w-2/3 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center"><BrainCircuit className="h-6 w-6 mr-2 text-blue-600" /> {t('plan_pro')}</h3>
                    <p className="text-gray-500">{t('plan_pro_desc')}</p>

                    <ul className="space-y-4">
                        {['Full IELTS & CELPIP Past Papers', 'Real-time Facial Focus Tracking', 'AI Essay Grading & Feedback', 'Speaking Voice Analysis'].map((item, i) => (
                            <li key={i} className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-50 p-8 md:w-1/3 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200">
                    <p className="text-5xl font-extrabold text-gray-900">{t('plan_pro_price')}</p>
                    <button className="mt-8 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex justify-center items-center space-x-2">
                        <CreditCard className="h-5 w-5" />
                        <span>{t('btn_subscribe')}</span>
                    </button>
                    <p className="mt-4 text-xs text-center text-gray-400">
                        {t('alipay_wechat_supported')}
                    </p>
                    <div className="flex mt-2 space-x-2 opacity-60">
                        {/* Simulating Payment Logos */}
                        <div className="h-6 w-10 bg-blue-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">Debit/Credit</div>
                        <div className="h-6 w-10 bg-sky-100 rounded flex items-center justify-center text-[10px] font-bold text-sky-600">Alipay</div>
                        <div className="h-6 w-10 bg-green-100 rounded flex items-center justify-center text-[10px] font-bold text-green-700">WeChat</div>
                    </div>
                </div>
            </div>
        </div>
    );
}