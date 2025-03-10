'use client'

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  BadgeDollarSign,
  LandPlot,
  ChartColumnDecreasing,
  ChevronDown,
  ChevronRight,
  Moon,
  Sun,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useState } from 'react'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'Agenti',
    url: '/agents',
    icon: Users,
  },
  {
    title: 'Vendite',
    url: '/products',
    icon: BadgeDollarSign,
  },
  {
    title: 'Regioni',
    url: '/geo-view',
    icon: LandPlot,
  },
  {
    title: 'Analisi',
    url: '/analysis',
    icon: ChartColumnDecreasing,
  },
]

export function AppSidebar() {
  const { theme, setTheme } = useTheme()
  const [isAnalisiExpanded, setIsAnalisiExpanded] = useState(false)

  return (
    <Sidebar>
      <SidebarContent>
        <div className='flex justify-start m-5'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className='h-4 w-4 text-primary' />
            ) : (
              <Moon className='h-4 w-4 text-primary' />
            )}
          </Button>
        </div>
        {/* Gruppo principale */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className='p-5'>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
