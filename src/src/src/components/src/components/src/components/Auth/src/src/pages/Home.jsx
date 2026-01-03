import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: '🎮',
      title: 'حسابات فري فاير',
      desc: 'حسابات مميزة بأسلحة نادرة ومستويات عالية',
      link: '/accounts'
    },
    {
      icon: '💎',
      title: 'قسائم جواهر',
      desc: 'قسائم جواهر فري فاير بأسعار منافسة',
      link: '/vouchers'
    },
    {
      icon: '📱',
      title: 'متابعين وسائل التواصل',
      desc: 'زيادة متابعينك على جميع المنصات',
      link: '/followers'
    }
  ]

  return (
    <div>
      {/* الهيرو */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          مرحبًا بك في MAS Ki stor
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          المتجر الإلكتروني الأفضل لشراء حسابات فري فاير، قسائم الجواهر ومتابعين وسائل التواصل
        </p>
        <div className="mt-8">
          <Link 
            to="/accounts" 
            className="inline-block bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition"
          >
            ابدأ التسوق الآن
          </Link>
        </div>
      </section>

      {/* الأقسام */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">أقسام المتجر</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index}
              to={feature.link}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-6 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* كيف يعمل */}
      <section className="py-12 bg-gray-800/50 rounded-2xl p-8 mt-8">
        <h2 className="text-3xl font-bold text-center mb-10">كيف يعمل المتجر؟</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'اختر المنتج', desc: 'تصفح الأقسام واختر ما يناسبك' },
            { step: '2', title: 'أكمل الدفع', desc: 'ادفع بكل أمان عبر NowPayments' },
            { step: '3', title: 'تأكيد تلقائي', desc: 'يتأكد النظام تلقائيًا من الدفع' },
            { step: '4', title: 'استلام المنتج', desc: 'احصل على المنتج فورًا' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">{item.step}</span>
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
