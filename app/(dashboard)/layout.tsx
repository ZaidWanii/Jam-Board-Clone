import { Navbar } from './_components/navbar'
import { OrgSidebar } from './_components/org-sidebar'
import { SideBar } from './_components/sidebar'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className='h-full'>
      <SideBar />
      <div className='pl-[60px] h-full'>
        <div className=' flex gap-x-3 h-full'>
          <OrgSidebar />
          <div className='h-full flex-1'>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
