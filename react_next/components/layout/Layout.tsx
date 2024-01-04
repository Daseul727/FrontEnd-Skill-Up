import RootLayout from "@/components/layout/RootLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type LayoutProps = {
  children: React.ReactNode
  hideHeader?: boolean
  hideFooter?: boolean
  className?: string
}

export default function Layout({ children, hideHeader = false, hideFooter = false, className }: LayoutProps) {
  return (
    <RootLayout>
      {hideHeader || <Header />}
      <div>
          <div>{children}</div>
      </div>
      {hideFooter || <Footer />}
    </RootLayout>
  )
}