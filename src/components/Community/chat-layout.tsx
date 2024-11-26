import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface ChatLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export function ChatLayout({ children, sidebar }: ChatLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 border-r bg-white hidden md:block">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Here" className="pl-8" />
          </div>
        </div>
        {sidebar}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div>
              <h2 className="font-semibold">Community</h2>
              <p className="text-sm text-muted-foreground">8:00 PM</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Ask Question
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

