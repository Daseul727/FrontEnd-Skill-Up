import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {Noto_Sans_KR} from "next/font/google";

type LayoutProps = {
  children: React.ReactNode
  hideHeader?: boolean
  hideFooter?: boolean
  className?: string
}

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['100', '400', '700', '900'],
    variable: '--font-notoSansKr',
})

export default function Layout({ children, hideHeader = false, hideFooter = false, className }: LayoutProps) {
  return (
    <div className={`${notoSansKr.className}`}>
      {hideHeader || <Header />}
      <div>
          {children}
      </div>
      {hideFooter || <Footer />}
    </div>
  )
}