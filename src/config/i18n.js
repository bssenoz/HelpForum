import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: "en",
    messages: {
        en: {
            signUp: "Register",
            signIn: "Login",
            home: "Home",
            categories: "Categories",
            ask: "Ask",
            contents: "Contents",
            profile: "Profile",
            search: "Search",
            english: "English",
            turkish: "Turkish",
            pages: "Pages",
            contact: "Contact",
            asked: "asked",
            answer: "answer",
            lastQuestions: "Last Questions",
            newQuestion: "New Question",
            replied: "replied",
            modal: {
                answer: "Answer",
                reply: "Reply",
                yourAnswer: "Your Answer",
                close: "Close"
            },
            answers: "Answers",
            create: {
                ask: "Ask Question",
                category: "Category",
                title: "Title",
                add: "Add",
            },
            newContents: "New Contents",
            yourQuestions: "Your Questions",
            edit: "Edit",
            form: {
                name: "Name",
                surname: "Surname",
                email: "Email",
                password: "Password",
                passwordAgain: "Password Again"
            },
            welcome: "Welcome Back",
            rememberMe: "Remember Me",
            createAccount: "Create Account",
            ifRegister: "If you have already registered"
        },
        tr: {
            signUp: "Kayıt ol",
            signIn: "Giriş",
            home: "AnaSayfa",
            categories: "Kategoriler",
            ask: "Sor",
            contents: "İçerikler",
            profile: "Profil",
            search: "Ara",
            english: "İngilizce",
            turkish: "Türkçe",
            pages: "Sayfalar",
            contact: "İletişim",
            asked: "sordu",
            answer: "cevap",
            lastQuestions: "Son Sorular",
            newQuestion: "Yeni Soru",
            replied: "cevap verdi",
            modal: {
                answer: "Cevap",
                reply: "Cevap Ver",
                yourAnswer: "Cevabın",
                close: "Kapat",
            },
            answers: "Yanıtlar",
            create: {
                ask: "Soru Sor",
                category: "Kategori",
                title: "Başlık",
                add: "Ekle",
            },
            newContents: "Yeni İçerikler",
            yourQuestions: "Soruların",
            edit: "Düzenle",
            form: {
                name: "Ad",
                surname: "Soyad",
                email: "Email",
                password: "Şifre",
                passwordAgain: "Tekrar Şifre"
            },
            welcome: "Tekrar Hoşgeldin",
            rememberMe: "Beni Hatırla",
            createAccount: "Hesap Oluştur",
            ifRegister: "Zaten kayıt olduysanız"
        }

    }
})

export default i18n