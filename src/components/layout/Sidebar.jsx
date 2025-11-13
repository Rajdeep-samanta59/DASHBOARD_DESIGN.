import { LayoutDashboard, AppWindow, Users, BarChart3, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar-simple'

const navItems = [
  { title: 'Dashboard', icon: LayoutDashboard, isActive: true },
  { title: 'Applications', icon: AppWindow, isActive: false },
  { title: 'Tenants', icon: Users, isActive: false },
  { title: 'FinOps', icon: BarChart3, isActive: false },
  { title: 'Settings', icon: Settings, isActive: false },
]

function AppSidebar() {
  return (
    <Sidebar className="hidden lg:flex !bg-slate-950 !border-white/5">
      <SidebarHeader className="px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-lg font-semibold text-white">
            OE
          </div>
          <div>
            <p className="text-base font-semibold text-white">OneElastic</p>
            <p className="text-xs text-slate-400">Workspace</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      className={item.isActive ? '!bg-blue-500/20 !text-white' : '!text-slate-400 hover:!bg-white/5 hover:!text-slate-100'}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar

